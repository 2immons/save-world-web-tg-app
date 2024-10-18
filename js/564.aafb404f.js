"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[564],{9113:function(t,e,s){s.r(e),s.d(e,{default:function(){return M}});var a=s(6768),l=s(3975),i=s(8449),o=s(4232),u=s(5234),r=s(4373);const n={backendURL:"http://localhost:8000"},c=(0,u.nY)("quests",{state:()=>({categories:[{id:0,title:"Social",tasks:[{title:"Task 1"},{title:"Tasks 2"}]},{id:1,title:"Network",tasks:[{title:"Task 1"},{title:"Tasks 2"}]},{id:2,title:"Test 1",tasks:[{title:"Task 1"},{title:"Tasks 2"}]},{id:3,title:"Test 2",tasks:[{title:"Task 1"},{title:"Tasks 2"},{title:"Tasks 3"}]},{id:4,title:"Test 33",tasks:[{title:"Task 23"},{title:"Tasks 21"},{title:"Tasks 33"}]}],promoTasks:[{title:"Quest Name 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."},{title:"Quest Name 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper."}]}),actions:{fetchQuests(){return this.promoTasks},async joinQuest(t){const e=await r.A.post(n.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}});var v=s(144);const k={class:"quest-item"};var p=(0,a.pM)({__name:"TaskItem",props:{quest:{}},setup(t){const e=c(),s=async t=>{try{await e.joinQuest(t)}catch(s){return void console.error(s)}};return(t,e)=>((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("h3",null,(0,o.v_)(t.quest.title),1),(0,a.Lk)("p",null,(0,o.v_)(t.quest.description),1),(0,a.Lk)("button",{onClick:e[0]||(e[0]=e=>s(t.quest))},(0,o.v_)(t.t("accept-task")),1)]))}}),d=s(1241);const m=(0,d.A)(p,[["__scopeId","data-v-7ee802b5"]]);var _=m;const y={key:0,class:"task-category__tasks"};var g=(0,a.pM)({__name:"TasksCategory",props:{activeCategory:{},category:{}},emits:["clicked"],setup(t,{emit:e}){const s=t;return(t,e)=>s.activeCategory===s.category.id?((0,a.uX)(),(0,a.CE)("div",y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.category.tasks,((t,e)=>((0,a.uX)(),(0,a.Wv)(_,{class:"task-category__task",key:e,quest:t},null,8,["quest"])))),128))])):(0,a.Q3)("",!0)}});const C=(0,d.A)(g,[["__scopeId","data-v-142d42b4"]]);var L=C;const T={class:"quests"},q={class:"container"},h={class:"quests-content"},E={key:0,class:"promo-tasks-wrapper no-scrollbar"},f={class:"promo-tasks"},w={key:1},X={class:"regular-tasks"},b={class:"nav-wrapper"},Q={class:"nav no-scrollbar"},K=["onClick"],F={key:0,class:"nav-overlay nav-overlay--left"},I={key:1,class:"nav-overlay nav-overlay--right"};var R=(0,a.pM)({__name:"TasksSection",setup(t){const e=(0,v.KR)(!0),s=(0,v.KR)(!1),l=t=>{const a=t.target;e.value=0===a.scrollLeft,s.value=a.scrollLeft+a.offsetWidth>=a.scrollWidth};(0,a.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",l)}));const i=(0,v.KR)(10),u=(0,v.KR)(!1),r=(0,v.KR)(!1),n=c(),k=(0,a.EW)((()=>n.promoTasks)),p=(0,v.KR)(0),d=(0,a.EW)((()=>n.categories)),m=t=>{p.value=t},y=t=>t===p.value?"category-title--active":"category-title";return(t,l)=>((0,a.uX)(),(0,a.CE)("section",T,[(0,a.Lk)("div",q,[(0,a.Lk)("div",h,[(0,a.Lk)("h2",null,[(0,a.eW)((0,o.v_)(t.t("tasks"))+" ",1),(0,a.Lk)("span",null,(0,o.v_)(i.value),1)]),u.value?((0,a.uX)(),(0,a.CE)("div",E,[(0,a.Lk)("div",f,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.value,((t,e)=>((0,a.uX)(),(0,a.Wv)(_,{key:e,quest:t},null,8,["quest"])))),128))])])):(0,a.Q3)("",!0),r.value?((0,a.uX)(),(0,a.CE)("h3",w,(0,o.v_)(t.t("weekly")),1)):(0,a.Q3)("",!0),(0,a.Lk)("div",X,[(0,a.Lk)("div",b,[(0,a.Lk)("div",Q,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.value,((t,e)=>((0,a.uX)(),(0,a.CE)("button",{key:e,class:(0,o.C4)(y(e)),onClick:t=>m(e)},(0,o.v_)(t.title),11,K)))),128))]),e.value?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",F)),s.value?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",I))]),l[0]||(l[0]=(0,a.Lk)("hr",null,null,-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.value,((t,e)=>((0,a.uX)(),(0,a.Wv)(L,{class:"tasks-nav",key:e,category:t,activeCategory:p.value},null,8,["category","activeCategory"])))),128))])])])]))}});const W=(0,d.A)(R,[["__scopeId","data-v-7532d997"]]);var A=W,N=(0,a.pM)({__name:"TasksView",setup(t){return(t,e)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(l.A),(0,a.Lk)("main",null,[(0,a.bF)(A)]),(0,a.bF)(i.A)],64))}});const D=N;var M=D}}]);
//# sourceMappingURL=564.aafb404f.js.map