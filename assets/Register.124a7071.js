import{n,r as u}from"./index.53ffb119.js";import"./ui.d3440f68.js";const m=e=>/^(?:(?:\+|00)86)?1\d{10}$/.test(String(e)),d=e=>/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(String(e)),c=e=>/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(String(e)),f=e=>/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(String(e)),p=function(e){let r=e.value;return typeof r=="function"&&(r=r()),e.label||(e.label={mobile:"\u624B\u673A\u53F7",idCard:"\u8EAB\u4EFD\u8BC1\u53F7",tel:"\u7535\u8BDD",email:"\u90AE\u7BB1"}[e.validType]||""),new Promise((t,a)=>{if(r==null||!r.length)return e.required?a(`\u8BF7\u8F93\u5165${e.label}`):t();switch(e.validType){case"mobile":m(r)?t():a(`${e.label}\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`);break;case"idCard":d(r)?t():a(`${e.label}\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`);break;case"tel":c(r)?t():a(`${e.label}\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`);break;case"email":f(r)?t():a(`${e.label}\u683C\u5F0F\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`);break;default:a(`\u4E0D\u652F\u6301\u7684validType: ${e.validType}`)}})};var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex-row align-center justify-center registerPage"},[t("div",{staticClass:"register-box"},[t("div",{staticClass:"title"},[e._v("\u6CE8\u518C\u8D26\u53F7")]),t("el-form",{ref:"validForm",attrs:{model:e.formData,rules:e.rules,"label-width":"100px","hide-required-asterisk":"",size:"medium"},nativeOn:{submit:function(a){return a.preventDefault(),e.register.apply(null,arguments)}}},[t("el-form-item",{attrs:{prop:"mobile",required:"",label:"\u624B\u673A\u53F7\uFF1A"}},[t("el-input",{model:{value:e.formData.mobile,callback:function(a){e.$set(e.formData,"mobile",a)},expression:"formData.mobile"}})],1),t("el-form-item",{attrs:{prop:"userInput",label:"\u9A8C\u8BC1\u7801\uFF1A"}},[t("InputSMS",{ref:"InputSMS",attrs:{type:"register",mobile:e.formData.mobile},on:{click:e.sendValidCode}})],1),t("el-form-item",{attrs:{prop:"name",label:"\u59D3\u540D\uFF1A"}},[t("el-input",{model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",typeof a=="string"?a.trim():a)},expression:"formData.name"}})],1),t("el-form-item",{attrs:{prop:"company",label:"\u5DE5\u4F5C\u5355\u4F4D\uFF1A"}},[t("el-input",{model:{value:e.formData.company,callback:function(a){e.$set(e.formData,"company",typeof a=="string"?a.trim():a)},expression:"formData.company"}})],1),t("el-form-item",{attrs:{prop:"password",label:"\u8BBE\u7F6E\u5BC6\u7801\uFF1A"}},[t("InputPassword",{attrs:{autocomplete:"off"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("el-form-item",{attrs:{prop:"checkPass",label:"\u91CD\u590D\u5BC6\u7801\uFF1A"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.formData.checkPass,callback:function(a){e.$set(e.formData,"checkPass",a)},expression:"formData.checkPass"}})],1),t("el-form-item",{staticClass:"submit-item"},[t("el-button",{staticClass:"submit-button",attrs:{"native-type":"submit",type:"primary",loading:e.loading}},[e._v("\u786E \u8BA4")])],1)],1),t("div",{staticClass:"flex-row"},[t("div",{staticClass:"flex-1"}),e._v(" \u5DF2\u6709\u8D26\u53F7\uFF1F"),t("el-link",{staticClass:"first",attrs:{type:"danger"},on:{click:function(a){return e.$router.push({name:"\u767B\u5F55"})}}},[e._v(" \u70B9\u51FB\u767B\u5F55 ")])],1)],1),t("auth",{ref:"auth",attrs:{types:["captcha"]}})],1)},b=[];const h={data(){return{loading:!1,formData:{mobile:null,token:null,name:null,company:null,password:null,checkPass:null,userInput:null},rules:{mobile:[{validator:()=>p({required:!0,validType:"mobile",value:()=>{var l;return(l=this.formData)==null?void 0:l.mobile}}),trigger:[]}],userInput:[{validator:()=>new Promise((l,i)=>{this.$refs.InputSMS.valid().then(s=>{this.resData=s,l()}).catch(s=>{i(s)})}),trigger:[]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"change"}],company:[{required:!0,message:"\u8BF7\u8F93\u5165\u5DE5\u4F5C\u5355\u4F4D",trigger:"change"}],password:[{validator:(l,i,s)=>{i===""?s(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801")):(this.formData.checkPass!==""&&this.$refs.validForm.validateField("checkPass"),s())},trigger:"blur"},{min:6,max:30,message:"\u957F\u5EA6\u5728 6 \u5230 30 \u4E2A\u5B57\u7B26",trigger:"blur"}],checkPass:[{validator:(l,i,s)=>{i===""?s(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):i!==this.formData.password?s(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):s()},trigger:"blur"}]},resData:null}},methods:{sendValidCode(){this.$refs.validForm.validateField("mobile",e=>{e||this.$refs.InputSMS.send()})},register(){if(this.loading)return null;this.loading=!0,this.$refs.validForm.validate(async e=>{e?(this.formData.token=this.resData,u(this.formData).then(r=>{this.loading=!1,r.status===200?this.$alert("\u6CE8\u518C\u6210\u529F,\u8BF7\u767B\u5F55","\u6CE8\u518C\u6210\u529F",{confirmButtonText:"\u786E\u5B9A",callback:()=>{this.$router.replace({name:"\u767B\u5F55"})}}):this.$message.error(r.data.message)}).catch(()=>{this.loading=!1})):this.loading=!1})}},created(){}},o={};var g=n(h,v,b,!1,_,"e86ee190",null,null);function _(e){for(let r in o)this[r]=o[r]}var k=function(){return g.exports}();export{k as default};
