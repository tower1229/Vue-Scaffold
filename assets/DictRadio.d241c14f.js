import{V as e}from"./ui.5d05d0a0.js";import{g as t}from"./util.4412b3d0.js";import{n as r}from"./index.9f62cd52.js";const l=r({model:{prop:"value",event:"change"},props:{value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default:()=>t("valueKey","value")},labelKey:{type:String,required:!1,default:()=>t("labelKey","label")},nullAble:{type:Boolean,required:!1,default:()=>t("nullAble",!0)},request:{type:Function,required:!1},param:{type:String,required:!1,default:()=>t("param",void 0)},responseTransfer:{type:Function,required:!1,default:t=>e.$DictControl&&"function"==typeof e.$DictControl.responseTransfer?e.$DictControl.responseTransfer(t):t}},data:()=>({bindValue:null,list:[]}),watch:{value:{handler(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchData:function(){return t=this,r=null,l=function*(){if(!e.$DictControl&&!e.$DictControl.request&&!this.request)return console.warn("DictControl: The required configuration [request] is missing!");const t=this.request||e.$DictControl.request;if("function"!=typeof t)return console.warn("DictControl: [request] must be a Function!");this.list=this.responseTransfer(yield t(this.param))},new Promise(((e,n)=>{var a=e=>{try{u(l.next(e))}catch(t){n(t)}},i=e=>{try{u(l.throw(e))}catch(t){n(t)}},u=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,i);u((l=l.apply(t,r)).next())}));var t,r,l}},created(){this.fetchData()}},(function(){var e=this,t=e._self._c;return t("el-radio-group",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-radio-group",e.$attrs,!1),[e.nullAble?t("el-radio",{attrs:{label:null}},[e._v(e._s(e.$attrs.placeholder||"全部"))]):e._e(),e._l(e.list,(function(r){return t("el-radio",{key:r.value,attrs:{label:r[e.valueKey]}},[e._v(e._s(r[e.labelKey]))])}))],2)}),[],!1,null,"78601858",null,null).exports;export{l as default};