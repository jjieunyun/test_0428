"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[617],{617:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"memolist"},[n("h1",[t._v("Memo")]),n("table",[t._m(0),t._l(t.memo,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.id))]),n("td",{on:{click:function(n){return t.$router.push("/list/"+e.id)}}},[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.writer))])])}))],2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("No.")]),n("td",[t._v("Title")]),n("td",[t._v("Writer")])])}],l={data(){return{memo:[]}},created(){this.$http.get("/api/memo").then((t=>{this.memo=t.data}))}},u=l,s=n(1),c=(0,s.Z)(u,r,i,!1,null,null,null),a=c.exports}}]);
//# sourceMappingURL=617.918383c0.js.map