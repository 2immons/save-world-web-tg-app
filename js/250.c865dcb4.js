"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[250],{1578:function(e,a,n){n.r(a),n.d(a,{default:function(){return B}});var l=n(6768),t=n(4218),s=n(6096),c=n(4232),u=n(144),r=n.p+"img/arrow-right.12030712.svg",i=n.p+"img/eng.5ad053f5.svg",o=n.p+"img/rus.765d0259.svg",v=n.p+"img/lang.99bc7f43.svg",g=(0,l.pM)({__name:"SliderButton",setup(e){const a=(0,u.KR)("slider-wrapper-left"),n=(0,u.KR)("left"),t=(0,u.KR)(!1),s=()=>{"left"===n.value?(n.value="right",a.value="slider-wrapper-right",t.value=!0):(n.value="left",a.value="slider-wrapper-left",t.value=!1)};return(e,t)=>((0,l.uX)(),(0,l.CE)("div",{class:(0,c.C4)(a.value),onClick:s},[(0,l.Lk)("button",{class:(0,c.C4)(n.value)},null,2)],2))}}),k=n(1241);const p=(0,k.A)(g,[["__scopeId","data-v-f4aa5d3a"]]);var d=p,L=n(5931);const m={class:"settings"},b={class:"container"},_={class:"settings-content"},w={class:"settings-list"},C={key:0,class:"stock-exchange-menu"},f={class:"settings-wrapper referal-wrapper"},h={key:0,class:"confirm-modal"},R={class:"confirm-modal__buttons"},y={class:"sliders"},E={class:"settings-wrapper"},K={class:"settings-wrapper"},S={key:0,class:"language-settings"};var x=(0,l.pM)({__name:"SettingsSection",setup(e){const a=(0,u.KR)(!1),n=(0,u.KR)(!1),{t:t,locale:s}=(0,L.s9)(),g=()=>{n.value=!n.value,X.value=n.value?"arrow-icon--open":"arrow-icon"},k=()=>{a.value=!a.value,q.value=a.value?"arrow-icon--open":"arrow-icon"},p=(e,a,n,l,t)=>{const s=document.querySelector(`.${a}`),c=document.querySelector(`.${n}`),u=t.target;e.value&&s instanceof Node&&c instanceof Node&&u&&!s.contains(u)&&!c.contains(u)&&(e.value=!1,l.value="arrow-icon")},x=e=>{p(n,"confirm-modal","account-wrapper",X,e),p(a,"stock-exchange-menu","stock-exchange-wrapper",q,e)};(0,l.sV)((()=>{document.addEventListener("click",x)})),(0,l.xo)((()=>{document.removeEventListener("click",x)}));const A=(0,u.KR)("Bybit"),F=e=>{A.value=e},X=(0,u.KR)("arrow-icon"),q=(0,u.KR)("arrow-icon");(0,l.sV)((async()=>{document.addEventListener("click",Q)})),(0,l.xo)((()=>{document.removeEventListener("click",Q)}));const B=(0,u.KR)(!1),W=()=>{B.value=!B.value},M=e=>{s.value=e,B.value=!1},Q=e=>{const a=document.querySelector(".language-settings"),n=document.querySelector(".language-wrapper");B.value&&a&&!a.contains(e.target)&&!n.contains(e.target)&&(B.value=!1)};return(e,s)=>((0,l.uX)(),(0,l.CE)("section",m,[(0,l.Lk)("div",b,[(0,l.Lk)("div",_,[s[11]||(s[11]=(0,l.Lk)("h2",null,"Settings",-1)),(0,l.Lk)("div",w,[(0,l.Lk)("div",{class:"settings-wrapper stock-exchange-wrapper",onClick:k},[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("change-stock")),1),(0,l.Lk)("p",null,(0,c.v_)(A.value),1),(0,l.Lk)("img",{class:(0,c.C4)(q.value),src:r,alt:""},null,2),a.value?((0,l.uX)(),(0,l.CE)("div",C,[(0,l.Lk)("button",{onClick:s[0]||(s[0]=e=>F("Bybit")),class:"language-btn"},s[5]||(s[5]=[(0,l.Lk)("img",{src:i,alt:"English language"},null,-1),(0,l.eW)(" Bybit ")])),(0,l.Lk)("button",{onClick:s[1]||(s[1]=e=>F("Test")),class:"language-btn"},s[6]||(s[6]=[(0,l.Lk)("img",{src:o,alt:"Russian language"},null,-1),(0,l.eW)(" Test ")]))])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",f,[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("become-referal")),1),s[7]||(s[7]=(0,l.Lk)("p",null,null,-1))]),(0,l.Lk)("div",{class:"settings-wrapper account-wrapper",onClick:g},[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("delete-account")),1),(0,l.Lk)("img",{class:(0,c.C4)(X.value),src:r,alt:""},null,2),n.value?((0,l.uX)(),(0,l.CE)("div",h,[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("is-sure")),1),(0,l.Lk)("div",R,[(0,l.Lk)("button",{class:"confirm-btn",onClick:s[2]||(s[2]=(...a)=>e.deleteAccount&&e.deleteAccount(...a))},(0,c.v_)((0,u.R1)(t)("yes")),1),(0,l.Lk)("button",{class:"deny-btn",onClick:g},(0,c.v_)((0,u.R1)(t)("no")),1)])])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",y,[(0,l.Lk)("div",E,[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("vibration")),1),(0,l.bF)(d)]),(0,l.Lk)("div",K,[(0,l.Lk)("h3",null,(0,c.v_)((0,u.R1)(t)("coin-animation")),1),(0,l.bF)(d)])]),(0,l.Lk)("button",{class:"language-wrapper",onClick:W},s[8]||(s[8]=[(0,l.Lk)("img",{src:v,alt:"Language"},null,-1)])),B.value?((0,l.uX)(),(0,l.CE)("div",S,[(0,l.Lk)("button",{onClick:s[3]||(s[3]=e=>M("en")),class:"language-btn"},[s[9]||(s[9]=(0,l.Lk)("img",{src:i,alt:"English language"},null,-1)),(0,l.eW)(" "+(0,c.v_)((0,u.R1)(t)("english")),1)]),(0,l.Lk)("button",{onClick:s[4]||(s[4]=e=>M("ru")),class:"language-btn"},[s[10]||(s[10]=(0,l.Lk)("img",{src:o,alt:"Russian language"},null,-1)),(0,l.eW)(" "+(0,c.v_)((0,u.R1)(t)("russian")),1)])])):(0,l.Q3)("",!0)]),s[12]||(s[12]=(0,l.Lk)("p",{class:"politic"},"Политика конфедициальности",-1))])])]))}});const A=(0,k.A)(x,[["__scopeId","data-v-2e78a8b8"]]);var F=A,X=(0,l.pM)({__name:"SettingsView",setup(e){return(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(t.A),(0,l.Lk)("main",null,[(0,l.bF)(F)]),(0,l.bF)(s.A)],64))}});const q=X;var B=q}}]);
//# sourceMappingURL=250.c865dcb4.js.map