import { util, store, instance } from "@/core";
import { mainRoute, moduleRoute } from "@/core/router";

let $router;                        // 路由实例
let checkRouteRedirectResult = []; // 临时变量

const setInterceptor = function (resourcePermission) {
    // 添加请求权限校验
    instance.interceptors.request.use((config) => {
        let requestURL = config.url.replace(config.baseURL, "").split("?")[0];

        if (!resourcePermission[config.method + "," + requestURL]) {
            return Promise.reject({
                message: config.method + "," + requestURL + "无访问权限",
            });
        }
        return config;
    });
}

const extendRoutes = function (routePermission) {
    // 根据用户权限动态注入路由
    let actualRouter = [];
    // 递归校验路由权限
    let checkRoutePermission = function (array, base) {
        let replyResult = [];
        array.forEach((route) => {
            let pathKey = (base ? base + "/" : "") + route.path;
            // 扩展fullPath
            route.fullPath = pathKey;

            if (routePermission[pathKey]) {
                if (Array.isArray(route.children)) {
                    route.children = checkRoutePermission(
                        route.children,
                        (base ? base + "/" : "") + route.path
                    );
                }
                replyResult.push(route);
            }
        });
        if (base) {
            return replyResult;
        } else {
            actualRouter = actualRouter.concat(replyResult);
        }
    };

    checkRoutePermission(moduleRoute);

    // 如果没有任何路由权限，判断为非法用户，登出并终止应用执行
    if (!actualRouter || !actualRouter.length) {
        util.storage("auth", "");
        return (document.body.innerHTML =
            "<h1>账号访问受限，请联系系统管理员！</h1>");
    }

    checkRouteRedirectResult = [];
    checkRouteRedirect(actualRouter);

    checkRouteRedirectResult.forEach((route) => {
        $router.addRoute("首页", route);
    });

    $router.addRoute({
        path: "*",
        redirect: "/404",
    });

    return actualRouter;
    
}

const getResourcePermission = function (userPermissions) {
    // 从用户权限数据中提取请求权限
    let resourcePermission = {};
    if (Array.isArray(userPermissions.resources)) {
        userPermissions.resources.forEach((e) => {
            let key = e.method.toLowerCase() + "," + e.url;
            resourcePermission[key] = true;
        });
    }
    return resourcePermission;
}

const getRoutePermission = function (userPermissions) {
    // 从用户权限数据中提取路由权限
    let routePermission = {};
    let setMenu2Hash = function (array, base) {
        array.map((key) => {
            if (key.route) {
                let hashKey = ((base ? base + "/" : "") + key.route).replace(
                    /^\//,
                    ""
                );
                routePermission["/" + hashKey] = true;
                if (Array.isArray(key.children)) {
                    setMenu2Hash(key.children, (base ? base + "/" : "") + key.route);
                }
            }
        });
    };
    if (Array.isArray(userPermissions.menus)) {
        let arrayMenus = util.buildTree(userPermissions.menus);
        setMenu2Hash(arrayMenus);
    }
    return routePermission;
}

const checkRouteRedirect = function (array, base) {
    // 递归校验路由'redirect'路径权限
    let replyResult = [];
    array.forEach((route) => {
        let pathKey = (base ? base + "/" : "") + route.path;
        // 扩展fullPath
        route.fullPath = pathKey;
        // 扩展meta
        if (!route.meta) {
            route.meta = {};
        }
        const currentRouteRedirect =
            route.redirect && route.redirect.split ? route.redirect : null;
        if (
            currentRouteRedirect &&
            Array.isArray(route.children) &&
            route.children.length
        ) {
            const targetIndex = route.children.findIndex((e) => {
                return !e.fullPath || e.fullPath === currentRouteRedirect;
            });
            if (targetIndex === -1) {
                console.warn(
                    `${route.redirect}不在路由权限内，自动重置为${route.children[0].fullPath}`
                );
                route.redirect = route.children[0].fullPath;
            }
        }
        if (Array.isArray(route.children) && route.children.length) {
            checkRouteRedirect(
                route.children,
                (base ? base + "/" : "") + (route.path !== "/" ? route.path : "")
            );
        }
        replyResult.push(route);
    });
    if (base) {
        return replyResult;
    } else {
        checkRouteRedirectResult = checkRouteRedirectResult.concat(replyResult);
    }
}

export default {
    install: function (Vue) {

        // v-auth 指令（用于权限控制）
        Vue.directive('auth', {
            inserted: function (el, binding) {
                if (Vue.prototype.$_auth && !Vue.prototype.$_auth(binding.value)) {
                    el.parentNode.removeChild(el);
                }
            }
        });

        Vue.Auth = function (routeInstance) {
            
            return new Promise((resolve, reject) => {
                
                if (store.get("accessToken") && process.env.VUE_APP_AUTH === "true") {
                    if(routeInstance){
                        $router = routeInstance
                    }else{
                        reject('Vue.Auth(routeInstance): 缺少参数')
                    }
    
                    /*
                     * Step 2-1
                     * 权限控制开启模式
                     */
                    store.action("permission").then((userPermissions) => {
                        /*
                         * Step 3
                         * 请求用户权限数据，格式如下:
                          {
                            menus: [{
                              id: (...)
                              method: (...)
                              name: (...)
                              remark: (...)
                              route: (...)
                              type: 0
                              url: (...)
                            }],
                            resources: [{
                              id: (...)
                              method: (...)
                              name: (...)
                              pid: (...)
                              remark: (...)
                              route: (...)
                              type: (...)
                              url: (...)
                            }]
                          }
                         */

                        let resourcePermission = getResourcePermission(userPermissions);
                        let routePermission = getRoutePermission(userPermissions);

                        /*
                         * Step 5
                         * 根据请求权限设置请求拦截
                         */

                        setInterceptor(resourcePermission);

                        /*
                         * Step 6
                         * 根据路由权限动态添加路由
                         */

                        const actualRouter = extendRoutes(routePermission);
                        
                        /*
                         * Step 7
                         * 注册 this.$_auth 方法和 v-auth 指令 (指令在@/register.js里注册)
                         */

                        Vue.prototype.$_auth = function (axiosRequest) {
                            let RequiredPermissions = [];
                            let permission = true;
                            let collectPermission = function (fun) {
                                let res = util.matchRequest(fun);
                                if (res) {
                                    RequiredPermissions.push(res);
                                }
                            };
                            if (Array.isArray(axiosRequest)) {
                                axiosRequest.forEach(collectPermission);
                            } else if (typeof axiosRequest === "function") {
                                collectPermission(axiosRequest);
                            }
                            //console.log(RequiredPermissions, resourcePermission)
                            for (let i = 0; i < RequiredPermissions.length; i++) {
                                let p = RequiredPermissions[i];
                                if (!resourcePermission[p]) {
                                    permission = false;
                                    break;
                                }
                            }

                            return permission;
                        };

                        resolve(actualRouter);
                    });
                } else {
                    /*
                     * Step 2-2
                     * 权限控制关闭模式
                     */
                    checkRouteRedirectResult = [];
                    checkRouteRedirect(mainRoute[0].children);

                    // 容错
                    Vue.prototype.$_auth = () => true;

                    resolve(checkRouteRedirectResult)
                }
            })

        }
    }
}