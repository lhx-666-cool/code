(function(){"use strict";var e={162:function(e,a,t){var l=t(9242),n=t(3396),o=(t(8052),t(4870)),s=t(7139),i=t(2483);const c={key:0,class:"navbar navbar-expand-lg bg-body-tertiary"},u={class:"container-fluid"},r=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav"},p={class:"nav-item"};var m={__name:"NavBar",setup(e){const a=(0,i.yj)(),t=(0,o.iH)();let l="nav-link active",m="nav-link",f=(0,o.iH)("nav-link"),g=(0,o.iH)("nav-link"),b=(0,o.iH)("nav-link"),_=(0,o.iH)("nav-link"),h=(0,o.iH)("nav-link"),y=(0,o.iH)("nav-link"),k=(0,o.iH)("nav-link"),w=(0,o.iH)("nav-link"),S=(0,o.iH)(!0);function U(e){g.value=m,f.value=m,b.value=m,_.value=m,h.value=m,y.value=m,k.value=m,w.value=m,e.value=l}function x(){return"/"===t.value||("/lisan"===t.value||("/shumo"===t.value||("/blacktalk"===t.value||("/qrcode"===t.value||("/today"===t.value||("/vip"===t.value||!!t.value.match(/\/code/)))))))}return(0,n.YP)((()=>a.path),(e=>{t.value=e,console.log(t.value),"/"===t.value?U(g):"/lisan"===t.value?U(f):"/shumo"===t.value?U(b):"/blacktalk"===t.value?U(_):"/qrcode"===t.value?U(h):"/today"===t.value?U(y):"/vip"===t.value?U(k):t.value.match(/\/code/)&&U(w),x()?(console.log(1),S.value=!0):(console.log(2),S.value=!1)})),(e,a)=>{const t=(0,n.up)("router-link"),l=(0,n.up)("routerLink");return(0,o.SU)(S)?((0,n.wg)(),(0,n.iD)("nav",c,[(0,n._)("div",u,[(0,n.Wm)(t,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("代码展示")])),_:1}),r,(0,n._)("div",d,[(0,n._)("ul",v,[(0,n._)("li",p,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(g)),li:"",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("其他代码")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(f)),li:"",to:"/lisan"},{default:(0,n.w5)((()=>[(0,n.Uk)("离散上机")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(b)),li:"",to:"/shumo"},{default:(0,n.w5)((()=>[(0,n.Uk)("数模")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(w)),li:"",to:"/code"},{default:(0,n.w5)((()=>[(0,n.Uk)("代码预览")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(_)),li:"",to:"/blacktalk"},{default:(0,n.w5)((()=>[(0,n.Uk)("互联网黑话")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(h)),li:"",to:"/qrcode"},{default:(0,n.w5)((()=>[(0,n.Uk)("二维码生成")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(y)),li:"",to:"/today"},{default:(0,n.w5)((()=>[(0,n.Uk)("历史上的今天")])),_:1},8,["class"])]),(0,n._)("li",null,[(0,n.Wm)(l,{class:(0,s.C_)((0,o.SU)(k)),li:"",to:"/vip"},{default:(0,n.w5)((()=>[(0,n.Uk)("VIP视频")])),_:1},8,["class"])])])])])])):(0,n.kq)("",!0)}}};const f=m;var g=f,b={__name:"App",setup(e){return(e,a)=>{const t=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(g),((0,n.wg)(),(0,n.j4)(t,{key:e.$route.fullPath}))],64)}}};const _=b;var h=_,y=t(7387),k=t.n(y);const w=e=>((0,n.dD)("data-v-7bf290f7"),e=e(),(0,n.Cn)(),e),S={class:"box"},U={class:"row-2"},x={class:"col-4"},C={id:"list-example",class:"list-group"},H=["onClick"],j={class:"code"},D=w((()=>(0,n._)("div",{class:"msg"},"参考代码如下",-1)));var W={__name:"CodeSet",props:{CodeList:Object,m:String,lan:String},setup(e){const a=e;let t=(0,o.iH)("请选择题目"),l=(0,o.iH)(location.origin+"/#/bigcode/");function i(e){console.log(e),k().ajax({type:"GET",url:"/"+a.CodeList.m+"/"+e+".txt",dataType:"text",success:function(n){console.log(n),t.value=n,l=location.origin+"/#/bigcode/"+a.CodeList.lan+"/"+a.CodeList.m+"/"+e,console.log(l)}})}let c=(0,o.iH)(!1);return(u,r)=>{const d=(0,n.up)("highlightjs"),v=(0,n.up)("s3-layer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",S,[(0,n._)("div",U,[(0,n._)("div",x,[(0,n._)("div",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.CodeList.CodeList,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"list-group-item list-group-item-action des",key:e.id,onClick:a=>i(e.id)}," 第"+(0,s.zw)(e.id)+"题 ",9,H)))),128))])])]),(0,n._)("div",j,[D,(0,n._)("button",{onClick:r[0]||(r[0]=e=>(0,o.dq)(c)?c.value=!0:c=!0),class:"btn btn-secondary allsc"},"全屏"),(0,n.Wm)(d,{language:a.CodeList.lan,code:(0,o.SU)(t),class:"codetext"},null,8,["language","code"])])]),(0,n.Wm)(v,{modelValue:(0,o.SU)(c),"onUpdate:modelValue":r[1]||(r[1]=e=>(0,o.dq)(c)?c.value=e:c=e),title:"全屏代码",skin:u.layui-u.layer-e.lan,content:(0,o.SU)(l),type:2,maxmin:!0,area:["100%","100%"],success:function(e,a){u.layer.full(a)}},null,8,["modelValue","skin","content","success"])],64)}}},T=t(89);const V=(0,T.Z)(W,[["__scopeId","data-v-7bf290f7"]]);var q=V;function L(e,a,t,l,o,s){const i=(0,n.up)("lay-notice-bar");return(0,n.wg)(),(0,n.j4)(i,{leftIcon:"layui-icon-mute",rightIcon:"layui-icon-close",text:l.text,mode:"closeable",background:"#ecf5ff"},null,8,["text"])}var Z={setup(){const e=(0,o.iH)(!0);let a=(0,o.iH)("");return a.value="我的网站终于上线了，欢迎参观。有问题可以联系我反馈",{visible:e,text:a}}};const I=(0,T.Z)(Z,[["render",L]]);var O=I;const P={class:"home"};var A={__name:"HomeView",setup(e){let a=(0,o.iH)(!1),t=[];k().ajax({url:"other.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,t=e}});let l="others",s="cpp";return(e,i)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(O),(0,n._)("div",P,[(0,o.SU)(a)?((0,n.wg)(),(0,n.j4)(q,{key:0,CodeList:{CodeList:(0,o.SU)(t),m:(0,o.SU)(l),lan:(0,o.SU)(s)}},null,8,["CodeList"])):(0,n.kq)("",!0)])],64))}};const E=(0,T.Z)(A,[["__scopeId","data-v-75d1f610"]]);var B=E;const M={class:"home"};var Y={__name:"LiSan",setup(e){let a=(0,o.iH)(!1),t=[];k().ajax({url:"ls.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,t=e}});let l="ls",s="cpp";return(e,i)=>((0,n.wg)(),(0,n.iD)("div",M,[(0,o.SU)(a)?((0,n.wg)(),(0,n.j4)(q,{key:0,CodeList:{CodeList:(0,o.SU)(t),m:(0,o.SU)(l),lan:(0,o.SU)(s)}},null,8,["CodeList"])):(0,n.kq)("",!0)]))}};const G=(0,T.Z)(Y,[["__scopeId","data-v-7756aa2c"]]);var z=G;const N={class:"box"};var K={__name:"BigCode",setup(e){let a=t(7702).Base64;const l=(0,i.yj)();console.log(l,3),console.log(4);let s=(0,o.iH)("请选择题目");if(k().ajax({type:"GET",url:"/"+l.params.m+"/"+l.params.id+".txt",dataType:"text",success:function(e){console.log(e),s.value=e}}),""!==l.params.base){let e=(0,o.iH)(l.params.base);e.value=e.value.replaceAll("_","/"),s.value=a.decode(e.value)}return(e,a)=>{const t=(0,n.up)("highlightjs");return(0,n.wg)(),(0,n.iD)("div",N,[(0,n.Wm)(t,{language:(0,o.SU)(l).params.lan,code:(0,o.SU)(s)},null,8,["language","code"])])}}};const R=(0,T.Z)(K,[["__scopeId","data-v-470f603b"]]);var F=R;const Q={class:"home"};var X={__name:"ShuMo",setup(e){let a=(0,o.iH)(!1),t=[];k().ajax({url:"shumo.json",type:"GET",dataType:"json",success:function(e){console.log(e),a.value=!0,t=e}});let l="shumo",s="python";return(e,i)=>((0,n.wg)(),(0,n.iD)("div",Q,[(0,o.SU)(a)?((0,n.wg)(),(0,n.j4)(q,{key:0,CodeList:{CodeList:(0,o.SU)(t),m:(0,o.SU)(l),lan:(0,o.SU)(s)}},null,8,["CodeList"])):(0,n.kq)("",!0)]))}};const J=(0,T.Z)(X,[["__scopeId","data-v-3244f37c"]]);var $=J;const ee={class:"ifr",src:"/BlackTalk/index.html"};function ae(e,a){return(0,n.wg)(),(0,n.iD)("iframe",ee,"\r\n\r\n    ")}const te={},le=(0,T.Z)(te,[["render",ae],["__scopeId","data-v-db9ea606"]]);var ne=le,oe=t(8385),se=t(3214),ie=t(908);const ce=e=>((0,n.dD)("data-v-138729dc"),e=e(),(0,n.Cn)(),e),ue=ce((()=>(0,n._)("h1",{class:"title"},"二维码生成器",-1))),re={class:"box"},de=["src"],ve=ce((()=>(0,n._)("br",null,null,-1))),pe={class:"colors"},me=ce((()=>(0,n._)("span",{class:"colordes"},"前景色",-1))),fe=ce((()=>(0,n._)("span",{class:"colordes"},"背景色",-1)));var ge={__name:"QrCode",setup(e){let a=(0,o.iH)(""),t=(0,o.iH)(""),s=(0,o.iH)("#000000"),i=(0,o.iH)("#ffffff"),c={errorCorrectionLevel:"H",type:"image/jpeg",quality:10,margin:1,maskPattern:0,width:1e3,color:{light:"#ffffff",dark:"#000000"}};function u(){c.color.dark=s.value,c.color.light=i.value,""!==a.value?(console.log(c),oe.toDataURL(a.value,c,(function(e,a){t.value=a}))):a.value="请输入文本"}function r(){c.maskPattern=parseInt(8*Math.random())%8,u()}function d(){se.l.photos({imgList:[{src:t.value}]})}return console.log(c),oe.toDataURL("hello",c,(function(e,a){console.log(a),t.value=a})),(e,c)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[ue,(0,n._)("div",re,[(0,n._)("img",{src:(0,o.SU)(t),class:"qrcode img-thumbnail"},null,8,de),ve,(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":c[0]||(c[0]=e=>(0,o.dq)(a)?a.value=e:a=e),class:"input form-control"},null,512),[[l.nr,(0,o.SU)(a)]]),(0,n._)("button",{onClick:u,type:"button",class:"btn btn-primary btn1"},"生成"),(0,n._)("button",{onClick:r,type:"button",class:"btn btn-primary btn2"},"换一个"),(0,n._)("button",{onClick:d,type:"button",class:"btn btn-primary btn3"},"放大"),(0,n._)("div",pe,[me,(0,n.Wm)((0,o.SU)(ie.Z),{modelValue:(0,o.SU)(s),"onUpdate:modelValue":c[1]||(c[1]=e=>(0,o.dq)(s)?s.value=e:s=e)},null,8,["modelValue"]),fe,(0,n.Wm)((0,o.SU)(ie.Z),{modelValue:(0,o.SU)(i),"onUpdate:modelValue":c[2]||(c[2]=e=>(0,o.dq)(i)?i.value=e:i=e)},null,8,["modelValue"])])])],64))}};const be=(0,T.Z)(ge,[["__scopeId","data-v-138729dc"]]);var _e=be;const he={key:0,class:"box"},ye={class:"card-body"},ke={class:"card-title"},we={class:"card-text"},Se=["onClick"];var Ue={__name:"HistoricallyToday",setup(e){let a=[],t=(0,o.iH)(!1),l=(0,o.iH)(!1),i=(0,o.iH)("");function c(e){i=e,l.value=!0}return k().ajax({type:"GET",url:"https://www.mxnzp.com/api/history/today",dataType:"json",data:{app_id:"skrpjfqalfm8mukx",app_secret:"ufdorV2xzuBHsvbgJv4QX97mSXWiBo6V",type:1},success:function(e){console.log(e),a=e.data,console.log(a,1),t.value=!0,setTimeout((()=>{/Mobi|Android|iPhone/i.test(navigator.userAgent)&&k()(".card").css({position:"relative",left:"50%",transform:"translate(-50%)","margin-left":"0px"})}),100)}}),(e,u)=>{const r=(0,n.up)("s3-layer");return(0,o.SU)(t)?((0,n.wg)(),(0,n.iD)("table",he,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(a),((e,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"card float-start",style:{width:"18rem"},key:a},[(0,n._)("div",ye,[(0,n._)("h5",ke,(0,s.zw)(e.title),1),(0,n._)("p",we,(0,s.zw)(e.year)+"年",1),(0,n._)("button",{class:"btn btn-primary",onClick:a=>c(e.details)},"查看详情",8,Se)])])))),128)),(0,n.Wm)(r,{modelValue:(0,o.SU)(l),"onUpdate:modelValue":u[0]||(u[0]=e=>(0,o.dq)(l)?l.value=e:l=e),title:"详情",skin:e.layui-e.layer-e.lan,content:(0,o.SU)(i),type:0,maxmin:!0,maxWidth:600,shadeClose:!0,shade:.5},null,8,["modelValue","skin","content"])])):(0,n.kq)("",!0)}}};const xe=(0,T.Z)(Ue,[["__scopeId","data-v-9f270302"]]);var Ce=xe;const He=e=>((0,n.dD)("data-v-7c85e6a1"),e=e(),(0,n.Cn)(),e),je={key:0,class:"box"},De=["value"],We={class:"input-group mb-3"},Te=He((()=>(0,n._)("span",{class:"input-group-text",id:"basic-addon1"},"请输入视频地址",-1))),Ve=["src"];var qe={__name:"VipVideo",setup(e){let a=(0,o.iH)(!1),t=[],i=(0,o.iH)(""),c=(0,o.iH)(""),u=(0,o.iH)("");function r(){console.log(k()(".form-select")[0].value),d()}function d(){let e=k()(".form-select")[0].value;i.value=t[e-1].url,u.value=i.value+c.value}return console.log(a),k().ajax({type:"GET",url:"/vip.json",dataType:"json",success:function(e){console.log(e),t=e,a.value=!0,i.value=t[0].url}}),(e,i)=>(0,o.SU)(a)?((0,n.wg)(),(0,n.iD)("div",je,[(0,n._)("select",{onClick:r,class:"form-select","aria-label":"Default select example"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(t),(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.id,value:e.id},"接口"+(0,s.zw)(e.id),9,De)))),128))]),(0,n._)("div",We,[Te,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>(0,o.dq)(c)?c.value=e:c=e),type:"text",class:"form-control",placeholder:"请输入视频地址","aria-label":"Username","aria-describedby":"basic-addon1"},null,512),[[l.nr,(0,o.SU)(c)]]),(0,n._)("span",{onClick:d,class:"input-group-text",id:"basic-addon1"},"确定")]),(0,n._)("iframe",{security:"restricted",sandbox:"allow-scripts allow-same-origin allow-popups",src:(0,o.SU)(u),frameborder:"0",class:"myifr",allowfullscreen:"true"},null,8,Ve)])):(0,n.kq)("",!0)}};const Le=(0,T.Z)(qe,[["__scopeId","data-v-7c85e6a1"]]);var Ze=Le,Ie=(t(7658),t(5348)),Oe=t(4019);const Pe={class:"out"},Ae={class:"box"},Ee={class:"code"};var Be={__name:"CodeDisplayPc",props:{codebase:String},emits:["sharef"],setup(e,{emit:a}){const s=e;let c=t(7702).Base64,u=(0,o.iH)("");const r=(0,i.tv)();if(""!==s.codebase){let e=(0,o.iH)(s.codebase);e.value=e.value.replaceAll("_","/"),u.value=c.decode(e.value)}function d(){a("sharef",u.value),console.log(u.value),location.href.match(/https/)?setTimeout((()=>{navigator.clipboard.writeText(location.href).then((()=>{se.l.msg("链接已复制到剪切板")}))}),300):se.l.msg("请使用https协议")}let v=(0,o.iH)(location.origin+"/#/bigcode/0/0/0/");function p(){a("sharef",u.value);let e=c.encode(u.value);e=e.replaceAll("/","_"),v.value+=e,console.log(e,3),se.l.open({type:"iframe",title:"全屏代码",area:["100%","100%"],content:v.value}),console.log(v.value)}function m(){r.push("/code"),u.value=""}return(0,n.bv)((()=>{k()("textarea").on("keydown",(function(e){if(9==e.keyCode){e.preventDefault();var a="    ",t=this.selectionStart,l=this.selectionEnd,n=window.getSelection().toString();n=a+n.replace(/\n/g,"\n"+a),this.value=this.value.substring(0,t)+n+this.value.substring(l),this.setSelectionRange(t+a.length,t+n.length),u.value=u.value+""}}))})),(e,a)=>{const t=(0,n.up)("highlightjs");return(0,n.wg)(),(0,n.iD)("div",Pe,[(0,n._)("div",Ae,[(0,n.Wm)((0,o.SU)(Ie.Z),{style:{height:"95%"}},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(Oe.Z),null,{default:(0,n.w5)((()=>[(0,n._)("div",Ee,[(0,n.Wm)(t,{class:"coded",code:(0,o.SU)(u)},null,8,["code"])])])),_:1}),(0,n.Wm)((0,o.SU)(Oe.Z),{space:600},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("textarea",{placeholder:"请输入代码","onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(u)?u.value=e:u=e),class:"form-control","aria-label":"With textarea"},null,512),[[l.nr,(0,o.SU)(u)]])])),_:1})])),_:1})]),(0,n._)("div",{class:"btnbox"},[(0,n._)("button",{onClick:d,type:"button",class:"btn btn-secondary"},"分享"),(0,n._)("button",{onClick:p,type:"button",class:"btn btn-secondary"},"全屏"),(0,n._)("button",{onClick:m,type:"button",class:"btn btn-secondary"},"清空")])])}}};const Me=(0,T.Z)(Be,[["__scopeId","data-v-405f92c1"]]);var Ye=Me;const Ge=e=>((0,n.dD)("data-v-58dbfa5e"),e=e(),(0,n.Cn)(),e),ze={class:"out"},Ne={class:"right"},Ke={class:"code"},Re={class:"left"},Fe={class:"input-group"},Qe=Ge((()=>(0,n._)("br",null,null,-1))),Xe=Ge((()=>(0,n._)("br",null,null,-1)));var Je={__name:"CodeDisplayMobile",props:{codebase:String},emits:["sharef"],setup(e,{emit:a}){const s=e;let c=t(7702).Base64,u=(0,o.iH)("");const r=(0,i.tv)();if(""!==s.codebase){let e=(0,o.iH)(s.codebase);e.value=e.value.replaceAll("_","/"),u.value=c.decode(e.value)}function d(){a("sharef",u.value),console.log(u.value),location.href.match(/https/)?setTimeout((()=>{navigator.clipboard.writeText(location.href).then((()=>{se.l.msg("链接已复制到剪切板")}),(()=>{se.l.msg("自动复制失败，请手动复制网址")}))}),300):se.l.msg("请使用https协议")}let v=(0,o.iH)(location.origin+"/#/bigcode/0/0/0/");function p(){a("sharef",u.value);let e=c.encode(u.value);e=e.replaceAll("/","_"),v.value+=e,console.log(e,3),se.l.open({type:"iframe",title:"全屏代码",area:["100%","100%"],content:v.value}),console.log(v.value)}function m(){r.push("/code")}function f(e){9===e.keyCode&&(this.textareValue||(this.textareValue=""),this.textareValue+="\t",e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1)}return(0,n.bv)((()=>{k()("textarea").on("keydown",(function(e){if(9==e.keyCode){e.preventDefault();var a="    ",t=this.selectionStart,l=this.selectionEnd,n=window.getSelection().toString();n=a+n.replace(/\n/g,"\n"+a),this.value=this.value.substring(0,t)+n+this.value.substring(l),this.setSelectionRange(t+a.length,t+n.length)}}))})),(e,a)=>{const t=(0,n.up)("highlightjs");return(0,n.wg)(),(0,n.iD)("div",ze,[(0,n._)("div",Ne,[(0,n._)("div",Ke,[(0,n.Wm)(t,{class:"coded",code:(0,o.SU)(u)},null,8,["code"])])]),(0,n._)("div",Re,[(0,n._)("div",Fe,[(0,n.wy)((0,n._)("textarea",{onOnKeydown:f,placeholder:"请输入代码","onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(u)?u.value=e:u=e),class:"form-control","aria-label":"With textarea"},null,544),[[l.nr,(0,o.SU)(u)]])])]),(0,n._)("div",{class:"btnbox"},[(0,n._)("button",{onClick:d,type:"button",class:"btn btn-secondary"},"分享"),Qe,(0,n._)("button",{onClick:p,type:"button",class:"btn btn-secondary"},"全屏"),Xe,(0,n._)("button",{onClick:m,type:"button",class:"btn btn-secondary"},"清空")])])}}};const $e=(0,T.Z)(Je,[["__scopeId","data-v-58dbfa5e"]]);var ea=$e,aa={__name:"CodeDisplay",setup(e){const a=(0,i.yj)(),l=(0,i.tv)();let s=t(7702).Base64;function c(e){let a=s.encode(e);a=a.replaceAll("/","_"),l.push("/code/"+a)}console.log(a);let u=(0,o.iH)(!0),r=(0,o.iH)(!1);return/Mobi|Android|iPhone/i.test(navigator.userAgent)&&(u.value=!1,r.value=!0),(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,o.SU)(u)?((0,n.wg)(),(0,n.j4)(Ye,{key:0,onSharef:t[0]||(t[0]=e=>c(e)),codebase:(0,o.SU)(a).params.base},null,8,["codebase"])):(0,n.kq)("",!0),(0,o.SU)(r)?((0,n.wg)(),(0,n.j4)(ea,{key:1,onSharef:t[1]||(t[1]=e=>c(e)),codebase:(0,o.SU)(a).params.base},null,8,["codebase"])):(0,n.kq)("",!0)],64))}};const ta=aa;var la=ta,na=t(6319);const oa={class:"out"},sa={class:"p404"};var ia={__name:"NotFound",setup(e){const a=(0,i.tv)();return(e,t)=>{const l=(0,n.up)("lay-exception");return(0,n.wg)(),(0,n.iD)("div",oa,[(0,n._)("div",sa,[(0,n.Wm)(l,{status:"404",title:"404",describe:"跳转页面失败"},{extra:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(na.c),{type:"primary",onClick:t[0]||(t[0]=e=>(0,o.SU)(a).push("/"))},{default:(0,n.w5)((()=>[(0,n.Uk)("返回首页")])),_:1})])),_:1})])])}}};const ca=(0,T.Z)(ia,[["__scopeId","data-v-52119225"]]);var ua=ca;const ra=[{path:"/",name:"home",component:B},{path:"/lisan",name:"lisan",component:z},{path:"/bigcode/:lan/:m/:id/:base?",name:"bigcode",component:F},{path:"/shumo",name:"shumo",component:$},{path:"/blacktalk",name:"blacktalk",component:ne},{path:"/qrcode",name:"qrcode",component:_e},{path:"/today",name:"today",component:Ce},{path:"/vip",name:"vip",component:Ze},{path:"/code/:base?",name:"code",component:la},{path:"/404",name:"404",component:ua},{path:"/:pathMatch(.*)",redirect:"/404"}],da=(0,i.p7)({history:(0,i.r5)(),routes:ra});var va=da,pa=(t(4503),t(1795)),ma=t(6741),fa=t(9329),ga=t(9868),ba=t(7526),_a=t(6704),ha=t(9698);t(8928);pa.Z.registerLanguage("cpp",ma.Z),pa.Z.registerLanguage("python",fa.Z),(0,l.ri)(h).use(ha.ZP).use(_a["default"]).use(va).component("s3-layer",ba.s3Layer).use(va).use(ga.Z).mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var s=1/0;for(r=0;r<e.length;r++){l=e[r][0],n=e[r][1],o=e[r][2];for(var i=!0,c=0;c<l.length;c++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[c])}))?l.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(r--,1);var u=n();void 0!==u&&(a=u)}}return a}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[l,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,s=l[0],i=l[1],c=l[2],u=0;if(s.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(c)var r=c(t)}for(a&&a(l);u<s.length;u++)o=s[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(r)},l=self["webpackChunkcode_display2"]=self["webpackChunkcode_display2"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(162)}));l=t.O(l)})();
//# sourceMappingURL=app.ee418466.js.map