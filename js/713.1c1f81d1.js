"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[713],{7197:function(t,a,e){e.d(a,{L:function(){return l}});e(4114);var s=e(5234),r=e(4373),i=e(5903),o=e(5628);const n={groups:[{name:"Group 1",description:"Description for Group 1",is_active:!0,tasks:[{url:"https://example.com/task1",name:"string",description:"string",reward:100,code_required:!1,id:1,category:"Category 1",social:"Social 1",is_done:!1}]}],solo_tasks:[{url:"https://example.com/solo_task1",name:"string",description:"string 3",reward:50,code_required:!1,id:2,category:"Category 2",social:"Social 2",is_done:!1},{url:"https://example.com/solo_task1",name:"string",description:"string 1",reward:50,code_required:!1,id:1,category:"Category 2",social:"Social 2",is_done:!1},{url:"https://example.com/solo_task2",name:"string",description:"string 2",reward:75,code_required:!0,id:3,category:"Category 3",social:"Social 3",is_done:!0}],tasks:[{url:"https://example.com/task2",reward:75,code_required:!0,id:3,category:"Category 3",social:"Social 3",is_done:!0}]};function c(t){const a={};return t.forEach((t=>{const e=t.category||"Uncategorized";a[e]||(a[e]=[]),a[e].push(t)})),Object.keys(a).map(((t,e)=>({category:t,index:e,tasks:a[t]})))}const l=(0,s.nY)("tasks",{state:()=>({categories:c(n.solo_tasks),soloTasks:n.solo_tasks,groups:n.groups}),actions:{async fetchTasks(){try{const t=await r.A.get(`${i.$.backendURL}/api/v1/tasks`,{withCredentials:!0,headers:{"X-CSRF-Token":(0,o.Q)()}});(0,o.B)(t),this.categories=c(t.data.solo_tasks),this.soloTasks=t.data.solo_tasks}catch(t){throw console.error("Ошибка при получении заданий:",t),new Error("Server error when getting tasks list")}}},getters:{}})},1241:function(t,a){a.A=(t,a)=>{const e=t.__vccOpts||t;for(const[s,r]of a)e[s]=r;return e}},6311:function(t,a,e){e.d(a,{A:function(){return B}});var s=e(6768),r=e(4232),i=e.p+"img/home.57a09072.svg",o=e.p+"img/tasks.0c2a5f02.svg",n=e.p+"img/mining.43e8cd0a.svg",c=e.p+"img/karma.0e9901cf.svg",l=e.p+"img/frens.48f51b71.svg",u=e(144),k=e(2225);const d={key:0},v={class:"container"},g={class:"footer-content"},p={key:0,src:i,alt:""},m={key:1,class:"active-nav-item"},_={key:0,src:o,alt:""},f={key:1,class:"active-nav-item"},h={key:0,src:n,alt:""},y={key:1,class:"active-nav-item"},C={key:0,src:c,alt:""},L={key:1,class:"active-nav-item"},b={key:0,src:l,alt:""},E={key:1,class:"active-nav-item"};var w=(0,s.pM)({__name:"TheFooter",setup(t){const a=(0,u.KR)(!0);return(0,s.sV)((()=>{k.B.on("toggleFooterVisibility",(t=>{a.value=t}))})),(0,s.hi)((()=>{k.B.off("toggleFooterVisibility")})),(t,e)=>{const u=(0,s.g2)("router-link");return a.value?((0,s.uX)(),(0,s.CE)("footer",d,[(0,s.Lk)("div",v,[(0,s.Lk)("nav",g,[(0,s.bF)(u,{to:"/",class:(0,r.C4)({"ac-nav-item":"/"===t.$route.path,"nav-item":"/"!==t.$route.path})},{default:(0,s.k6)((()=>["/"!==t.$route.path?((0,s.uX)(),(0,s.CE)("img",p)):(0,s.Q3)("",!0),"/"===t.$route.path?((0,s.uX)(),(0,s.CE)("div",m,[e[0]||(e[0]=(0,s.Lk)("img",{src:i,alt:""},null,-1)),(0,s.Lk)("p",null,(0,r.v_)(t.t("home")),1)])):(0,s.Q3)("",!0)])),_:1},8,["class"]),(0,s.bF)(u,{to:"/tasks",class:(0,r.C4)({"ac-nav-item":"/tasks"===t.$route.path,"nav-item":"/tasks"!==t.$route.path})},{default:(0,s.k6)((()=>["/tasks"!==t.$route.path?((0,s.uX)(),(0,s.CE)("img",_)):(0,s.Q3)("",!0),"/tasks"===t.$route.path?((0,s.uX)(),(0,s.CE)("div",f,[e[1]||(e[1]=(0,s.Lk)("img",{src:o,alt:""},null,-1)),(0,s.Lk)("p",null,(0,r.v_)(t.t("tasks")),1)])):(0,s.Q3)("",!0)])),_:1},8,["class"]),(0,s.bF)(u,{to:"/mining",class:(0,r.C4)({"ac-nav-item":"/mining"===t.$route.path,"nav-item":"/mining"!==t.$route.path})},{default:(0,s.k6)((()=>["/mining"!==t.$route.path?((0,s.uX)(),(0,s.CE)("img",h)):(0,s.Q3)("",!0),"/mining"===t.$route.path?((0,s.uX)(),(0,s.CE)("div",y,[e[2]||(e[2]=(0,s.Lk)("img",{src:n,alt:""},null,-1)),(0,s.Lk)("p",null,(0,r.v_)(t.t("mining")),1)])):(0,s.Q3)("",!0)])),_:1},8,["class"]),(0,s.bF)(u,{to:"/karma",class:(0,r.C4)({"ac-nav-item":"/karma"===t.$route.path,"nav-item":"/karma"!==t.$route.path})},{default:(0,s.k6)((()=>["/karma"!==t.$route.path?((0,s.uX)(),(0,s.CE)("img",C)):(0,s.Q3)("",!0),"/karma"===t.$route.path?((0,s.uX)(),(0,s.CE)("div",L,[e[3]||(e[3]=(0,s.Lk)("img",{src:c,alt:""},null,-1)),(0,s.Lk)("p",null,(0,r.v_)(t.t("karma")),1)])):(0,s.Q3)("",!0)])),_:1},8,["class"]),(0,s.bF)(u,{to:"/friends",class:(0,r.C4)({"ac-nav-item":"/friends"===t.$route.path,"nav-item":"/friends"!==t.$route.path})},{default:(0,s.k6)((()=>["/friends"!==t.$route.path?((0,s.uX)(),(0,s.CE)("img",b)):(0,s.Q3)("",!0),"/friends"===t.$route.path?((0,s.uX)(),(0,s.CE)("div",E,[e[4]||(e[4]=(0,s.Lk)("img",{src:l,alt:""},null,-1)),(0,s.Lk)("p",null,(0,r.v_)(t.t("frens")),1)])):(0,s.Q3)("",!0)])),_:1},8,["class"])])])])):(0,s.Q3)("",!0)}}}),$=e(1241);const X=(0,$.A)(w,[["__scopeId","data-v-c73e5768"]]);var B=X},193:function(t,a,e){e.d(a,{A:function(){return h}});var s=e(6768),r=e(4232),i=e.p+"img/back-btn.c27f779a.svg",o=e.p+"img/settings.3acc1d2e.svg",n=e(144),c=e(2225),l=e(2756),u=e(5931);const k={class:"container"},d={class:"header-content"},v={class:"user"},g={class:"user-wrapper"},p=["src"];var m={__name:"TheHeader",setup(t){const{t:a,locale:e}=(0,u.s9)(),m=(0,n.KR)(!1),_=(0,n.KR)(!1),f=(0,s.EW)((()=>(0,l.v)().userData)),h=(0,n.KR)(""),y=(0,s.EW)((()=>(0,l.v)().telegramWebApp.isFullscreen));(0,s.wB)(y,(t=>{h.value=t?"header-margin-calc":"header-margin-default"}),{immediate:!0}),(0,s.sV)((()=>{c.B.on("toggleHeaderBackBtnVisibility",(t=>{m.value=t})),c.B.on("disableSettingButton",(t=>{_.value=t}))})),(0,s.hi)((()=>{c.B.off("toggleHeaderBackBtnVisibility"),c.B.off("toggleSettingsButton")}));const C=()=>{c.B.emit("headerBackBtnPressed")};return(t,a)=>{const e=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",{class:(0,r.C4)(h.value)},[(0,s.Lk)("div",k,[(0,s.Lk)("div",d,[m.value?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"back-btn",onClick:C},a[0]||(a[0]=[(0,s.Lk)("img",{src:i,alt:""},null,-1)]))):(0,s.Q3)("",!0),(0,s.Lk)("div",v,[(0,s.Lk)("div",g,[(0,s.Lk)("img",{src:f.value.avatar,alt:"Avatar"},null,8,p),(0,s.Lk)("p",null,(0,r.v_)(f.value.username),1)])]),_.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(e,{key:1,to:"/settings",class:"settings-wrapper"},{default:(0,s.k6)((()=>a[1]||(a[1]=[(0,s.Lk)("img",{src:o,alt:"Настройки"},null,-1)]))),_:1}))])])],2)}}},_=e(1241);const f=(0,_.A)(m,[["__scopeId","data-v-213c605f"]]);var h=f},7373:function(t,a,e){e.d(a,{A:function(){return C}});var s=e(6768),r=e(4232),i=e(144),o=e.p+"img/battery.e2012877.svg",n=e(4462),c=e.p+"img/v-icon.43a9e5f5.svg",l=e(7197),u=e(5234),k=e(5931);const d={class:"task-item"},v={class:"left-side"},g={class:"info"},p={class:"right-side"},m={key:0,class:"loader-wrapper"},_={key:1,class:"claimed-wrapper"};var f=(0,s.pM)({__name:"TaskItem",props:{task:{},isPromoTask:{type:Boolean}},setup(t){const{t:a,locale:e}=(0,k.s9)(),f=(0,l.L)(),h=t,{categories:y}=(0,u.bP)(f),C=(0,s.EW)((()=>{const t=y.value.find((t=>t.tasks.some((t=>t.id===h.task.id)))),a=t?.tasks.find((t=>t.id===h.task.id));return a||h.task}));return(t,e)=>((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("div",v,[e[2]||(e[2]=(0,s.Lk)("img",{src:o,alt:""},null,-1)),(0,s.Lk)("div",g,[(0,s.Lk)("p",null,(0,r.v_)(C.value.name),1)])]),(0,s.Lk)("div",p,[e[5]||(e[5]=(0,s.Lk)("div",{class:"income"},[(0,s.Lk)("p",null,"+ 699"),(0,s.Lk)("img",{src:n,alt:""})],-1)),"VERIFYING"===C.value.status?((0,s.uX)(),(0,s.CE)("div",m,e[3]||(e[3]=[(0,s.Lk)("div",{class:"loader"},null,-1)]))):(0,s.Q3)("",!0),"CLAIMED"===C.value.status?((0,s.uX)(),(0,s.CE)("div",_,e[4]||(e[4]=[(0,s.Lk)("img",{src:c,alt:""},null,-1)]))):"NOT_STARTED"===C.value.status?((0,s.uX)(),(0,s.CE)("button",{key:2,onClick:e[0]||(e[0]=(...a)=>t.acceptTask&&t.acceptTask(...a)),class:"start-btn"},(0,r.v_)((0,i.R1)(a)("accept-task")),1)):"COMPLETED"===C.value.status?((0,s.uX)(),(0,s.CE)("button",{key:3,onClick:e[1]||(e[1]=(...a)=>t.claimReward&&t.claimReward(...a)),class:"claim-btn"},(0,r.v_)((0,i.R1)(a)("claim-task")),1)):(0,s.Q3)("",!0)])]))}}),h=e(1241);const y=(0,h.A)(f,[["__scopeId","data-v-250bb5f5"]]);var C=y},4462:function(t,a,e){t.exports=e.p+"img/green-coin.5547f652.svg"}}]);
//# sourceMappingURL=713.1c1f81d1.js.map