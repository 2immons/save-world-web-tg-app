"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[483],{5548:function(t,s,a){a.d(s,{L:function(){return r}});var e=a(5234),o=a(4373),l=a(3957);const r=(0,e.nY)("quests",{state:()=>({categories:[{cat_id:0,title:"Social",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{cat_id:1,title:"Social 2",tasks:[{id:5,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:6,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:7,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:8,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:9,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]}],promoTasks:[{promo_task_id:0,title:"Recycle",description:"Recycle 5 batteries.",promo_task_status:"NOT_STARTED",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]}]}),actions:{fetchQuests(){return this.promoTasks},acceptTask(t){const s=this.categories.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));a&&(a.status="VERIFYING",setTimeout((()=>{a.status="COMPLETED"}),5e3))}},acceptPromoTask(t){const s=this.promoTasks.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));if(a){a.status="VERIFYING",s.promo_task_status="IN_PROGRESS",setTimeout((()=>{a.status="COMPLETED"}),5e3);let t=!0;s.tasks.forEach((s=>{"COMPLETED"===s.status||(t=!1)})),t&&(s.promo_task_status="COMPLETED")}}},claimPromoTaskReward(t){const s=this.promoTasks.find((s=>s.promo_task_id===t.promo_task_id));s&&(t.promo_task_status="CLAIMED")},claimReward(t){const s=this.categories.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));a&&(a.status="CLAIMED")}},async joinQuest(t){const s=await o.A.post(l.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==s.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+s.status)}},getters:{}})},4812:function(t,s,a){a.d(s,{A:function(){return T}});var e=a(6768),o=a(4232),l=a.p+"img/battery.e2012877.svg",r=a(4462),i=a(5548),c=a(5234);const u={class:"task-item"},k={class:"left-side"},n={class:"info"},p={key:0,class:"loader-wrapper"},d={key:1,class:"claimed-wrapper"};var v=(0,e.pM)({__name:"TaskItem",props:{task:{},isPromoTask:{type:Boolean}},setup(t){const s=(0,i.L)(),a=t,{categories:v}=(0,c.bP)(s),_=(0,e.EW)((()=>{const t=v.value.find((t=>t.tasks.some((t=>t.id===a.task.id)))),s=t?.tasks.find((t=>t.id===a.task.id));return s||a.task})),m=async()=>{try{window.open(_.value.url,"_blank"),s.acceptTask(_.value)}catch(t){return void console.error(t)}},T=async()=>{try{s.claimReward(_.value)}catch(t){return void console.error(t)}};return(t,s)=>((0,e.uX)(),(0,e.CE)("div",u,[(0,e.Lk)("div",k,[s[1]||(s[1]=(0,e.Lk)("img",{src:l,alt:""},null,-1)),(0,e.Lk)("div",n,[(0,e.Lk)("h3",null,(0,o.v_)(_.value.title),1),s[0]||(s[0]=(0,e.Lk)("div",{class:"income"},[(0,e.Lk)("p",null,"+ 699"),(0,e.Lk)("img",{src:r,alt:""})],-1))])]),"VERIFYING"===_.value.status?((0,e.uX)(),(0,e.CE)("div",p,s[2]||(s[2]=[(0,e.Lk)("div",{class:"loader"},null,-1)]))):(0,e.Q3)("",!0),"CLAIMED"===_.value.status?((0,e.uX)(),(0,e.CE)("div",d,s[3]||(s[3]=[(0,e.Lk)("p",null,"Completed",-1)]))):"NOT_STARTED"===_.value.status?((0,e.uX)(),(0,e.CE)("button",{key:2,onClick:m},(0,o.v_)(t.t("accept-task")),1)):"COMPLETED"===_.value.status?((0,e.uX)(),(0,e.CE)("button",{key:3,onClick:T},(0,o.v_)(t.t("claim-task")),1)):(0,e.Q3)("",!0)]))}}),_=a(1241);const m=(0,_.A)(v,[["__scopeId","data-v-1312ff38"]]);var T=m},5108:function(t,s,a){a.r(s),a.d(s,{default:function(){return V}});var e=a(6768),o=a(1628),l=a(238),r=a(4232),i=a(5548),c=a(144),u=a.p+"img/bg-vectores--promo-task.ee3e09b0.svg",k=a.p+"img/green-coin--small.1c407025.svg",n=a(5234);const p={class:"promo-task-wrapper"},d={class:"promo-task-box"},v={class:"title"},_={class:"name"},m={class:"footer"},T={key:2,class:"claimed-wrapper"};var E=(0,e.pM)({__name:"PromoTask",props:{promoTask:{}},setup(t){const s=(0,i.L)(),a=t,{promoTasks:o}=(0,n.bP)(s),l=(0,e.EW)((()=>{const t=o.value.find((t=>t.promo_task_id===a.promoTask.promo_task_id));return t||a.promoTask})),c=async()=>{},E=async()=>{try{s.claimPromoTaskReward(l.value)}catch(t){return void console.error(t)}};return(t,s)=>{const a=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("div",p,[(0,e.Lk)("div",d,[s[2]||(s[2]=(0,e.Lk)("img",{src:u,alt:"",class:"bg-image"},null,-1)),s[3]||(s[3]=(0,e.Lk)("div",{class:"bg-ellepsis"},null,-1)),(0,e.Lk)("p",v,(0,r.v_)(l.value.title),1),(0,e.Lk)("p",_,(0,r.v_)(l.value.description),1),(0,e.Lk)("div",m,["CLAIMED"!==l.value.promo_task_status&&"COMPLETED"!==l.value.promo_task_status?((0,e.uX)(),(0,e.Wv)(a,{key:0,to:{name:"promo-task",params:{promo_task_id:l.value.promo_task_id}}},{default:(0,e.k6)((()=>[(0,e.Lk)("button",{onClick:c},(0,r.v_)("IN_PROGRESS"===l.value.promo_task_status?t.t("continue-promo-task"):t.t("accept-task")),1)])),_:1},8,["to"])):"COMPLETED"===l.value.promo_task_status?((0,e.uX)(),(0,e.CE)("button",{key:1,onClick:E},(0,r.v_)(t.t("claim-task")),1)):"CLAIMED"===l.value.promo_task_status?((0,e.uX)(),(0,e.CE)("div",T,s[0]||(s[0]=[(0,e.Lk)("p",null,"Completed",-1)]))):(0,e.Q3)("",!0),s[1]||(s[1]=(0,e.Lk)("div",{class:"benefits"},[(0,e.Lk)("p",null,[(0,e.eW)(" + 699 "),(0,e.Lk)("img",{src:k,alt:""})])],-1))])])])}}}),f=a(1241);const L=(0,f.A)(E,[["__scopeId","data-v-ef2fe508"]]);var C=L,h=a(4812);const y={key:0,class:"task-category__tasks"};var g=(0,e.pM)({__name:"TasksCategory",props:{activeCategory:{},category:{}},emits:["clicked"],setup(t,{emit:s}){const a=t;return(t,s)=>a.activeCategory===a.category.cat_id?((0,e.uX)(),(0,e.CE)("div",y,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.category.tasks,((t,s)=>((0,e.uX)(),(0,e.Wv)(h.A,{class:"task-category__task",key:s,task:t,isPromoTask:!1},null,8,["task"])))),128))])):(0,e.Q3)("",!0)}});const R=(0,f.A)(g,[["__scopeId","data-v-c807c592"]]);var I=R;const D={class:"quests"},b={class:"container"},A={class:"quests-content"},w={key:1},M={class:"regular-tasks"},X={class:"nav-wrapper"},O={class:"nav no-scrollbar"},P=["onClick"],N={key:0,class:"nav-overlay nav-overlay--left"},S={key:1,class:"nav-overlay nav-overlay--right"};var F=(0,e.pM)({__name:"TasksSection",setup(t){const s=(0,c.KR)(!0),a=(0,c.KR)(!1),o=t=>{const e=t.target;s.value=0===e.scrollLeft,a.value=e.scrollLeft+e.offsetWidth>=e.scrollWidth};(0,e.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",o)}));const l=(0,c.KR)(10),u=(0,c.KR)(!0),k=(0,c.KR)(!1),n=(0,i.L)(),p=(0,e.EW)((()=>n.promoTasks[0])),d=(0,e.EW)((()=>n.categories)),v=(0,c.KR)(0),_=t=>{v.value=t},m=t=>t===v.value?"category-title--active":"category-title";return(t,o)=>((0,e.uX)(),(0,e.CE)("section",D,[(0,e.Lk)("div",b,[(0,e.Lk)("div",A,[(0,e.Lk)("h2",null,[(0,e.eW)((0,r.v_)(t.t("tasks"))+" ",1),(0,e.Lk)("span",null,(0,r.v_)(l.value),1)]),u.value?((0,e.uX)(),(0,e.Wv)(C,{key:0,promoTask:p.value},null,8,["promoTask"])):(0,e.Q3)("",!0),k.value?((0,e.uX)(),(0,e.CE)("h3",w,(0,r.v_)(t.t("weekly")),1)):(0,e.Q3)("",!0),(0,e.Lk)("div",M,[(0,e.Lk)("div",X,[(0,e.Lk)("div",O,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(d.value,((t,s)=>((0,e.uX)(),(0,e.CE)("button",{key:s,class:(0,r.C4)(m(s)),onClick:t=>_(s)},(0,r.v_)(t.title),11,P)))),128))]),s.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("div",N)),a.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("div",S))]),((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(d.value,((t,s)=>((0,e.uX)(),(0,e.Wv)(I,{class:"tasks-nav",key:s,category:t,activeCategory:v.value},null,8,["category","activeCategory"])))),128))])])])]))}});const W=(0,f.A)(F,[["__scopeId","data-v-9698613a"]]);var K=W,Q=(0,e.pM)({__name:"TasksView",setup(t){return(t,s)=>((0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(o.A),(0,e.Lk)("main",null,[(0,e.bF)(K)]),(0,e.bF)(l.A)],64))}});const G=Q;var V=G},4462:function(t,s,a){t.exports=a.p+"img/green-coin.5547f652.svg"}}]);
//# sourceMappingURL=483.93506bd6.js.map