import{n as t,M as e,d as s}from"./index.9f62cd52.js";import"./ui.5d05d0a0.js";let i=function(t,e){return t.filter((t=>!t.meta||!t.meta.hide)).map((t=>{const n=s(t);let a=0===n.path.indexOf("/")?n.path:[e,n.path].join("/"===e?"":"/");return n.fullPath=a,n.meta||(n.meta={}),Array.isArray(n.children)&&(n.children=i(n.children,a)),n}))};const n=t({props:{subMenu:{type:Boolean,required:!1,default:!1}},data(){return{state:this.$store.state,list:[],showMenu:!0}},computed:{menu:function(){return[...this.$AccessControl?this.state.DynamicRoute[0].children:i(e[0].children)]},activeIndex(){return this.$route.meta&&this.$route.meta.belong?this.$route.meta.belong:this.$route.name}},watch:{$route:{handler(t){if(!this.subMenu)return null;let e=-1;if(Array.isArray(this.list)&&(e=this.list.findIndex((e=>0===t.path.indexOf(e.fullPath)))),-1===e){let t,e=this.menu.slice();for(let s=0;s<e.length;s++)if(0===this.$route.path.indexOf(e[s].path)&&e[s].children){t=e[s].children;break}this.list=t,this.showMenu=!1,this.$nextTick((()=>{this.showMenu=!0}))}},immediate:!0}},created(){this.subMenu||(this.list=this.menu)}},(function(){var t=this,e=t._self._c;return t.showMenu?e("div",{staticClass:"custom-menu scrollbar"},[e("el-menu",{attrs:{"default-active":t.activeIndex,router:"","unique-opened":""}},[t._l(t.list,(function(s,i){return[s.children&&s.children.length?e("el-submenu",{key:"nav"+i,attrs:{route:s,index:s.name}},[e("div",{staticClass:"first flex-row align-center",attrs:{slot:"title"},slot:"title"},[e("i",{class:["ico",s.meta&&s.meta.icon||"el-icon-s-order"]}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")])]),t._l(s.children,(function(s,i){return[s.children&&s.children.length?[e("el-menu-item",{key:"child"+i,staticClass:"second",attrs:{route:s,index:s.name}},[e("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")])]),t._l(s.children,(function(s,i){return e("el-menu-item",{key:"grandson"+i,staticClass:"third",attrs:{route:s,index:s.name}},[e("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")])])}))]:e("el-menu-item",{key:"child2"+i,staticClass:"second",attrs:{route:s,index:s.name}},[e("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")])])]}))],2):e("el-menu-item",{key:"nav"+i,staticClass:"flex-row align-center one",attrs:{route:s,index:s.name}},[e("i",{class:["ico",s.meta&&s.meta.icon||"el-icon-s-order"]}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s.meta&&s.meta.title||s.name)+" ")])])]}))],2)],1):t._e()}),[],!1,null,"08ad4728",null,null).exports;export{n as default};