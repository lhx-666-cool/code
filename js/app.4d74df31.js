(function(){"use strict";var e={4992:function(e,a,n){var t=n(9242),o=n(3396),l=(n(8052),n(4870)),s=n(7139),i=n(2483);const c={key:0,class:"navbar navbar-expand-lg bg-body-tertiary"},r={class:"container-fluid"},u=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav"},p={class:"nav-item"};var g={__name:"NavBar",setup(e){const a=(0,i.yj)(),n=(0,l.iH)();let t="nav-link active",g="nav-link",f=(0,l.iH)("nav-link"),m=(0,l.iH)("nav-link"),_=(0,l.iH)("nav-link"),b=(0,l.iH)("nav-link"),y=(0,l.iH)(!0);function h(e){m.value=g,f.value=g,_.value=g,b.value=g,e.value=t}function k(){return"/"===n.value||("/lisan"===n.value||("/shumo"===n.value||"/blacktalk"===n.value))}return(0,o.YP)((()=>a.path),(e=>{n.value=e,console.log(n.value),"/"===n.value?h(m):"/lisan"===n.value?h(f):"/shumo"===n.value?h(_):"/blacktalk"===n.value&&h(b),k()?(console.log(1),y.value=!0):(console.log(2),y.value=!1)})),(e,a)=>{const n=(0,o.up)("router-link"),t=(0,o.up)("routerLink");return(0,l.SU)(y)?((0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",r,[(0,o.Wm)(n,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("代码展示")])),_:1}),u,(0,o._)("div",d,[(0,o._)("ul",v,[(0,o._)("li",p,[(0,o.Wm)(t,{class:(0,s.C_)((0,l.SU)(m)),li:"",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("其他代码")])),_:1},8,["class"])]),(0,o._)("li",null,[(0,o.Wm)(t,{class:(0,s.C_)((0,l.SU)(f)),li:"",to:"/lisan"},{default:(0,o.w5)((()=>[(0,o.Uk)("离散上机")])),_:1},8,["class"])]),(0,o._)("li",null,[(0,o.Wm)(t,{class:(0,s.C_)((0,l.SU)(_)),li:"",to:"/shumo"},{default:(0,o.w5)((()=>[(0,o.Uk)("数模")])),_:1},8,["class"])]),(0,o._)("li",null,[(0,o.Wm)(t,{class:(0,s.C_)((0,l.SU)(b)),li:"",to:"/blacktalk"},{default:(0,o.w5)((()=>[(0,o.Uk)("互联网黑话")])),_:1},8,["class"])])])])])])):(0,o.kq)("",!0)}}};const f=g;var m=f,_={__name:"App",setup(e){return(e,a)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m),(0,o.Wm)(n)],64)}}};const b=_;var y=b,h=n(7387),k=n.n(h);const S=e=>((0,o.dD)("data-v-7bf290f7"),e=e(),(0,o.Cn)(),e),w={class:"box"},C={class:"row-2"},U={class:"col-4"},j={id:"list-example",class:"list-group"},x=["onClick"],L={class:"code"},H=S((()=>(0,o._)("div",{class:"msg"},"参考代码如下",-1)));var T={__name:"CodeSet",props:{CodeList:Object,m:String,lan:String},setup(e){const a=e;let n=(0,l.iH)("请选择题目"),t=(0,l.iH)(location.origin+"/#/bigcode/");function i(e){console.log(e),k().ajax({type:"GET",url:"/"+a.CodeList.m+"/"+e+".txt",dataType:"text",success:function(o){console.log(o),n.value=o,t=location.origin+"/#/bigcode/"+a.CodeList.lan+"/"+a.CodeList.m+"/"+e,console.log(t)}})}let c=(0,l.iH)(!1);return(r,u)=>{const d=(0,o.up)("highlightjs"),v=(0,o.up)("s3-layer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",w,[(0,o._)("div",C,[(0,o._)("div",U,[(0,o._)("div",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.CodeList.CodeList,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"list-group-item list-group-item-action des",key:e.id,onClick:a=>i(e.id)}," 第"+(0,s.zw)(e.id)+"题 ",9,x)))),128))])])]),(0,o._)("div",L,[H,(0,o._)("button",{onClick:u[0]||(u[0]=e=>(0,l.dq)(c)?c.value=!0:c=!0),class:"btn btn-secondary allsc"},"全屏"),(0,o.Wm)(d,{language:a.CodeList.lan,code:(0,l.SU)(n),class:"codetext"},null,8,["language","code"])])]),(0,o.Wm)(v,{modelValue:(0,l.SU)(c),"onUpdate:modelValue":u[1]||(u[1]=e=>(0,l.dq)(c)?c.value=e:c=e),title:"全屏代码",skin:r.layui-r.layer-e.lan,content:(0,l.SU)(t),type:2,maxmin:!0,area:["100%","100%"],success:function(e,a){r.layer.full(a)}},null,8,["modelValue","skin","content","success"])],64)}}},O=n(89);const D=(0,O.Z)(T,[["__scopeId","data-v-7bf290f7"]]);var Z=D;const W={class:"home"};var q={__name:"HomeView",setup(e){let a=(0,l.iH)(!1),n=[];k().ajax({url:"other.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,n=e}});let t="others",s="cpp";return(e,i)=>((0,o.wg)(),(0,o.iD)("div",W,[(0,l.SU)(a)?((0,o.wg)(),(0,o.j4)(Z,{key:0,CodeList:{CodeList:(0,l.SU)(n),m:(0,l.SU)(t),lan:(0,l.SU)(s)}},null,8,["CodeList"])):(0,o.kq)("",!0)]))}};const E=(0,O.Z)(q,[["__scopeId","data-v-06af0a50"]]);var I=E;const G={class:"home"};var P={__name:"LiSan",setup(e){let a=(0,l.iH)(!1),n=[];k().ajax({url:"ls.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,n=e}});let t="ls",s="cpp";return(e,i)=>((0,o.wg)(),(0,o.iD)("div",G,[(0,l.SU)(a)?((0,o.wg)(),(0,o.j4)(Z,{key:0,CodeList:{CodeList:(0,l.SU)(n),m:(0,l.SU)(t),lan:(0,l.SU)(s)}},null,8,["CodeList"])):(0,o.kq)("",!0)]))}};const M=(0,O.Z)(P,[["__scopeId","data-v-7756aa2c"]]);var N=M;const V={class:"box"};var Y={__name:"BigCode",setup(e){const a=(0,i.yj)();console.log(a,3),console.log(4);let n=(0,l.iH)("请选择题目");return k().ajax({type:"GET",url:"/"+a.params.m+"/"+a.params.id+".txt",dataType:"text",success:function(e){console.log(e),n.value=e}}),(e,t)=>{const s=(0,o.up)("highlightjs");return(0,o.wg)(),(0,o.iD)("div",V,[(0,o.Wm)(s,{language:(0,l.SU)(a).params.lan,code:(0,l.SU)(n)},null,8,["language","code"])])}}};const B=(0,O.Z)(Y,[["__scopeId","data-v-a77ee1a2"]]);var z=B;const A={class:"home"};var F={__name:"ShuMo",setup(e){let a=(0,l.iH)(!1),n=[];k().ajax({url:"shumo.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,n=e}});let t="shumo",s="python";return(e,i)=>((0,o.wg)(),(0,o.iD)("div",A,[(0,l.SU)(a)?((0,o.wg)(),(0,o.j4)(Z,{key:0,CodeList:{CodeList:(0,l.SU)(n),m:(0,l.SU)(t),lan:(0,l.SU)(s)}},null,8,["CodeList"])):(0,o.kq)("",!0)]))}};const K=(0,O.Z)(F,[["__scopeId","data-v-3244f37c"]]);var J=K;const Q={class:"ifr",src:"/Blacktalk/index.html"};function R(e,a){return(0,o.wg)(),(0,o.iD)("iframe",Q,"\r\n\r\n    ")}const X={},$=(0,O.Z)(X,[["render",R],["__scopeId","data-v-0050c8dd"]]);var ee=$;const ae=[{path:"/",name:"home",component:I},{path:"/lisan",name:"lisan",component:N},{path:"/bigcode/:lan/:m/:id",name:"bigcode",component:z},{path:"/shumo",name:"shumo",component:J},{path:"/blacktalk",name:"blacktalk",component:ee}],ne=(0,i.p7)({history:(0,i.r5)(),routes:ae});var te=ne,oe=(n(4503),n(1795)),le=n(6741),se=n(9329),ie=n(9868),ce=n(7526);oe.Z.registerLanguage("cpp",le.Z),oe.Z.registerLanguage("python",se.Z),(0,t.ri)(y).use(te).component("s3-layer",ce.s3Layer).use(te).use(ie.Z).mount("#app")}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var l=a[t]={exports:{}};return e[t].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(a,t,o,l){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,c=0;c<t.length;c++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(i=!1,l<s&&(s=l));if(i){e.splice(u--,1);var r=o();void 0!==r&&(a=r)}}return a}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[t,o,l]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,l,s=t[0],i=t[1],c=t[2],r=0;if(s.some((function(a){return 0!==e[a]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(a&&a(t);r<s.length;r++)l=s[r],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},t=self["webpackChunkcode_display"]=self["webpackChunkcode_display"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4992)}));t=n.O(t)})();
//# sourceMappingURL=app.4d74df31.js.map