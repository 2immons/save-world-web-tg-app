"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[108],{5056:function(t,e,s){s.d(e,{$:function(){return o}});var i=s(5234),l=s(4373),a=s(3957);const o=(0,i.nY)("cards",{state:()=>({cards:[{title:"Title",price:10,level:20},{title:"Title",price:10,level:20},{title:"Title",price:10,level:20},{title:"Title",price:10,level:20},{title:"Title",price:10,level:20},{title:"Title",price:10,level:20}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(t){const e=await l.A.post(a.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},5548:function(t,e,s){s.d(e,{L:function(){return o}});var i=s(5234),l=s(4373),a=s(3957);const o=(0,i.nY)("quests",{state:()=>({categories:[{id:0,title:"Social",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:1,title:"Network",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:2,title:"Test 1",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:3,title:"Test 2",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:4,title:"Test 33",tasks:[{title:"Task 23"},{title:"Tasks 21"},{title:"Tasks 33"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(t){const e=await l.A.post(a.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},5667:function(t,e,s){s.r(e),s.d(e,{default:function(){return $}});var i=s(6768),l=s(1723),a=s(4805),o=s(4232),r=s(5548),n=s(144);const c={class:"select-wrapper"};var u=(0,i.pM)({__name:"MiningSelect",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){(0,r.L)();return(t,e)=>((0,i.uX)(),(0,i.CE)("div",c,e[0]||(e[0]=[(0,i.Lk)("button",{class:"active-btn"},"Mining",-1),(0,i.Lk)("button",null,"Games",-1),(0,i.Lk)("div",{class:"active-btn-bg"},null,-1)])))}}),m=s(1241);const p=(0,m.A)(u,[["__scopeId","data-v-dabf47d4"]]);var d=p,k=s(4697),v=s(4462),T=s(5056);const L={class:"card-item"},_={class:"content"},g={class:"info"},f={class:"card__title"},b={class:"footer"},h={class:"footer__item footer__item--level"},w={class:"footer__item footer__item--price"};var q=(0,i.pM)({__name:"CardItem",props:{card:{}},setup(t){(0,T.$)();return(t,e)=>((0,i.uX)(),(0,i.CE)("div",L,[e[5]||(e[5]=(0,i.Lk)("div",{class:"photo"},[(0,i.Lk)("img",{src:k,alt:""})],-1)),(0,i.Lk)("div",_,[(0,i.Lk)("div",g,[(0,i.Lk)("p",f,(0,o.v_)(t.card.title),1),e[0]||(e[0]=(0,i.Lk)("p",{class:"card__boost"},[(0,i.eW)(" Boost: + 0.5 "),(0,i.Lk)("img",{src:v,alt:""}),(0,i.eW)(" h")],-1)),e[1]||(e[1]=(0,i.Lk)("button",null," + ",-1))]),e[4]||(e[4]=(0,i.Lk)("hr",null,null,-1)),(0,i.Lk)("div",b,[(0,i.Lk)("div",h,[e[2]||(e[2]=(0,i.Lk)("img",{src:v,alt:""},null,-1)),(0,i.Lk)("p",null,"Lvl "+(0,o.v_)(t.card.level),1)]),(0,i.Lk)("div",w,[(0,i.Lk)("p",null,"Price: "+(0,o.v_)(t.card.price),1),e[3]||(e[3]=(0,i.Lk)("img",{src:v,alt:""},null,-1))])])])]))}});const C=(0,m.A)(q,[["__scopeId","data-v-e838062e"]]);var E=C;const Q={class:"task-list"};var K=(0,i.pM)({__name:"CardsList",setup(t){const e=(0,T.$)(),s=(0,i.EW)((()=>e.cards));return(t,e)=>((0,i.uX)(),(0,i.CE)("div",Q,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.value,((t,e)=>((0,i.uX)(),(0,i.Wv)(E,{key:e,card:t},null,8,["card"])))),128))]))}});const M=(0,m.A)(K,[["__scopeId","data-v-0585af31"]]);var N=M;const R={class:"quests"},A={class:"container"},D={class:"quests-content"},W={class:"regular-tasks"};var F=(0,i.pM)({__name:"MiningSection",setup(t){const e=(0,n.KR)(),s=(0,n.KR)(!0),l=(0,n.KR)(!1),a=t=>{const e=t.target;s.value=0===e.scrollLeft,l.value=e.scrollLeft+e.offsetWidth>=e.scrollWidth};(0,i.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",a)}));(0,n.KR)(10),(0,n.KR)(!1),(0,n.KR)(!1);const c=(0,r.L)();(0,i.EW)((()=>c.promoTasks)),(0,n.KR)(0),(0,i.EW)((()=>c.categories));return(t,s)=>((0,i.uX)(),(0,i.CE)("section",R,[(0,i.Lk)("div",A,[(0,i.Lk)("div",D,[(0,i.Lk)("h2",null,(0,o.v_)(t.t("mining")),1),(0,i.bF)(d,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t)},null,8,["modelValue"]),(0,i.Lk)("div",W,[(0,i.bF)(N)])])])]))}});const V=(0,m.A)(F,[["__scopeId","data-v-2736845c"]]);var X=V,I=(0,i.pM)({__name:"MiningView",setup(t){return(t,e)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(l.A),(0,i.Lk)("main",null,[(0,i.bF)(X)]),(0,i.bF)(a.A)],64))}});const y=I;var $=y},4462:function(t,e,s){t.exports=s.p+"img/green-coin.df620110.svg"},4697:function(t,e,s){t.exports=s.p+"img/card.a34b6c94.png"}}]);
//# sourceMappingURL=108.32f205b7.js.map