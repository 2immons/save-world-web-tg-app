"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[239],{9255:function(a,t,s){s.r(t),s.d(t,{default:function(){return U}});var e=s(6768),l=s(9273),i=s(1020),d=s(4232),n=s.p+"img/time.6a9b4e9f.svg",o=s(144),c=s(3436);s(4603),s(7566),s(8721);const v={data(){return{username:(0,o.KR)("Loading..."),firstName:(0,o.KR)("Loading..."),lastName:(0,o.KR)("Loading..."),locale:(0,o.KR)("en")}},methods:{generateQueryForValidation(){if(!window.Telegram||!window.Telegram.WebApp)return console.error("Telegram WebApp API не доступен."),null;{window.Telegram.WebApp.ready();const a=window.Telegram.WebApp.initDataUnsafe?.user;if(a){const a=window.Telegram.WebApp.initData,t=new URLSearchParams(a),s=t.get("auth_date"),e=t.get("hash");t.delete("hash");const l=Array.from(t.entries()).sort((([a],[t])=>a.localeCompare(t))).map((([a,t])=>`${a}=${t}`)).join("\n");return{web_app_data:{data_check_string:l,auth_date:s,hash:e}}}}}}},r={class:"stats-section"},p={class:"container"},u={class:"stats-content"},m={class:"stats-wrapper"},g={class:"stats__item stats__item--balance"},k={class:"amount"},_={class:"stats__item stats__item--mining-speed"},h={class:"amount"},L={class:"mining-progress-wrapper"},W={class:"mining-progress-bar"},w={class:"interface"},b={class:"time"},f={key:1,class:"progress"},T={class:"interface"},C={class:"time"};var y=(0,e.pM)({__name:"StatsSection",setup(a){const t=(0,c.L)(),s=(0,e.EW)((()=>t.getSpeed)),l=(0,e.EW)((()=>t.getBalance)),i=(0,e.EW)((()=>t.getStatus)),y=(0,e.EW)((()=>"active"===i.value?"claim-button--active":"claim-button")),E=(0,e.EW)((()=>t.getRemainingTime)),A=(0,e.EW)((()=>String(E.value/240*100)+"%")),B=(0,o.KR)(Math.floor(E.value/60)),P=(0,o.KR)(E.value%60),S=()=>{};return(0,e.sV)((async()=>{(0,c.L)(),v.methods.generateQueryForValidation()})),(a,t)=>((0,e.uX)(),(0,e.CE)("section",r,[(0,e.Lk)("div",p,[(0,e.Lk)("div",u,[(0,e.Lk)("div",m,[(0,e.Lk)("div",g,[t[0]||(t[0]=(0,e.Lk)("p",null,"Your Balance",-1)),(0,e.Lk)("div",k,(0,d.v_)(l.value),1)]),(0,e.Lk)("div",_,[t[1]||(t[1]=(0,e.Lk)("p",null,"Mining Speed",-1)),(0,e.Lk)("div",h,"+ "+(0,d.v_)(s.value)+"/h",1)])]),(0,e.Lk)("div",L,[(0,e.Lk)("div",W,["active"===i.value?((0,e.uX)(),(0,e.CE)("div",{key:0,class:"progress",style:(0,d.Tr)({width:A.value})},[(0,e.Lk)("div",w,[(0,e.Lk)("button",{onClick:S},"Claim"),(0,e.Lk)("div",b,[t[2]||(t[2]=(0,e.Lk)("img",{src:n,alt:""},null,-1)),(0,e.Lk)("p",null,(0,d.v_)(B.value)+"h "+(0,d.v_)(P.value)+"m",1)])])],4)):(0,e.Q3)("",!0),"closed"===i.value?((0,e.uX)(),(0,e.CE)("div",f,[(0,e.Lk)("div",T,[(0,e.Lk)("button",{onClick:S,class:(0,d.C4)(y.value)}," Claim ",2),(0,e.Lk)("div",C,[t[3]||(t[3]=(0,e.Lk)("img",{src:n,alt:""},null,-1)),(0,e.Lk)("p",null,(0,d.v_)(B.value)+"h "+(0,d.v_)(P.value)+"m",1)])])])):(0,e.Q3)("",!0)])])])])]))}}),E=s(1241);const A=(0,E.A)(y,[["__scopeId","data-v-dd95c8ec"]]);var B=A,P=s.p+"img/bg-earth-vectors.e11176ba.svg",S=s.p+"img/earth.9898a300.png",R=s(6289);const X={class:"logo"};var K=(0,e.pM)({__name:"EarthSection",setup(a){const t=()=>{R.B.emit("toggleWorldStatictics",!0)};return(a,s)=>((0,e.uX)(),(0,e.CE)("section",X,[(0,e.Lk)("div",{class:"container"},[(0,e.Lk)("div",{class:"logo-wrapper",onClick:t},s[0]||(s[0]=[(0,e.Lk)("div",{class:"background"},[(0,e.Lk)("img",{src:P,alt:""})],-1),(0,e.Lk)("div",{class:"circle"},null,-1),(0,e.Lk)("img",{class:"earth",src:S,alt:""},null,-1)]))])]))}});const V=(0,E.A)(K,[["__scopeId","data-v-fd3c2016"]]);var Q=V;const F={class:"world-population-section"};var M=(0,e.pM)({__name:"TheWorldPopulation",setup(a){return(0,e.sV)((()=>{R.B.emit("toggleHeaderBackBtnVisibility",!0)})),(0,e.xo)((()=>{R.B.emit("toggleHeaderBackBtnVisibility",!1)})),(a,t)=>((0,e.uX)(),(0,e.CE)("section",F,t[0]||(t[0]=[(0,e.Fv)('<div class="container" data-v-457a730d><div class="world-population-content" data-v-457a730d><h2 data-v-457a730d>World Population</h2><div class="stats-list" data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div><hr data-v-457a730d><div class="stats-item" data-v-457a730d><p class="title" data-v-457a730d>65666444</p><p class="hint" data-v-457a730d>Total World Population</p></div></div></div></div>',1)])))}});const I=(0,E.A)(M,[["__scopeId","data-v-457a730d"]]);var H=I,D=(0,e.pM)({__name:"HomeView",setup(a){const t=(0,o.KR)(!1);return(0,e.sV)((()=>{R.B.on("toggleWorldStatictics",(a=>{t.value=a}))})),(0,e.hi)((()=>{R.B.off("toggleWorldStatictics")})),(a,s)=>((0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(l.A),(0,e.Lk)("main",null,[t.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.Wv)(B,{key:0})),t.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.Wv)(Q,{key:1})),t.value?((0,e.uX)(),(0,e.Wv)(H,{key:2})):(0,e.Q3)("",!0)]),(0,e.bF)(i.A)],64))}});const N=D;var U=N}}]);
//# sourceMappingURL=239.6c3e545d.js.map