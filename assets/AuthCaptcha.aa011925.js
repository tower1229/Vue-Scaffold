import{n as t}from"./index.9f62cd52.js";import"./ui.5d05d0a0.js";const a=t({data(){return{formData:{},rules:{captcha:[{validator:()=>new Promise(((t,a)=>{this.$refs.InputSMS.valid().then((a=>{this.resData=a,t()})).catch((t=>{a(t)}))})),trigger:[]}]},resData:null}},methods:{handleSubmit(){this.$refs.form.validate((t=>{t&&this.$emit("success",this.resData)}))}}},(function(){var t=this,a=t._self._c;return a("el-form",{ref:"form",staticClass:"auth_image",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading},nativeOn:{submit:function(a){return a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("el-form-item",{attrs:{prop:"captcha"}},[a("InputCaptchaImage",{ref:"validCode"})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)}),[],!1,null,"97ae126d",null,null).exports;export{a as default};