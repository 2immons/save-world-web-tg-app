"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[76],{5056:function(a,e,t){t.d(e,{$:function(){return i}});var s=t(5234),l=t(4373),r=t(3957);const i=(0,s.nY)("cards",{state:()=>({cards:[{title:"Title",price:10,level:20,isActive:!1},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!1},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!0},{title:"Title",price:10,level:20,isActive:!0}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(a){const e=await l.A.post(r.$.backendURL+"/orders/join-quest",{quest:a,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},1116:function(a,e,t){t.r(e),t.d(e,{default:function(){return ka}});var s=t(6768),l=t(9273),r=t(1020),i=t(4232),o=t(144),u=t(5234),c=t(4373),n=t(3957);const d=(0,u.nY)("karma",{state:()=>({categories:[{id:0,title:"Recycle",karmaCards:[{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,userDonat:0,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,userDonat:12,isPurchased:!0,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:1e3,userDonat:12,isPurchased:!0,status:"CLOSED"}]},{id:1,title:"Medicine",karmaCards:[{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!0,status:"ACTIVE"}]},{id:2,title:"Animals",karmaCards:[{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"}]},{id:3,title:"Charity",karmaCards:[{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"},{title:"Title",price:10,boost:10,goal:1e3,raised:100,isPurchased:!1,status:"ACTIVE"}]}]}),actions:{async joinQuest(a){const e=await c.A.post(n.$.backendURL+"/orders/join-quest",{quest:a,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}});var m=t(5130),p=t(4697),v=t(6550),k=t(4462),C=t(6817),g=t(5056),L=t(6544);const b={class:"container"},h={class:"info"},E={class:"stats"},_={class:"donation-goal"},T={class:"donation-bar"},f={key:0},y={key:1},A={key:0,class:"buy-btn"},V={key:1,class:"buy-btn"};var I=(0,s.pM)({__name:"KarmaPopup",props:{karmaCard:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(a,{emit:e}){d();const t=a,l=e,r=()=>{l("update:modelValue",!1)},o=(0,s.EW)((()=>String(t.karmaCard.raised/t.karmaCard.goal*100)+"%"));return(a,e)=>((0,s.uX)(),(0,s.Wv)(m.eB,null,{default:(0,s.k6)((()=>[a.modelValue?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"card-popup",onClick:r},[(0,s.Lk)("div",{class:"content",onClick:e[0]||(e[0]=(0,m.D$)((()=>{}),["stop"]))},[(0,s.Lk)("div",b,[(0,s.Lk)("div",{class:"photo"},[e[1]||(e[1]=(0,s.Lk)("img",{src:L,alt:""},null,-1)),(0,s.Lk)("button",{onClick:r},"+")]),(0,s.Lk)("div",h,[(0,s.Lk)("h3",null,(0,i.v_)(a.karmaCard.title),1),e[2]||(e[2]=(0,s.Lk)("p",null," Lorem ipsum dolor sit amet consectetur. Sed eros viverra aliquam commodo sit sed. Tempor cras adipiscing ut et. Quam porttitor et amet consequat molestie. Fames in non vitae in ",-1))]),e[11]||(e[11]=(0,s.Lk)("hr",null,null,-1)),(0,s.Lk)("div",E,[(0,s.Lk)("p",null,[(0,s.eW)(" Прибыль: + "+(0,i.v_)(a.karmaCard.boost)+" ",1),e[3]||(e[3]=(0,s.Lk)("img",{src:k,alt:""},null,-1)),e[4]||(e[4]=(0,s.eW)(" / h "))])]),(0,s.Lk)("div",_,[(0,s.Lk)("p",null,[(0,s.eW)(" Donation Goal "+(0,i.v_)(a.karmaCard.goal)+" ",1),e[5]||(e[5]=(0,s.Lk)("img",{src:k,alt:""},null,-1)),(0,s.eW)(" (осталось "+(0,i.v_)(a.karmaCard.goal-a.karmaCard.raised)+" ",1),e[6]||(e[6]=(0,s.Lk)("img",{src:k,alt:""},null,-1)),e[7]||(e[7]=(0,s.eW)(") "))]),(0,s.Lk)("div",T,[(0,s.Lk)("div",{class:"progress",style:(0,i.Tr)({width:o.value})},null,4)]),a.karmaCard.isPurchased?((0,s.uX)(),(0,s.CE)("p",f,[(0,s.eW)(" Вы вложили: "+(0,i.v_)(a.karmaCard.userDonat)+" ",1),e[8]||(e[8]=(0,s.Lk)("img",{src:k,alt:""},null,-1))])):a.karmaCard.isPurchased?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("p",y," Вы еще ничего не вкладывали "))]),a.karmaCard.isPurchased||"ACTIVE"!==a.karmaCard.status?a.karmaCard.isPurchased&&"ACTIVE"===a.karmaCard.status?((0,s.uX)(),(0,s.CE)("button",V,e[10]||(e[10]=[(0,s.eW)(" Вложить еще "),(0,s.Lk)("img",{src:C,alt:""},null,-1)]))):(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",A,[(0,s.eW)(" Вложить от "+(0,i.v_)(a.karmaCard.price)+" ",1),e[9]||(e[9]=(0,s.Lk)("img",{src:C,alt:""},null,-1))]))])])])):(0,s.Q3)("",!0)])),_:1}))}}),P=t(1241);const W=(0,P.A)(I,[["__scopeId","data-v-5a4f9aad"]]);var X=W;const Q={class:"card-item"},w={key:0,class:"ellepsis ellepsis--upper"},K={key:1,class:"ellepsis ellepsis--bottom"},D={class:"content"},q={class:"info"},R={class:"card__title"},F={key:0,class:"card__boost"},S={key:1,class:"card__boost"},M={class:"footer"},$={class:"donation-goal"},x={class:"donation-bar"},j={key:0};var N=(0,s.pM)({__name:"KarmaItem",props:{karmaCard:{}},setup(a){(0,g.$)();const e=a,t=(0,s.EW)((()=>String(e.karmaCard.raised/e.karmaCard.goal*100)+"%")),l=(0,o.KR)(!1),r=()=>{l.value=!0};return(a,e)=>((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.bF)(X,{onClick:e[0]||(e[0]=(0,m.D$)((()=>{}),["stop"])),karmaCard:a.karmaCard,modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a)},null,8,["karmaCard","modelValue"]),a.karmaCard.isPurchased?((0,s.uX)(),(0,s.CE)("div",w)):(0,s.Q3)("",!0),a.karmaCard.isPurchased?((0,s.uX)(),(0,s.CE)("div",K)):(0,s.Q3)("",!0),(0,s.Lk)("div",D,[e[8]||(e[8]=(0,s.Lk)("div",{class:"photo"},[(0,s.Lk)("img",{src:p,alt:""})],-1)),(0,s.Lk)("div",q,[(0,s.Lk)("p",R,(0,i.v_)(a.karmaCard.title),1),"ACTIVE"===a.karmaCard.status?((0,s.uX)(),(0,s.CE)("p",F,[(0,s.eW)(" Boost: + "+(0,i.v_)(a.karmaCard.boost)+" ",1),e[2]||(e[2]=(0,s.Lk)("img",{src:v,alt:""},null,-1)),e[3]||(e[3]=(0,s.eW)(" / h "))])):"CLOSED"===a.karmaCard.status?((0,s.uX)(),(0,s.CE)("p",S," We raised all money! ")):(0,s.Q3)("",!0)]),e[9]||(e[9]=(0,s.Lk)("hr",null,null,-1)),(0,s.Lk)("div",M,[(0,s.Lk)("div",$,[(0,s.Lk)("p",null,[(0,s.eW)(" Donation Goal "+(0,i.v_)(a.karmaCard.goal)+" ",1),e[4]||(e[4]=(0,s.Lk)("img",{src:k,alt:""},null,-1))]),(0,s.Lk)("div",x,[(0,s.Lk)("div",{class:"progress",style:(0,i.Tr)({width:t.value})},null,4)]),a.karmaCard.isPurchased?((0,s.uX)(),(0,s.CE)("p",j,[(0,s.eW)(" Вы вложили: "+(0,i.v_)(a.karmaCard.userDonat)+" ",1),e[5]||(e[5]=(0,s.Lk)("img",{src:k,alt:""},null,-1))])):(0,s.Q3)("",!0)]),a.karmaCard.isPurchased||"ACTIVE"!==a.karmaCard.status?a.karmaCard.isPurchased&&"ACTIVE"===a.karmaCard.status?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"buy-btn",onClick:r},e[7]||(e[7]=[(0,s.eW)(" Вложить еще "),(0,s.Lk)("img",{src:C,alt:""},null,-1)]))):(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:0,class:"buy-btn",onClick:r},[(0,s.eW)(" Вложить от "+(0,i.v_)(a.karmaCard.price)+" ",1),e[6]||(e[6]=(0,s.Lk)("img",{src:C,alt:""},null,-1))]))])])]))}});const B=(0,P.A)(N,[["__scopeId","data-v-eebd9f1e"]]);var U=B,G=t.p+"img/recycling.e5e782f1.svg",O=t.p+"img/med.e79358aa.svg",Y=t.p+"img/animals.3ae79805.svg";const z={class:"task-list"},H={class:"nav-wrapper"},J={class:"nav no-scrollbar"},Z=["onClick"],aa=["src"],ea={key:0,class:"nav-overlay nav-overlay--left"},ta={key:1,class:"nav-overlay nav-overlay--right"},sa={class:"list"};var la=(0,s.pM)({__name:"KarmaList",setup(a){const e=d(),t=(0,o.KR)(0),l=(0,s.EW)((()=>e.categories)),r=(0,o.KR)(l.value[t.value].karmaCards),u=(0,o.KR)([G,O,Y,Y]),c=(0,o.KR)(u.value[0]),n=a=>{t.value=a,c.value=u.value[a],r.value=l.value[t.value].karmaCards},m=a=>a===t.value?"category-title--active":"category-title",p=(0,o.KR)(!0),v=(0,o.KR)(!1),k=a=>{const e=a.target;p.value=0===e.scrollLeft,v.value=e.scrollLeft+e.offsetWidth>=e.scrollWidth};return(0,s.sV)((()=>{const a=document.querySelector(".nav");a&&a.addEventListener("scroll",k)})),(a,e)=>((0,s.uX)(),(0,s.CE)("div",z,[(0,s.Lk)("div",H,[(0,s.Lk)("div",J,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.value,((a,e)=>((0,s.uX)(),(0,s.CE)("button",{key:e,class:(0,i.C4)(m(e)),onClick:a=>n(e)},[a.id===t.value?((0,s.uX)(),(0,s.CE)("img",{key:0,src:c.value,alt:""},null,8,aa)):(0,s.Q3)("",!0),(0,s.eW)(" "+(0,i.v_)(a.title),1)],10,Z)))),128))]),p.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",ea)),v.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",ta))]),(0,s.Lk)("div",sa,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.value,((a,e)=>((0,s.uX)(),(0,s.Wv)(U,{key:e,karmaCard:a},null,8,["karmaCard"])))),128))])]))}});const ra=(0,P.A)(la,[["__scopeId","data-v-1caf32b6"]]);var ia=ra;const oa={class:"quests"},ua={class:"container"},ca={class:"quests-content"};var na=(0,s.pM)({__name:"KarmaSection",setup(a){const e=(0,o.KR)(!0),t=(0,o.KR)(!1),l=a=>{const s=a.target;e.value=0===s.scrollLeft,t.value=s.scrollLeft+s.offsetWidth>=s.scrollWidth};return(0,s.sV)((()=>{const a=document.querySelector(".nav");a&&a.addEventListener("scroll",l)})),(a,e)=>((0,s.uX)(),(0,s.CE)("section",oa,[(0,s.Lk)("div",ua,[(0,s.Lk)("div",ca,[(0,s.Lk)("h2",null,(0,i.v_)(a.t("karma")),1),(0,s.bF)(ia)])])]))}});const da=(0,P.A)(na,[["__scopeId","data-v-75a0cdd4"]]);var ma=da,pa=(0,s.pM)({__name:"KarmaView",setup(a){return(a,e)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(l.A),(0,s.Lk)("main",null,[(0,s.bF)(ma)]),(0,s.bF)(r.A)],64))}});const va=pa;var ka=va},6817:function(a,e,t){a.exports=t.p+"img/green-coin--black.4a75e65a.svg"},6550:function(a,e,t){a.exports=t.p+"img/green-coin--light-green.21676d28.svg"},4462:function(a,e,t){a.exports=t.p+"img/green-coin.40870ff4.svg"},6544:function(a,e,t){a.exports=t.p+"img/card-popup.82c40954.png"},4697:function(a,e,t){a.exports=t.p+"img/card.a34b6c94.png"}}]);
//# sourceMappingURL=76.df844780.js.map