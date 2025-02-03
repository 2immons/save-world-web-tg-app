"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[511],{640:function(a,s,e){e.r(s),e.d(s,{default:function(){return Q}});var t=e(6768),o=e(193),l=e(6311),r=e(4232),c=e(7197),n=e(144),u=e.p+"img/bg-vectores--promo-task.ee3e09b0.svg",v=e.p+"img/green-coin--small.1c407025.svg";const k={class:"promo-task-wrapper"},i={class:"promo-task-box"},p={class:"title"},g={class:"name"},d={class:"footer"},_={key:2,class:"claimed-wrapper"};var m=(0,t.pM)({__name:"PromoTask",props:{index:{},group:{}},setup(a){(0,c.L)();const s=a,e=async()=>{},o=a=>a?a.every((a=>a.is_done))?"COMPLETED":a.some((a=>a.is_done))?"IN_PROGRESS":"NOT_STARTED":"not_started";return(a,l)=>{const c=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",k,[(0,t.Lk)("div",i,[l[3]||(l[3]=(0,t.Lk)("img",{src:u,alt:"",class:"bg-image"},null,-1)),l[4]||(l[4]=(0,t.Lk)("div",{class:"bg-ellepsis"},null,-1)),(0,t.Lk)("p",p,(0,r.v_)(a.group.name),1),(0,t.Lk)("p",g,(0,r.v_)(a.group.description),1),(0,t.Lk)("div",d,["CLAIMED"!==o(s.group.tasks)&&"COMPLETED"!==o(s.group.tasks)?((0,t.uX)(),(0,t.Wv)(c,{key:0,to:{name:"promo-task",params:{promo_task_id:s.index}}},{default:(0,t.k6)((()=>[(0,t.Lk)("button",{onClick:e,class:"start-btn"},(0,r.v_)("IN_PROGRESS"===o(s.group.tasks)?a.t("continue-promo-task"):a.t("accept-task")),1)])),_:1},8,["to"])):"COMPLETED"===o(s.group.tasks)?((0,t.uX)(),(0,t.CE)("button",{key:1,onClick:l[0]||(l[0]=(...s)=>a.claimReward&&a.claimReward(...s)),class:"claim-btn"},(0,r.v_)(a.t("claim-task")),1)):"CLAIMED"===a.promoTask.promo_task_status?((0,t.uX)(),(0,t.CE)("div",_,l[1]||(l[1]=[(0,t.Lk)("p",null,"Completed",-1)]))):(0,t.Q3)("",!0),l[2]||(l[2]=(0,t.Lk)("div",{class:"benefits"},[(0,t.Lk)("p",null,[(0,t.eW)(" + 699 "),(0,t.Lk)("img",{src:v,alt:""})])],-1))])])])}}}),y=e(1241);const L=(0,y.A)(m,[["__scopeId","data-v-79573653"]]);var C=L,E=e(7373);const f={key:0,class:"task-category__tasks"};var b=(0,t.pM)({__name:"TasksCategory",props:{activeCategory:{},category:{}},emits:["clicked"],setup(a,{emit:s}){const e=a;return(a,s)=>e.activeCategory===e.category.index?((0,t.uX)(),(0,t.CE)("div",f,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.category.tasks,((a,s)=>((0,t.uX)(),(0,t.Wv)(E.A,{class:"task-category__task",key:s,task:a,isPromoTask:!1},null,8,["task"])))),128))])):(0,t.Q3)("",!0)}});const X=(0,y.A)(b,[["__scopeId","data-v-38c36dd2"]]);var w=X;const R={class:"quests"},T={class:"container"},K={class:"quests-content"},M={key:0},I={class:"regular-tasks"},W={class:"nav-wrapper"},h=["onClick"],A={key:0,class:"nav-overlay nav-overlay--left"},F={key:1,class:"nav-overlay nav-overlay--right"};var P=(0,t.pM)({__name:"TasksSection",setup(a){const s=(0,n.KR)(!0),e=(0,n.KR)(!1),o=a=>{const t=a.target;s.value=0===t.scrollLeft,e.value=t.scrollLeft+t.offsetWidth>=t.scrollWidth},l=(0,n.KR)(10),u=(0,n.KR)(!1),v=(0,c.L)();(0,t.sV)((async()=>{await v.fetchTasks()}));const k=(0,t.EW)((()=>v.categories)),i=(0,t.EW)((()=>v.groups)),p=(0,n.KR)(0),g=a=>{p.value=a},d=a=>a===p.value?"category-title--active":"category-title",_=(0,n.KR)(!1),m=(0,n.KR)(0),y=(0,n.KR)(0),L=a=>{const s=a.currentTarget;_.value=!0,m.value=a.pageX-s.offsetLeft,y.value=s.scrollLeft},E=a=>{if(!_.value)return;const s=a.currentTarget,e=a.pageX-s.offsetLeft,t=2*(e-m.value);s.scrollLeft=y.value-t},f=()=>{_.value=!1};return(a,c)=>((0,t.uX)(),(0,t.CE)("section",R,[(0,t.Lk)("div",T,[(0,t.Lk)("div",K,[(0,t.Lk)("h2",null,[(0,t.eW)((0,r.v_)(a.t("tasks"))+" ",1),(0,t.Lk)("span",null,(0,r.v_)(l.value),1)]),(0,t.Lk)("div",{class:"promo-tasks no-scrollbar",onMousedown:L,onMousemove:E,onMouseup:f,onMouseleave:f},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.value,((a,s)=>((0,t.uX)(),(0,t.Wv)(C,{key:s,group:a,index:s},null,8,["group","index"])))),128))],32),u.value?((0,t.uX)(),(0,t.CE)("h3",M,(0,r.v_)(a.t("weekly")),1)):(0,t.Q3)("",!0),(0,t.Lk)("div",I,[(0,t.Lk)("div",W,[(0,t.Lk)("div",{class:"nav no-scrollbar",onScroll:o},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(k.value,((a,s)=>((0,t.uX)(),(0,t.CE)("button",{key:s,class:(0,r.C4)(d(s)),onClick:a=>g(s)},(0,r.v_)(a.category),11,h)))),128))],32),s.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",A)),e.value?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",F))]),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(k.value,((a,s)=>((0,t.uX)(),(0,t.Wv)(w,{class:"tasks-nav",key:s,category:a,activeCategory:p.value},null,8,["category","activeCategory"])))),128))])])])]))}});const S=(0,y.A)(P,[["__scopeId","data-v-806a5f1e"]]);var x=S,D=(0,t.pM)({__name:"TasksView",setup(a){return(a,s)=>((0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(o.A),(0,t.Lk)("main",null,[(0,t.bF)(x)]),(0,t.bF)(l.A)],64))}});const O=D;var Q=O}}]);
//# sourceMappingURL=511.d0ffe246.js.map