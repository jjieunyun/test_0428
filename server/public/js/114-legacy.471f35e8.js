"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[114],{114:function(t,e,r){r.r(e),r.d(e,{default:function(){return a}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"memolist"},[r("h1",[t._v("Memo")]),r("table",[t._m(0),t._l(t.memo,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.id))]),r("td",{on:{click:function(r){return t.$router.push("/list/"+e.id)}}},[t._v(t._s(e.title))]),r("td",[t._v(t._s(e.writer))])])}))],2)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"subject"},[r("td",[t._v("No.")]),r("td",[t._v("Title")]),r("td",[t._v("Writer")])])}],s={data(){return{memo:[]}},created(){this.$http.get("/api/memo").then((t=>{this.memo=t.data}))}},l=s,u=r(1),c=(0,u.Z)(l,n,i,!1,null,"4901f12e",null),a=c.exports}}]);
//# sourceMappingURL=114-legacy.471f35e8.js.map