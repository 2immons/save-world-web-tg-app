"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[334],{7197:function(t,s,a){a.d(s,{L:function(){return o}});var e=a(5234),i=a(4373),n=a(5903),r=a(2756),l=a(5628);const o=(0,e.nY)("tasks",{state:()=>({categories:[{cat_id:0,title:"Social",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{cat_id:1,title:"Social 2",tasks:[{id:5,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:6,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:7,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:8,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:9,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{cat_id:2,title:"Social 3",tasks:[{id:10,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:11,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:12,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"}]}],promoTasks:[{promo_task_id:0,title:"Recycle",description:"Recycle 5 batteries.",promo_task_status:"NOT_STARTED",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{promo_task_id:1,title:"Animals",description:"Recycle 5 batteries.",promo_task_status:"NOT_STARTED",tasks:[{id:5,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:6,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:7,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:8,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:9,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]}]}),actions:{async fetchTasks(){try{const t=(0,r.v)().getWebAppData,s=await i.A.post(`${n.$.backendURL}/api/cards/get-karma`,t);(0,l.B)(s),this.categories=s.data.data.tasks,this.promoTasks=s.data.data.promoTasks}catch(t){throw console.error("Ошибка при получении заданий:",t),new Error("Server error when getting tasks list")}},acceptTask(t){const s=this.categories.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));a&&(a.status="VERIFYING",setTimeout((()=>{a.status="COMPLETED"}),5e3))}},acceptPromoTask(t){const s=this.promoTasks.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));if(a){a.status="VERIFYING",s.promo_task_status="IN_PROGRESS",setTimeout((()=>{a.status="COMPLETED"}),5e3);let t=!0;s.tasks.forEach((s=>{"COMPLETED"===s.status||(t=!1)})),t&&(s.promo_task_status="COMPLETED")}}},claimPromoTaskReward(t){const s=this.promoTasks.find((s=>s.promo_task_id===t.promo_task_id));s&&(t.promo_task_status="CLAIMED")},claimReward(t){const s=this.categories.find((s=>s.tasks.some((s=>s.id===t.id))));if(s){const a=s.tasks.find((s=>s.id===t.id));a&&(a.status="CLAIMED")}},async joinQuest(t){const s=await i.A.post(n.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==s.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+s.status)}},getters:{}})},1241:function(t,s){s.A=(t,s)=>{const a=t.__vccOpts||t;for(const[e,i]of s)a[e]=i;return a}},3981:function(t,s,a){a.d(s,{A:function(){return y}});var e=a(6768),i=a(4232),n=a.p+"img/home.57a09072.svg",r=a.p+"img/tasks.0c2a5f02.svg",l=a.p+"img/mining.43e8cd0a.svg",o=a.p+"img/karma.0e9901cf.svg",c=a.p+"img/frens.48f51b71.svg",u=a(144),d=a(2225);const p={key:0},k={class:"container"},v={class:"footer-content"},m={key:0,src:n,alt:""},h={key:1,class:"active-nav-item"},_={key:0,src:r,alt:""},f={key:1,class:"active-nav-item"},g={key:0,src:l,alt:""},T={key:1,class:"active-nav-item"},b={key:0,src:o,alt:""},E={key:1,class:"active-nav-item"},L={key:0,src:c,alt:""},C={key:1,class:"active-nav-item"};var R=(0,e.pM)({__name:"TheFooter",setup(t){const s=(0,u.KR)(!0);return(0,e.sV)((()=>{d.B.on("toggleFooterVisibility",(t=>{s.value=t}))})),(0,e.hi)((()=>{d.B.off("toggleFooterVisibility")})),(t,a)=>{const u=(0,e.g2)("router-link");return s.value?((0,e.uX)(),(0,e.CE)("footer",p,[(0,e.Lk)("div",k,[(0,e.Lk)("nav",v,[(0,e.bF)(u,{to:"/",class:(0,i.C4)({"ac-nav-item":"/"===t.$route.path,"nav-item":"/"!==t.$route.path})},{default:(0,e.k6)((()=>["/"!==t.$route.path?((0,e.uX)(),(0,e.CE)("img",m)):(0,e.Q3)("",!0),"/"===t.$route.path?((0,e.uX)(),(0,e.CE)("div",h,[a[0]||(a[0]=(0,e.Lk)("img",{src:n,alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)(t.t("home")),1)])):(0,e.Q3)("",!0)])),_:1},8,["class"]),(0,e.bF)(u,{to:"/tasks",class:(0,i.C4)({"ac-nav-item":"/tasks"===t.$route.path,"nav-item":"/tasks"!==t.$route.path})},{default:(0,e.k6)((()=>["/tasks"!==t.$route.path?((0,e.uX)(),(0,e.CE)("img",_)):(0,e.Q3)("",!0),"/tasks"===t.$route.path?((0,e.uX)(),(0,e.CE)("div",f,[a[1]||(a[1]=(0,e.Lk)("img",{src:r,alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)(t.t("tasks")),1)])):(0,e.Q3)("",!0)])),_:1},8,["class"]),(0,e.bF)(u,{to:"/mining",class:(0,i.C4)({"ac-nav-item":"/mining"===t.$route.path,"nav-item":"/mining"!==t.$route.path})},{default:(0,e.k6)((()=>["/mining"!==t.$route.path?((0,e.uX)(),(0,e.CE)("img",g)):(0,e.Q3)("",!0),"/mining"===t.$route.path?((0,e.uX)(),(0,e.CE)("div",T,[a[2]||(a[2]=(0,e.Lk)("img",{src:l,alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)(t.t("mining")),1)])):(0,e.Q3)("",!0)])),_:1},8,["class"]),(0,e.bF)(u,{to:"/karma",class:(0,i.C4)({"ac-nav-item":"/karma"===t.$route.path,"nav-item":"/karma"!==t.$route.path})},{default:(0,e.k6)((()=>["/karma"!==t.$route.path?((0,e.uX)(),(0,e.CE)("img",b)):(0,e.Q3)("",!0),"/karma"===t.$route.path?((0,e.uX)(),(0,e.CE)("div",E,[a[3]||(a[3]=(0,e.Lk)("img",{src:o,alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)(t.t("karma")),1)])):(0,e.Q3)("",!0)])),_:1},8,["class"]),(0,e.bF)(u,{to:"/friends",class:(0,i.C4)({"ac-nav-item":"/friends"===t.$route.path,"nav-item":"/friends"!==t.$route.path})},{default:(0,e.k6)((()=>["/friends"!==t.$route.path?((0,e.uX)(),(0,e.CE)("img",L)):(0,e.Q3)("",!0),"/friends"===t.$route.path?((0,e.uX)(),(0,e.CE)("div",C,[a[4]||(a[4]=(0,e.Lk)("img",{src:c,alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)(t.t("frens")),1)])):(0,e.Q3)("",!0)])),_:1},8,["class"])])])])):(0,e.Q3)("",!0)}}}),A=a(1241);const I=(0,A.A)(R,[["__scopeId","data-v-352a458a"]]);var y=I},1618:function(t,s,a){a.d(s,{A:function(){return f}});var e=a(6768),i=a(4232),n=a(144),r=a.p+"img/back-btn.c27f779a.svg",l=a.p+"img/settings.3acc1d2e.svg",o=a(2225),c=a(2756),u=a(5931);const d={class:"container"},p={class:"header-content"},k={class:"user"},v={class:"user-wrapper"};var m={__name:"TheHeader",setup(t){const{t:s,locale:a}=(0,u.s9)(),m=(0,n.KR)(!1),h=(0,n.KR)(!1);let _=(0,n.Kh)({username:"No username",firstName:"No firstname",lastName:"No lastName",language:"en"});(0,e.sV)((()=>{o.B.on("toggleHeaderBackBtnVisibility",(t=>{m.value=t})),o.B.on("disableSettingButton",(t=>{h.value=t}));const t=(0,c.v)().userData;t&&(_=t),a.value=_.language})),(0,e.hi)((()=>{o.B.off("toggleHeaderBackBtnVisibility"),o.B.off("toggleSettingsButton")}));const f=()=>{o.B.emit("headerBackBtnPressed")};return(t,s)=>{const a=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("header",null,[(0,e.Lk)("div",d,[(0,e.Lk)("div",p,[m.value?((0,e.uX)(),(0,e.CE)("button",{key:0,class:"back-btn",onClick:f},s[0]||(s[0]=[(0,e.Lk)("img",{src:r,alt:""},null,-1)]))):(0,e.Q3)("",!0),(0,e.Lk)("div",k,[(0,e.Lk)("div",v,[s[1]||(s[1]=(0,e.Lk)("img",{src:"#",alt:""},null,-1)),(0,e.Lk)("p",null,(0,i.v_)((0,n.R1)(_).username),1)])]),h.value?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.Wv)(a,{key:1,to:"/settings",class:"settings-wrapper"},{default:(0,e.k6)((()=>s[2]||(s[2]=[(0,e.Lk)("img",{src:l,alt:"Настройки"},null,-1)]))),_:1}))])])])}}},h=a(1241);const _=(0,h.A)(m,[["__scopeId","data-v-82c29fce"]]);var f=_},5422:function(t,s,a){a.r(s),a.d(s,{default:function(){return Y}});var e=a(6768),i=a(1618),n=a(3981),r=a(4232),l=a(7197),o=a(144),c=a.p+"img/bg-vectors.ad2c577b.svg",u=a(4462);const d={class:"stats-wrapper"};var p=(0,e.pM)({__name:"FriendsStats",setup(t){(0,l.L)();return(t,s)=>((0,e.uX)(),(0,e.CE)("div",d,s[0]||(s[0]=[(0,e.Fv)('<div class="earned-coins-box" data-v-5c1cb3b2><img src="'+c+'" alt="" class="bg-image" data-v-5c1cb3b2><div class="bg-ellepsis" data-v-5c1cb3b2></div><p data-v-5c1cb3b2>You Earned:</p><div class="coins" data-v-5c1cb3b2><p data-v-5c1cb3b2>+ 6399 <img src="'+u+'" alt="" data-v-5c1cb3b2></p><button data-v-5c1cb3b2>Claim</button></div></div><div class="help" data-v-5c1cb3b2><p class="info" data-v-5c1cb3b2>?</p><p data-v-5c1cb3b2> Lorem ipsum dolor sit amet consectetur. Aliquam laoreet non pulvinar arcu pharetra cursus gravida nulla </p></div>',2)])))}}),k=a(1241);const v=(0,k.A)(p,[["__scopeId","data-v-5c1cb3b2"]]);var m=v,h=a(5234),_=a(4373),f=a(5903),g=a(2756),T=a(5628);const b=(0,h.nY)("friends",{state:()=>({inviteLink:"null as null | string",friends:[{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20}]}),actions:{async fetchFriends(){try{const t=(0,g.v)().getWebAppData,s=await _.A.post(`${f.$.backendURL}/api/cards/get-karma`,t);(0,T.B)(s),this.friends=s.data.data.friends}catch(t){throw console.error("Ошибка при получении друзей:",t),new Error("Server error when getting friends list")}},async ensureInviteLink(){return this.inviteLink},async requestInviteLink(){const t=(0,g.v)().getWebAppData,s=await _.A.post(`${f.$.backendURL}/api/request-invite-link`,t);return(0,T.B)(s),s.data.data.inviteLink}},getters:{}}),E={class:"friend"},L={class:"info"},C={class:"name"},R={class:"boost"},A={class:"total"};var I=(0,e.pM)({__name:"FriendItem",props:{friend:{}},setup(t){b();return(t,s)=>((0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",E,[s[2]||(s[2]=(0,e.Lk)("div",{class:"photo"},null,-1)),(0,e.Lk)("div",L,[(0,e.Lk)("p",C,(0,r.v_)(t.friend.name),1),(0,e.Lk)("p",R,[s[0]||(s[0]=(0,e.Lk)("img",{src:u,alt:""},null,-1)),(0,e.eW)(" + "+(0,r.v_)(t.friend.boost),1)])]),(0,e.Lk)("div",A,[(0,e.Lk)("p",null,[(0,e.eW)(" + "+(0,r.v_)(t.friend.total)+" ",1),s[1]||(s[1]=(0,e.Lk)("img",{src:u,alt:""},null,-1))])])]),s[3]||(s[3]=(0,e.Lk)("hr",null,null,-1))],64))}});const y=(0,k.A)(I,[["__scopeId","data-v-010502ff"]]);var F=y,w=a(2225);const D={class:"friends-list"},$={class:"list"};var N=(0,e.pM)({__name:"FriendsList",setup(t){const s=b(),a=(0,e.EW)((()=>s.friends)),i=(0,o.KR)(),n=async()=>{try{i.value=await s.ensureInviteLink(),await navigator.clipboard.writeText(i.value);const t=(0,g.v)();t.showQR("Ссылка: "+i.value+" скопирована в буфер обмена!")}catch(t){w.B.emit("showErrorPopup",t.message)}};return(t,s)=>((0,e.uX)(),(0,e.CE)("div",D,[(0,e.Lk)("div",{class:"list-header"},[s[0]||(s[0]=(0,e.Lk)("p",null,"6 Friends",-1)),(0,e.Lk)("button",{onClick:n},"Invite +")]),(0,e.Lk)("div",$,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.value,((t,s)=>((0,e.uX)(),(0,e.Wv)(F,{key:s,friend:t},null,8,["friend"])))),128))])]))}});const M=(0,k.A)(N,[["__scopeId","data-v-8674c4f0"]]);var S=M;const O={class:"quests"},X={class:"container"},B={class:"quests-content"};var K=(0,e.pM)({__name:"FriendsSection",setup(t){(0,o.KR)();const s=(0,o.KR)(!0),a=(0,o.KR)(!1),i=t=>{const e=t.target;s.value=0===e.scrollLeft,a.value=e.scrollLeft+e.offsetWidth>=e.scrollWidth};(0,e.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",i)}));(0,o.KR)(10),(0,o.KR)(!1),(0,o.KR)(!1);const n=(0,l.L)();(0,e.EW)((()=>n.promoTasks)),(0,o.KR)(0),(0,e.EW)((()=>n.categories));return(t,s)=>((0,e.uX)(),(0,e.CE)("section",O,[(0,e.Lk)("div",X,[(0,e.Lk)("div",B,[(0,e.Lk)("h2",null,(0,r.v_)(t.t("invite-friends")),1),(0,e.bF)(m),(0,e.bF)(S)])])]))}});const Q=(0,k.A)(K,[["__scopeId","data-v-15ee99c8"]]);var V=Q,P=(0,e.pM)({__name:"FriendsView",setup(t){return(t,s)=>((0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(i.A),(0,e.Lk)("main",null,[(0,e.bF)(V)]),(0,e.bF)(n.A)],64))}});const W=P;var Y=W},4462:function(t,s,a){t.exports=a.p+"img/green-coin.5547f652.svg"}}]);
//# sourceMappingURL=334.08d540fd.js.map