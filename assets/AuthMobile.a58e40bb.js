import{n as e}from"./index.8870cdde.js";import"./ui.5d05d0a0.js";const t=e({props:{command:{type:String,required:!1}},data(){return{formData:{id:null,inputMobile:null},rules:{inputMobile:[{validator:(e,t,i)=>{if(t){if(this.userMobile&&this.userMobile!==t)return i(new Error("手机号不正确"));i()}else i(new Error("请输入绑定手机"))},trigger:[]}],userInput:[{validator:()=>new Promise(((e,t)=>{this.$refs.InputSMS.valid().then((t=>{this.resData=t,e()})).catch((e=>{t(e)}))})),trigger:[]}]},resData:null}},computed:{userMobile(){return String(this.$store.user.mobile||"")},anonymousMobile(){if(this.userMobile){const e=this.userMobile.split("");return`${e.map(((t,i)=>i<3||e.length-i<3?t:"*")).join("")}`}return""}},methods:{sendValidCode(){this.$refs.form.validateField("inputMobile",(e=>{e||this.$refs.InputSMS.send()}))},handleSubmit(){this.$refs.form.validate((e=>{e&&this.$emit("success",this.resData)}))}}},(function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"auth_mobile",attrs:{model:e.formData,rules:e.rules,"label-position":"left"},nativeOn:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e.anonymousMobile?t("el-form-item",[e._v("绑定手机："+e._s(e.anonymousMobile))]):e._e(),t("el-form-item",{attrs:{prop:"inputMobile"}},[t("el-input",{attrs:{placeholder:"请输入绑定手机","prefix-icon":"el-icon-message"},model:{value:e.formData.inputMobile,callback:function(t){e.$set(e.formData,"inputMobile",t)},expression:"formData.inputMobile"}})],1),t("el-form-item",{attrs:{prop:"userInput"}},[t("InputSMS",{ref:"InputSMS",attrs:{type:e.command,mobile:e.formData.inputMobile},on:{click:e.sendValidCode}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[e._v(" 立即验证 ")])],1)],1)}),[],!1,null,"0677bad9",null,null).exports;export{t as default};