import{i as t,n as a}from"./index.9f62cd52.js";import"./ui.5d05d0a0.js";const e=a({data(){return{loading:!1,formData:{token:"",checkPass:"",newPassword:""},rules:{newPassword:[{validator:(t,a,e)=>{""===a?e(new Error("请输入密码")):(""!==this.formData.checkPass&&this.$refs.form.validateField("checkPass"),e())},trigger:"blur"},{min:6,max:30,message:"长度在 6 到 30 个字符",trigger:"blur"}],checkPass:[{validator:(t,a,e)=>{""===a?e(new Error("请再次输入密码")):a!==this.formData.newPassword?e(new Error("两次输入密码不一致!")):e()},trigger:"blur"}]}}},methods:{submitForm(){this.$refs.form.validate((a=>{if(a){this.loading=!0;let a=Object.assign({},this.formData);delete a.checkPass,(e=a,t.put("/updatePassword",e,r)).then((()=>{this.loading=!1,this.$alert("密码修改成功",{callback:()=>{this.$router.go(-1)}})})).catch((()=>{this.loading=!1}))}var e,r}))}},created:function(){this.$route.query.authCode&&(this.formData.token=this.$route.query.authCode)}},(function(){var t=this,a=t._self._c;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[a("ToolBar"),a("el-form",{ref:"form",staticClass:"wrap",attrs:{model:t.formData,"status-icon":"",rules:t.rules,"label-width":"100px"},nativeOn:{submit:function(a){return a.preventDefault(),t.submitForm.apply(null,arguments)}}},[t.formData.token?t._e():a("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"未验证用户身份，请返回重试！",type:"error","show-icon":"",closable:!1}}),a("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[a("input-password",{attrs:{autocomplete:"off"},model:{value:t.formData.newPassword,callback:function(a){t.$set(t.formData,"newPassword",a)},expression:"formData.newPassword"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.formData.checkPass,callback:function(a){t.$set(t.formData,"checkPass",a)},expression:"formData.checkPass"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("提交")])],1)],1)],1)}),[],!1,null,"0a8c8025",null,null).exports;export{e as default};