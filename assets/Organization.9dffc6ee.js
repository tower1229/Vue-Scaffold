import{n as o,_ as n,d as l}from"./index.8f2675dd.js";import{o as d,a as u,e as m,r as c}from"./org.a63f73ca.js";import"./ui.b381569e.js";var v=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("ToolBar",[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.add,expression:"org.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(a){e.dialogVisible=!0}}},[e._v("\u6DFB\u52A0\u6839\u8282\u70B9")])],1),e.refresh?t("OrgTree",{scopedSlots:e._u([{key:"action",fn:function(a){return t("div",{},[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.edit,expression:"org.edit"}],attrs:{size:"small"},on:{click:function(r){return e.edit(a.row)}}},[e._v("\u7F16\u8F91")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.add,expression:"org.add"}],attrs:{size:"small"},on:{click:function(r){return e.add(a.row)}}},[e._v("\u6DFB\u52A0\u4E0B\u7EA7")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.remove,expression:"org.remove"}],attrs:{size:"small",type:"danger",plain:""},on:{click:function(r){return e.remove(a.row)}}},[e._v("\u5220\u9664")])],1)}}],null,!1,1149850345)}):e._e(),t("el-dialog",{attrs:{visible:e.dialogVisible,title:"\u7EC4\u7EC7\u4FE1\u606F",width:"800px","close-on-click-modal":!1},on:{close:e.handleCloseDialog}},[t("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"}},[t("el-input",{model:{value:e.editForm.name,callback:function(a){e.$set(e.editForm,"name",a)},expression:"editForm.name"}})],1),t("el-form-item",{attrs:{label:"\u5168\u79F0",prop:"fullName"}},[t("el-input",{model:{value:e.editForm.fullName,callback:function(a){e.$set(e.editForm,"fullName",a)},expression:"editForm.fullName"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.save()}}},[e._v("\u786E \u5B9A")]),t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)],1)],1)},f=[];const g={components:{OrgTree:()=>n(()=>import("./OrgTree.b9c1144f.js"),["assets/OrgTree.b9c1144f.js","assets/CURD.c29b3f84.css","assets/org.a63f73ca.js","assets/index.8f2675dd.js","assets/index.cfd070ab.css","assets/ui.b381569e.js"])},data(){return{org:d,dialogVisible:!1,sourceDepart:null,loading:!1,list:[],queryParam:{},editForm:{name:"",pid:null},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"},{min:1,max:100,message:"\u957F\u5EA6 1 \u5230 100 \u4E2A\u5B57\u7B26",trigger:"blur"}],fullName:[{min:0,max:255,message:"\u957F\u5EA6 0 \u5230 255 \u4E2A\u5B57\u7B26",trigger:"blur"}]},refresh:!0}},methods:{edit(e){this.editForm=l(e),this.dialogVisible=!0},add(e){this.editForm={pid:e.pid},this.dialogVisible=!0},save(){let e=this;e.$refs.editForm.validate(i=>{if(i){let t=l(e.editForm);this.handleCloseDialog(),t.id?m(t).then(()=>{e.fetchData(),e.$message({message:"\u7F16\u8F91\u6210\u529F",type:"success"})}):u(t).then(()=>{e.fetchData(),e.$message({message:"\u6DFB\u52A0\u6210\u529F",type:"success"})})}})},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={name:"",pid:null}},remove(e){if(!e||!e.id)return null;this.$confirm("\u662F\u5426\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.loading=!0,c({id:e.id}).then(()=>{this.loading=!1,this.fetchData(),this.$message({message:"\u5220\u9664\u6210\u529F",type:"success"})}).catch(()=>{this.loading=!1})})},fetchData(){this.refresh=!1,this.$nextTick(()=>{this.refresh=!0})}}},s={};var h=o(g,v,f,!1,p,"627a89cc",null,null);function p(e){for(let i in s)this[i]=s[i]}var y=function(){return h.exports}();export{y as default};