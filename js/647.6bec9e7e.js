"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[647],{5056:function(t,e,s){s.d(e,{$:function(){return o}});var i=s(5234),l=s(4373),a=s(3957);const o=(0,i.nY)("cards",{state:()=>({cards:[{title:"Title",price:10,level:20,isActive:!1},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!1},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!0}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(t){const e=await l.A.post(a.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},5548:function(t,e,s){s.d(e,{L:function(){return o}});var i=s(5234),l=s(4373),a=s(3957);const o=(0,i.nY)("quests",{state:()=>({categories:[{id:0,title:"Social",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:1,title:"Network",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:2,title:"Test 1",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:3,title:"Test 2",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:4,title:"Test 33",tasks:[{title:"Task 23"},{title:"Tasks 21"},{title:"Tasks 33"},{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(t){const e=await l.A.post(a.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},6592:function(t,e,s){s.r(e),s.d(e,{default:function(){return nt}});var i=s(6768),l=s(8881),a=s(3031),o=s(4232),n=s(5548),c=s(144),r=s(6289);const u={class:"select-wrapper"};var m=(0,i.pM)({__name:"MiningSelect",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){const s=e,l=t=>{"mining"===t?(n.value="inactive-btn",a.value="active-btn",r.B.emit("toggleFooterVisibility",!0)):"game"===t&&(a.value="inactive-btn",n.value="active-btn",r.B.emit("toggleFooterVisibility",!1)),s("update:modelValue",t)},a=(0,c.KR)("active-btn"),n=(0,c.KR)("inactive-btn");return(t,e)=>((0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("button",{class:(0,o.C4)(a.value),onClick:e[0]||(e[0]=t=>l("mining"))},"Mining",2),(0,i.Lk)("button",{class:(0,o.C4)(n.value),onClick:e[1]||(e[1]=t=>l("game"))},"Games",2)]))}}),d=s(1241);const p=(0,d.A)(m,[["__scopeId","data-v-77e1774a"]]);var v=p,k=s(5130),g=s.p+"img/locked-card.f67d7b74.svg",L=s.p+"img/bg-vectors-card.c9fd0f40.svg",_=s(4697),T=s(6550),f=s(4462),b=s(5056),C=s.p+"img/card-popup.82c40954.png",h=s(6817);const q={class:"container"},w={class:"info"},A={class:"stats"},E={class:"level"},Q={class:"income"},V={class:"buy-btn"};var y=(0,i.pM)({__name:"CardPopup",props:{card:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){(0,b.$)();const s=e,l=()=>{s("update:modelValue",!1)};return(t,e)=>((0,i.uX)(),(0,i.Wv)(k.eB,null,{default:(0,i.k6)((()=>[t.modelValue?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"card-popup",onClick:l},[(0,i.Lk)("div",{class:"content",onClick:e[0]||(e[0]=(0,k.D$)((()=>{}),["stop"]))},[(0,i.Lk)("div",q,[(0,i.Lk)("div",{class:"photo"},[e[1]||(e[1]=(0,i.Lk)("img",{src:C,alt:""},null,-1)),(0,i.Lk)("button",{onClick:l}," + ")]),(0,i.Lk)("div",w,[(0,i.Lk)("h3",null,(0,o.v_)(t.card.title),1),e[2]||(e[2]=(0,i.Lk)("p",null,"Lorem ipsum dolor sit amet consectetur. Sed eros viverra aliquam commodo sit sed. Tempor cras adipiscing ut et. Quam porttitor et amet consequat molestie. Fames in non vitae in",-1))]),e[6]||(e[6]=(0,i.Lk)("hr",null,null,-1)),(0,i.Lk)("div",A,[(0,i.Lk)("p",E,[e[3]||(e[3]=(0,i.Lk)("img",{src:T,alt:""},null,-1)),(0,i.eW)(" Lvl "+(0,o.v_)(t.card.level),1)]),(0,i.Lk)("p",Q,[(0,i.eW)(" Прибыль в час: + "+(0,o.v_)(t.card.price)+" ",1),e[4]||(e[4]=(0,i.Lk)("img",{src:f,alt:""},null,-1))])]),(0,i.Lk)("button",V,[(0,i.eW)(" Купить за "+(0,o.v_)(t.card.price)+" ",1),e[5]||(e[5]=(0,i.Lk)("img",{src:h,alt:""},null,-1))])])])])):(0,i.Q3)("",!0)])),_:1}))}});const X=(0,d.A)(y,[["__scopeId","data-v-7b7b4469"]]);var F=X;const K={class:"content"},R={class:"info"},W={class:"card__title"},D={class:"footer"},M={class:"footer__item footer__item--level"},N={class:"footer__item footer__item--price"};var $=(0,i.pM)({__name:"CardItem",props:{card:{}},setup(t){(0,b.$)();const e=(0,c.KR)(!1),s=()=>{e.value=!0};return(t,l)=>((0,i.uX)(),(0,i.CE)("div",{class:"card-item",onClick:s},[!1===t.card.isActive?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"card-item--inactive",onClick:l[0]||(l[0]=(0,k.D$)((()=>{}),["stop"]))},[(0,i.Lk)("button",{onClick:s},l[3]||(l[3]=[(0,i.Lk)("img",{src:g,alt:""},null,-1)])),l[4]||(l[4]=(0,i.Lk)("img",{src:L,alt:"",class:"bg-vectors"},null,-1))])):(0,i.Q3)("",!0),(0,i.bF)(F,{onClick:l[1]||(l[1]=(0,k.D$)((()=>{}),["stop"])),card:t.card,modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value=t)},null,8,["card","modelValue"]),l[9]||(l[9]=(0,i.Lk)("div",{class:"photo"},[(0,i.Lk)("img",{src:_,alt:""})],-1)),(0,i.Lk)("div",K,[(0,i.Lk)("div",R,[(0,i.Lk)("p",W,(0,o.v_)(t.card.title),1),l[5]||(l[5]=(0,i.Lk)("p",{class:"card__boost"},[(0,i.eW)(" Boost: + 0.5 "),(0,i.Lk)("img",{src:T,alt:""}),(0,i.eW)(" h ")],-1))]),l[8]||(l[8]=(0,i.Lk)("hr",null,null,-1)),(0,i.Lk)("div",D,[(0,i.Lk)("div",M,[l[6]||(l[6]=(0,i.Lk)("img",{src:f,alt:""},null,-1)),(0,i.Lk)("p",null,"Lvl "+(0,o.v_)(t.card.level),1)]),(0,i.Lk)("div",N,[(0,i.Lk)("p",null,"Price: "+(0,o.v_)(t.card.price),1),l[7]||(l[7]=(0,i.Lk)("img",{src:f,alt:""},null,-1))])])])]))}});const I=(0,d.A)($,[["__scopeId","data-v-dbe64668"]]);var B=I;const S={class:"task-list"};var j=(0,i.pM)({__name:"CardsList",setup(t){const e=(0,b.$)(),s=(0,i.EW)((()=>e.cards));return(t,e)=>((0,i.uX)(),(0,i.CE)("div",S,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.value,((t,e)=>((0,i.uX)(),(0,i.Wv)(B,{key:e,card:t},null,8,["card"])))),128))]))}});const x=(0,d.A)(j,[["__scopeId","data-v-6471a6ef"]]);var U=x;const G={class:"game-bg"};function P(t,e){return(0,i.uX)(),(0,i.CE)("div",G,e[0]||(e[0]=[(0,i.Lk)("h3",null,"Game",-1),(0,i.Lk)("button",null,"Claim",-1)]))}const Y={},z=(0,d.A)(Y,[["render",P],["__scopeId","data-v-06b99dcd"]]);var H=z;const J={class:"quests"},O={class:"container"},Z={class:"quests-content"},tt={key:0,class:"regular-tasks"},et={key:1,class:"game"};var st=(0,i.pM)({__name:"MiningSection",setup(t){const e=(0,c.KR)("mining"),s=(0,c.KR)(!0),l=(0,c.KR)(!1),a=t=>{const e=t.target;s.value=0===e.scrollLeft,l.value=e.scrollLeft+e.offsetWidth>=e.scrollWidth};(0,i.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",a)}));(0,c.KR)(10),(0,c.KR)(!1),(0,c.KR)(!1);const r=(0,n.L)();(0,i.EW)((()=>r.promoTasks)),(0,c.KR)(0),(0,i.EW)((()=>r.categories));return(t,s)=>((0,i.uX)(),(0,i.CE)("section",J,[(0,i.Lk)("div",O,[(0,i.Lk)("div",Z,[(0,i.Lk)("h2",null,(0,o.v_)(t.t("mining")),1),(0,i.bF)(v,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t)},null,8,["modelValue"]),"mining"===e.value?((0,i.uX)(),(0,i.CE)("div",tt,[(0,i.bF)(U)])):(0,i.Q3)("",!0),"game"===e.value?((0,i.uX)(),(0,i.CE)("div",et,[(0,i.bF)(H)])):(0,i.Q3)("",!0)])])]))}});const it=(0,d.A)(st,[["__scopeId","data-v-003c8662"]]);var lt=it,at=(0,i.pM)({__name:"MiningView",setup(t){return(t,e)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(l.A),(0,i.Lk)("main",null,[(0,i.bF)(lt)]),(0,i.bF)(a.A)],64))}});const ot=at;var nt=ot},6817:function(t,e,s){t.exports=s.p+"img/green-coin--black.4a75e65a.svg"},6550:function(t,e,s){t.exports=s.p+"img/green-coin--light-green.21676d28.svg"},4462:function(t,e,s){t.exports=s.p+"img/green-coin.40870ff4.svg"},4697:function(t,e,s){t.exports=s.p+"img/card.a34b6c94.png"}}]);
//# sourceMappingURL=647.6bec9e7e.js.map