"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[17],{3681:function(a,t,s){s.r(t),s.d(t,{default:function(){return R}});var e=s(6768),l=s(4218),i=s(6096),v=s(4232),d=s(4462),c=s.p+"img/time.6a9b4e9f.svg",o=s(3436);const n={class:"stats-section"},p={class:"container"},r={class:"stats-content"},u={class:"stats-wrapper"},f={class:"stats__item stats__item--balance"},g={class:"amount"},m={class:"stats__item stats__item--mining-speed"},k={class:"amount"},_={class:"mining-progress-wrapper"},h={class:"mining-progress-bar"},L={class:"progress"},W={class:"interface"},b={class:"time"};var w=(0,e.pM)({__name:"StatsSection",setup(a){const t=(0,o.L)(),s=(0,e.EW)((()=>t.getSpeed)),l=(0,e.EW)((()=>t.getBalance)),i=(0,e.EW)((()=>t.getRemainingTime));return(a,t)=>((0,e.uX)(),(0,e.CE)("section",n,[(0,e.Lk)("div",p,[(0,e.Lk)("div",r,[(0,e.Lk)("div",u,[(0,e.Lk)("div",f,[t[1]||(t[1]=(0,e.Lk)("p",null,"Your Balance",-1)),(0,e.Lk)("div",g,[t[0]||(t[0]=(0,e.Lk)("img",{src:d,alt:""},null,-1)),(0,e.eW)(" "+(0,v.v_)(l.value),1)])]),(0,e.Lk)("div",m,[t[2]||(t[2]=(0,e.Lk)("p",null,"Mining Speed",-1)),(0,e.Lk)("div",k,"+ "+(0,v.v_)(s.value)+"/h",1)])]),(0,e.Lk)("div",_,[(0,e.Lk)("div",h,[(0,e.Lk)("div",L,[(0,e.Lk)("div",W,[t[4]||(t[4]=(0,e.Lk)("button",null,"Claim",-1)),(0,e.Lk)("div",b,[t[3]||(t[3]=(0,e.Lk)("img",{src:c,alt:""},null,-1)),(0,e.Lk)("p",null,(0,v.v_)(i.value[0])+"h "+(0,v.v_)(i.value[1])+"m",1)])])])])])])])]))}}),B=s(1241);const P=(0,B.A)(w,[["__scopeId","data-v-72a65310"]]);var T=P,C=s.p+"img/bg-earth-vectors.1a299822.svg",E=s.p+"img/earth.d9d76c43.svg",S=s(6289);const X={class:"logo"};var y=(0,e.pM)({__name:"EarthSection",setup(a){const t=()=>{S.B.emit("toggleWorldStatictics",!0)};return(a,s)=>((0,e.uX)(),(0,e.CE)("section",X,[(0,e.Lk)("div",{class:"container"},[(0,e.Lk)("div",{class:"logo-wrapper",onClick:t},s[0]||(s[0]=[(0,e.Lk)("div",{class:"background"},[(0,e.Lk)("img",{src:C,alt:""})],-1),(0,e.Lk)("div",{class:"circle"},null,-1),(0,e.Lk)("img",{class:"earth",src:E,alt:""},null,-1)]))])]))}});const A=(0,B.A)(y,[["__scopeId","data-v-06e9eee5"]]);var M=A;const V={class:"world-population-section"};var F=(0,e.pM)({__name:"TheWorldPopulation",setup(a){return(0,e.sV)((()=>{S.B.emit("toggleHeaderBackBtnVisibility",!0)})),(0,e.xo)((()=>{S.B.emit("toggleHeaderBackBtnVisibility",!1)})),(a,t)=>((0,e.uX)(),(0,e.CE)("section",V,t[0]||(t[0]=[(0,e.Fv)('<div class="container" data-v-aaef49a2><div class="world-population-content" data-v-aaef49a2><h2 data-v-aaef49a2>World Population</h2><div class="stats-list" data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div><hr data-v-aaef49a2><div class="stats-item" data-v-aaef49a2><p class="title" data-v-aaef49a2>65666444</p><p class="hint" data-v-aaef49a2>Total World Population</p></div></div></div></div>',1)])))}});const H=(0,B.A)(F,[["__scopeId","data-v-aaef49a2"]]);var I=H,Q=s(144),x=(0,e.pM)({__name:"HomeView",setup(a){const t=(0,Q.KR)(!1);return(0,e.sV)((()=>{S.B.on("toggleWorldStatictics",(a=>{t.value=a}))})),(0,e.hi)((()=>{S.B.off("toggleWorldStatictics")})),(a,s)=>((0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(l.A),(0,e.Lk)("main",null,[t.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.Wv)(T,{key:0})),t.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.Wv)(M,{key:1})),t.value?((0,e.uX)(),(0,e.Wv)(I,{key:2})):(0,e.Q3)("",!0)]),(0,e.bF)(i.A)],64))}});const K=x;var R=K},4462:function(a,t,s){a.exports=s.p+"img/green-coin.df620110.svg"}}]);
//# sourceMappingURL=17.8ce8610a.js.map