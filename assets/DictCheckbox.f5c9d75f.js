import{V as r}from"./ui.3305e273.js";import{g as a}from"./util.c761f89c.js";import{n as o}from"./index.301731d1.js";var i=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("el-checkbox-group",e._b({on:{change:function(t){return e.$emit("change",t)}},model:{value:e.bindValue,callback:function(t){e.bindValue=t},expression:"bindValue"}},"el-checkbox-group",e.$attrs,!1),e._l(e.list,function(t){return l("el-checkbox",{key:t.value,attrs:{label:t[e.valueKey]}},[e._v(e._s(t[e.labelKey]))])}),1)},s=[];const c={model:{prop:"value",event:"change"},props:{value:{type:Array,required:!1},valueKey:{type:String,required:!1,default(){return a("valueKey","value")}},labelKey:{type:String,required:!1,default(){return a("labelKey","label")}},nullAble:{type:Boolean,required:!1,default(){return a("nullAble",!0)}},request:{type:Function,required:!1},param:{type:String,required:!1,default(){return a("param",void 0)}},responseTransfer:{type:Function,required:!1,default(e){return r.$DictControl&&typeof r.$DictControl.responseTransfer=="function"?r.$DictControl.responseTransfer(e):e}}},data(){return{bindValue:[],list:[]}},watch:{value:{handler(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchData:async function(){if(!r.$DictControl&&!r.$DictControl.request&&!this.request)return console.warn("DictControl: The required configuration [request] is missing!");const e=this.request||r.$DictControl.request;if(typeof e!="function")return console.warn("DictControl: [request] must be a Function!");this.list=this.responseTransfer(await e(this.param))}},created(){this.fetchData()}},u={};var f=o(c,i,s,!1,d,"107e4c07",null,null);function d(e){for(let n in u)this[n]=u[n]}var v=function(){return f.exports}();export{v as default};