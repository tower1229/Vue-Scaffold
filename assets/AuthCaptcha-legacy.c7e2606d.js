System.register(["./index-legacy.ac442448.js","./ui-legacy.f143d793.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.n},function(){}],execute:function(){var a=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"auth_image",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading},nativeOn:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("el-form-item",{attrs:{prop:"captcha"}},[e("InputCaptchaImage",{ref:"validCode"})],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"submit",type:"primary"}},[t._v(" 立即验证 ")])],1)],1)};t("default",e({data:function(){var t=this;return{formData:{},rules:{captcha:[{validator:function(){return new Promise((function(e,a){t.$refs.InputSMS.valid().then((function(a){t.resData=a,e()})).catch((function(t){a(t)}))}))},trigger:[]}]},resData:null}},methods:{handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&t.$emit("success",t.resData)}))}}},a,[],!1,null,"97ae126d",null,null).exports)}}}));