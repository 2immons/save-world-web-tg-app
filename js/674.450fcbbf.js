"use strict";(self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[]).push([[674],{7197:function(t,e,a){a.d(e,{L:function(){return l}});var r=a(5234),n=a(4373),s=a(5903),i=a(2756),o=a(5628);const l=(0,r.nY)("tasks",{state:()=>({categories:[{cat_id:0,title:"Social",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{cat_id:1,title:"Social 2",tasks:[{id:5,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:6,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:7,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:8,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:9,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{cat_id:2,title:"Social 3",tasks:[{id:10,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:11,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:12,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"}]}],promoTasks:[{promo_task_id:0,title:"Recycle",description:"Recycle 5 batteries.",promo_task_status:"NOT_STARTED",tasks:[{id:0,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:1,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:2,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:3,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:4,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]},{promo_task_id:1,title:"Animals",description:"Recycle 5 batteries.",promo_task_status:"NOT_STARTED",tasks:[{id:5,title:"Task 1",url:"https://vk.com/al_feed.php",status:"VERIFYING"},{id:6,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"CLAIMED"},{id:7,title:"Task 1",url:"https://vk.com/al_feed.php",status:"COMPLETED"},{id:8,title:"Tasks 2",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"},{id:9,title:"Tasks 3",url:"https://vk.com/al_feed.php",status:"NOT_STARTED"}]}]}),actions:{async fetchTasks(){try{const t=(0,i.v)().getWebAppData,e=await n.A.post(`${s.$.backendURL}/api/cards/get-karma`,t);(0,o.B)(e),this.categories=e.data.data.tasks,this.promoTasks=e.data.data.promoTasks}catch(t){throw console.error("Ошибка при получении заданий:",t),new Error("Server error when getting tasks list")}},acceptTask(t){const e=this.categories.find((e=>e.tasks.some((e=>e.id===t.id))));if(e){const a=e.tasks.find((e=>e.id===t.id));a&&(a.status="VERIFYING",setTimeout((()=>{a.status="COMPLETED"}),5e3))}},acceptPromoTask(t){const e=this.promoTasks.find((e=>e.tasks.some((e=>e.id===t.id))));if(e){const a=e.tasks.find((e=>e.id===t.id));if(a){a.status="VERIFYING",e.promo_task_status="IN_PROGRESS",setTimeout((()=>{a.status="COMPLETED"}),5e3);let t=!0;e.tasks.forEach((e=>{"COMPLETED"===e.status||(t=!1)})),t&&(e.promo_task_status="COMPLETED")}}},claimPromoTaskReward(t){const e=this.promoTasks.find((e=>e.promo_task_id===t.promo_task_id));e&&(t.promo_task_status="CLAIMED")},claimReward(t){const e=this.categories.find((e=>e.tasks.some((e=>e.id===t.id))));if(e){const a=e.tasks.find((e=>e.id===t.id));a&&(a.status="CLAIMED")}},async joinQuest(t){const e=await n.A.post(s.$.backendURL+"/orders/join-quest",{quest:t,withCredentials:!0});if(201!==e.status)throw new Error("Не удалось создать обращение. Неправильный статус ответа от сервера: "+e.status)}},getters:{}})},1241:function(t,e){e.A=(t,e)=>{const a=t.__vccOpts||t;for(const[r,n]of e)a[r]=n;return a}},3981:function(t,e,a){a.d(e,{A:function(){return T}});var r=a(6768),n=a(4232),s=a.p+"img/home.57a09072.svg",i=a.p+"img/tasks.0c2a5f02.svg",o=a.p+"img/mining.43e8cd0a.svg",l=a.p+"img/karma.0e9901cf.svg",u=a.p+"img/frens.48f51b71.svg",c=a(144),d=a(2225);const h={key:0},f={class:"container"},v={class:"footer-content"},p={key:0,src:s,alt:""},g={key:1,class:"active-nav-item"},m={key:0,src:i,alt:""},k={key:1,class:"active-nav-item"},E={key:0,src:o,alt:""},_={key:1,class:"active-nav-item"},C={key:0,src:l,alt:""},w={key:1,class:"active-nav-item"},R={key:0,src:u,alt:""},y={key:1,class:"active-nav-item"};var L=(0,r.pM)({__name:"TheFooter",setup(t){const e=(0,c.KR)(!0);return(0,r.sV)((()=>{d.B.on("toggleFooterVisibility",(t=>{e.value=t}))})),(0,r.hi)((()=>{d.B.off("toggleFooterVisibility")})),(t,a)=>{const c=(0,r.g2)("router-link");return e.value?((0,r.uX)(),(0,r.CE)("footer",h,[(0,r.Lk)("div",f,[(0,r.Lk)("nav",v,[(0,r.bF)(c,{to:"/",class:(0,n.C4)({"ac-nav-item":"/"===t.$route.path,"nav-item":"/"!==t.$route.path})},{default:(0,r.k6)((()=>["/"!==t.$route.path?((0,r.uX)(),(0,r.CE)("img",p)):(0,r.Q3)("",!0),"/"===t.$route.path?((0,r.uX)(),(0,r.CE)("div",g,[a[0]||(a[0]=(0,r.Lk)("img",{src:s,alt:""},null,-1)),(0,r.Lk)("p",null,(0,n.v_)(t.t("home")),1)])):(0,r.Q3)("",!0)])),_:1},8,["class"]),(0,r.bF)(c,{to:"/tasks",class:(0,n.C4)({"ac-nav-item":"/tasks"===t.$route.path,"nav-item":"/tasks"!==t.$route.path})},{default:(0,r.k6)((()=>["/tasks"!==t.$route.path?((0,r.uX)(),(0,r.CE)("img",m)):(0,r.Q3)("",!0),"/tasks"===t.$route.path?((0,r.uX)(),(0,r.CE)("div",k,[a[1]||(a[1]=(0,r.Lk)("img",{src:i,alt:""},null,-1)),(0,r.Lk)("p",null,(0,n.v_)(t.t("tasks")),1)])):(0,r.Q3)("",!0)])),_:1},8,["class"]),(0,r.bF)(c,{to:"/mining",class:(0,n.C4)({"ac-nav-item":"/mining"===t.$route.path,"nav-item":"/mining"!==t.$route.path})},{default:(0,r.k6)((()=>["/mining"!==t.$route.path?((0,r.uX)(),(0,r.CE)("img",E)):(0,r.Q3)("",!0),"/mining"===t.$route.path?((0,r.uX)(),(0,r.CE)("div",_,[a[2]||(a[2]=(0,r.Lk)("img",{src:o,alt:""},null,-1)),(0,r.Lk)("p",null,(0,n.v_)(t.t("mining")),1)])):(0,r.Q3)("",!0)])),_:1},8,["class"]),(0,r.bF)(c,{to:"/karma",class:(0,n.C4)({"ac-nav-item":"/karma"===t.$route.path,"nav-item":"/karma"!==t.$route.path})},{default:(0,r.k6)((()=>["/karma"!==t.$route.path?((0,r.uX)(),(0,r.CE)("img",C)):(0,r.Q3)("",!0),"/karma"===t.$route.path?((0,r.uX)(),(0,r.CE)("div",w,[a[3]||(a[3]=(0,r.Lk)("img",{src:l,alt:""},null,-1)),(0,r.Lk)("p",null,(0,n.v_)(t.t("karma")),1)])):(0,r.Q3)("",!0)])),_:1},8,["class"]),(0,r.bF)(c,{to:"/friends",class:(0,n.C4)({"ac-nav-item":"/friends"===t.$route.path,"nav-item":"/friends"!==t.$route.path})},{default:(0,r.k6)((()=>["/friends"!==t.$route.path?((0,r.uX)(),(0,r.CE)("img",R)):(0,r.Q3)("",!0),"/friends"===t.$route.path?((0,r.uX)(),(0,r.CE)("div",y,[a[4]||(a[4]=(0,r.Lk)("img",{src:u,alt:""},null,-1)),(0,r.Lk)("p",null,(0,n.v_)(t.t("frens")),1)])):(0,r.Q3)("",!0)])),_:1},8,["class"])])])])):(0,r.Q3)("",!0)}}}),M=a(1241);const b=(0,M.A)(L,[["__scopeId","data-v-352a458a"]]);var T=b},8730:function(t,e,a){a.d(e,{A:function(){return E}});var r=a(6768),n=a(4232),s=a.p+"img/back-btn.c27f779a.svg",i=a.p+"img/settings.3acc1d2e.svg",o=a(144),l=a(2225),u=a(2756),c=a(5931);const d={class:"container"},h={class:"header-content"},f={class:"user"},v={class:"user-wrapper"},p=["src"];var g={__name:"TheHeader",setup(t){const{t:e,locale:a}=(0,c.s9)(),g=(0,o.KR)(!1),m=(0,o.KR)(!1),k=(0,r.EW)((()=>(0,u.v)().userData)),E=(0,o.KR)(""),_=(0,r.EW)((()=>(0,u.v)().telegramWebApp.isFullscreen));(0,r.wB)(_,(t=>{E.value=t?"header-margin-calc":"header-margin-default"}),{immediate:!0}),(0,r.sV)((()=>{l.B.on("toggleHeaderBackBtnVisibility",(t=>{g.value=t})),l.B.on("disableSettingButton",(t=>{m.value=t})),a.value=k.value.language})),(0,r.hi)((()=>{l.B.off("toggleHeaderBackBtnVisibility"),l.B.off("toggleSettingsButton")}));const C=()=>{l.B.emit("headerBackBtnPressed")};return(t,e)=>{const a=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",{class:(0,n.C4)(E.value)},[(0,r.Lk)("div",d,[(0,r.Lk)("div",h,[g.value?((0,r.uX)(),(0,r.CE)("button",{key:0,class:"back-btn",onClick:C},e[0]||(e[0]=[(0,r.Lk)("img",{src:s,alt:""},null,-1)]))):(0,r.Q3)("",!0),(0,r.Lk)("div",f,[(0,r.Lk)("div",v,[(0,r.Lk)("img",{src:k.value.avatar,alt:"Avatar"},null,8,p),(0,r.Lk)("p",null,(0,n.v_)(k.value.username),1)])]),m.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(a,{key:1,to:"/settings",class:"settings-wrapper"},{default:(0,r.k6)((()=>e[1]||(e[1]=[(0,r.Lk)("img",{src:i,alt:"Настройки"},null,-1)]))),_:1}))])])],2)}}},m=a(1241);const k=(0,m.A)(g,[["__scopeId","data-v-2bf45697"]]);var E=k},506:function(t,e,a){a.r(e),a.d(e,{default:function(){return gt}});var r=a(6768),n=a(8730),s=a(3981),i=a(4232),o=a(7197),l=a(144),u=a.p+"img/bg-vectors.ad2c577b.svg",c=a(4462);const d={class:"stats-wrapper"};var h=(0,r.pM)({__name:"FriendsStats",setup(t){(0,o.L)();return(t,e)=>((0,r.uX)(),(0,r.CE)("div",d,e[0]||(e[0]=[(0,r.Fv)('<div class="earned-coins-box" data-v-5c1cb3b2><img src="'+u+'" alt="" class="bg-image" data-v-5c1cb3b2><div class="bg-ellepsis" data-v-5c1cb3b2></div><p data-v-5c1cb3b2>You Earned:</p><div class="coins" data-v-5c1cb3b2><p data-v-5c1cb3b2>+ 6399 <img src="'+c+'" alt="" data-v-5c1cb3b2></p><button data-v-5c1cb3b2>Claim</button></div></div><div class="help" data-v-5c1cb3b2><p class="info" data-v-5c1cb3b2>?</p><p data-v-5c1cb3b2> Lorem ipsum dolor sit amet consectetur. Aliquam laoreet non pulvinar arcu pharetra cursus gravida nulla </p></div>',2)])))}}),f=a(1241);const v=(0,f.A)(h,[["__scopeId","data-v-5c1cb3b2"]]);var p=v,g=a(5130),m=a(5234),k=a(4373),E=a(5903),_=a(2756),C=a(5628);const w=(0,m.nY)("friends",{state:()=>({referalLink:null,friends:[{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20},{name:"Имя",boost:10,total:20}]}),actions:{async fetchFriends(){try{const t=(0,_.v)().getWebAppData,e=await k.A.post(`${E.$.backendURL}/api/cards/get-karma`,t);(0,C.B)(e),this.friends=e.data.data.friends}catch(t){throw console.error("Ошибка при получении друзей:",t),new Error("Server error when getting friends list")}},async ensureReferalLink(){if(!this.referalLink)try{this.referalLink=await this.requestReferalLink()}catch(t){throw console.error("Ошибка получения реферальных данных:",t),new Error("Error when getting referal link")}return this.referalLink},async requestReferalLink(){const t=(0,_.v)().getWebAppData,e=await k.A.post(`${E.$.backendURL}/api/request-invite-link`,t);if((0,C.B)(e),null===e.data.data.referalLink)throw new Error("Реферальная ссылка полученная с сервера пустая");return e.data.data.referalLink}},getters:{}}),R={class:"friend"},y={class:"info"},L={class:"name"},M={class:"boost"},b={class:"total"};var T=(0,r.pM)({__name:"FriendItem",props:{friend:{}},setup(t){w();return(t,e)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",R,[e[2]||(e[2]=(0,r.Lk)("div",{class:"photo"},null,-1)),(0,r.Lk)("div",y,[(0,r.Lk)("p",L,(0,i.v_)(t.friend.name),1),(0,r.Lk)("p",M,[e[0]||(e[0]=(0,r.Lk)("img",{src:c,alt:""},null,-1)),(0,r.eW)(" + "+(0,i.v_)(t.friend.boost),1)])]),(0,r.Lk)("div",b,[(0,r.Lk)("p",null,[(0,r.eW)(" + "+(0,i.v_)(t.friend.total)+" ",1),e[1]||(e[1]=(0,r.Lk)("img",{src:c,alt:""},null,-1))])])]),e[3]||(e[3]=(0,r.Lk)("hr",null,null,-1))],64))}});const A=(0,f.A)(T,[["__scopeId","data-v-010502ff"]]);var S,N=A,I=a(5931),P=(a(4114),function(){return P=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},P.apply(this,arguments)});"function"===typeof SuppressedError&&SuppressedError,function(t){var e=function(){function e(t,a,r,s){if(this.version=t,this.errorCorrectionLevel=a,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=4*t+17;for(var i=[],o=0;o<this.size;o++)i.push(!1);for(o=0;o<this.size;o++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var l=this.addEccAndInterleave(r);if(this.drawCodewords(l),-1==s){var u=1e9;for(o=0;o<8;o++){this.applyMask(o),this.drawFormatBits(o);var c=this.getPenaltyScore();c<u&&(s=o,u=c),this.applyMask(o)}}n(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}return e.encodeText=function(a,r){var n=t.QrSegment.makeSegments(a);return e.encodeSegments(n,r)},e.encodeBinary=function(a,r){var n=t.QrSegment.makeBytes(a);return e.encodeSegments([n],r)},e.encodeSegments=function(t,r,i,o,l,u){if(void 0===i&&(i=1),void 0===o&&(o=40),void 0===l&&(l=-1),void 0===u&&(u=!0),!(e.MIN_VERSION<=i&&i<=o&&o<=e.MAX_VERSION)||l<-1||l>7)throw new RangeError("Invalid value");var c,d;for(c=i;;c++){var h=8*e.getNumDataCodewords(c,r),f=s.getTotalBits(t,c);if(f<=h){d=f;break}if(c>=o)throw new RangeError("Data too long")}for(var v=0,p=[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH];v<p.length;v++){var g=p[v];u&&d<=8*e.getNumDataCodewords(c,g)&&(r=g)}for(var m=[],k=0,E=t;k<E.length;k++){var _=E[k];a(_.mode.modeBits,4,m),a(_.numChars,_.mode.numCharCountBits(c),m);for(var C=0,w=_.getData();C<w.length;C++){var R=w[C];m.push(R)}}n(m.length==d);var y=8*e.getNumDataCodewords(c,r);n(m.length<=y),a(0,Math.min(4,y-m.length),m),a(0,(8-m.length%8)%8,m),n(m.length%8==0);for(var L=236;m.length<y;L^=253)a(L,8,m);var M=[];while(8*M.length<m.length)M.push(0);return m.forEach((function(t,e){return M[e>>>3]|=t<<7-(7&e)})),new e(c,r,M,l)},e.prototype.getModule=function(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]},e.prototype.getModules=function(){return this.modules},e.prototype.drawFunctionPatterns=function(){for(var t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);var e=this.getAlignmentPatternPositions(),a=e.length;for(t=0;t<a;t++)for(var r=0;r<a;r++)0==t&&0==r||0==t&&r==a-1||t==a-1&&0==r||this.drawAlignmentPattern(e[t],e[r]);this.drawFormatBits(0),this.drawVersion()},e.prototype.drawFormatBits=function(t){for(var e=this.errorCorrectionLevel.formatBits<<3|t,a=e,s=0;s<10;s++)a=a<<1^1335*(a>>>9);var i=21522^(e<<10|a);n(i>>>15==0);for(s=0;s<=5;s++)this.setFunctionModule(8,s,r(i,s));this.setFunctionModule(8,7,r(i,6)),this.setFunctionModule(8,8,r(i,7)),this.setFunctionModule(7,8,r(i,8));for(s=9;s<15;s++)this.setFunctionModule(14-s,8,r(i,s));for(s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,r(i,s));for(s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,r(i,s));this.setFunctionModule(8,this.size-8,!0)},e.prototype.drawVersion=function(){if(!(this.version<7)){for(var t=this.version,e=0;e<12;e++)t=t<<1^7973*(t>>>11);var a=this.version<<12|t;n(a>>>18==0);for(e=0;e<18;e++){var s=r(a,e),i=this.size-11+e%3,o=Math.floor(e/3);this.setFunctionModule(i,o,s),this.setFunctionModule(o,i,s)}}},e.prototype.drawFinderPattern=function(t,e){for(var a=-4;a<=4;a++)for(var r=-4;r<=4;r++){var n=Math.max(Math.abs(r),Math.abs(a)),s=t+r,i=e+a;0<=s&&s<this.size&&0<=i&&i<this.size&&this.setFunctionModule(s,i,2!=n&&4!=n)}},e.prototype.drawAlignmentPattern=function(t,e){for(var a=-2;a<=2;a++)for(var r=-2;r<=2;r++)this.setFunctionModule(t+r,e+a,1!=Math.max(Math.abs(r),Math.abs(a)))},e.prototype.setFunctionModule=function(t,e,a){this.modules[e][t]=a,this.isFunction[e][t]=!0},e.prototype.addEccAndInterleave=function(t){var a=this.version,r=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(a,r))throw new RangeError("Invalid argument");for(var s=e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][a],i=e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][a],o=Math.floor(e.getNumRawDataModules(a)/8),l=s-o%s,u=Math.floor(o/s),c=[],d=e.reedSolomonComputeDivisor(i),h=0,f=0;h<s;h++){var v=t.slice(f,f+u-i+(h<l?0:1));f+=v.length;var p=e.reedSolomonComputeRemainder(v,d);h<l&&v.push(0),c.push(v.concat(p))}var g=[],m=function(t){c.forEach((function(e,a){(t!=u-i||a>=l)&&g.push(e[t])}))};for(h=0;h<c[0].length;h++)m(h);return n(g.length==o),g},e.prototype.drawCodewords=function(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var a=0,s=this.size-1;s>=1;s-=2){6==s&&(s=5);for(var i=0;i<this.size;i++)for(var o=0;o<2;o++){var l=s-o,u=0==(s+1&2),c=u?this.size-1-i:i;!this.isFunction[c][l]&&a<8*t.length&&(this.modules[c][l]=r(t[a>>>3],7-(7&a)),a++)}}n(a==8*t.length)},e.prototype.applyMask=function(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(var e=0;e<this.size;e++)for(var a=0;a<this.size;a++){var r=void 0;switch(t){case 0:r=(a+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=a%3==0;break;case 3:r=(a+e)%3==0;break;case 4:r=(Math.floor(a/3)+Math.floor(e/2))%2==0;break;case 5:r=a*e%2+a*e%3==0;break;case 6:r=(a*e%2+a*e%3)%2==0;break;case 7:r=((a+e)%2+a*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][a]&&r&&(this.modules[e][a]=!this.modules[e][a])}},e.prototype.getPenaltyScore=function(){for(var t=0,a=0;a<this.size;a++){for(var r=!1,s=0,i=[0,0,0,0,0,0,0],o=0;o<this.size;o++)this.modules[a][o]==r?(s++,5==s?t+=e.PENALTY_N1:s>5&&t++):(this.finderPenaltyAddHistory(s,i),r||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),r=this.modules[a][o],s=1);t+=this.finderPenaltyTerminateAndCount(r,s,i)*e.PENALTY_N3}for(o=0;o<this.size;o++){r=!1;var l=0;for(i=[0,0,0,0,0,0,0],a=0;a<this.size;a++)this.modules[a][o]==r?(l++,5==l?t+=e.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,i),r||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),r=this.modules[a][o],l=1);t+=this.finderPenaltyTerminateAndCount(r,l,i)*e.PENALTY_N3}for(a=0;a<this.size-1;a++)for(o=0;o<this.size-1;o++){var u=this.modules[a][o];u==this.modules[a][o+1]&&u==this.modules[a+1][o]&&u==this.modules[a+1][o+1]&&(t+=e.PENALTY_N2)}for(var c=0,d=0,h=this.modules;d<h.length;d++){var f=h[d];c=f.reduce((function(t,e){return t+(e?1:0)}),c)}var v=this.size*this.size,p=Math.ceil(Math.abs(20*c-10*v)/v)-1;return n(0<=p&&p<=9),t+=p*e.PENALTY_N4,n(0<=t&&t<=2568888),t},e.prototype.getAlignmentPatternPositions=function(){if(1==this.version)return[];for(var t=Math.floor(this.version/7)+2,e=2*Math.floor((8*this.version+3*t+5)/(4*t-4)),a=[6],r=this.size-7;a.length<t;r-=e)a.splice(1,0,r);return a},e.getNumRawDataModules=function(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");var a=(16*t+128)*t+64;if(t>=2){var r=Math.floor(t/7)+2;a-=(25*r-10)*r-55,t>=7&&(a-=36)}return n(208<=a&&a<=29648),a},e.getNumDataCodewords=function(t,a){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[a.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][t]},e.reedSolomonComputeDivisor=function(t){if(t<1||t>255)throw new RangeError("Degree out of range");for(var a=[],r=0;r<t-1;r++)a.push(0);a.push(1);var n=1;for(r=0;r<t;r++){for(var s=0;s<a.length;s++)a[s]=e.reedSolomonMultiply(a[s],n),s+1<a.length&&(a[s]^=a[s+1]);n=e.reedSolomonMultiply(n,2)}return a},e.reedSolomonComputeRemainder=function(t,a){for(var r=a.map((function(t){return 0})),n=function(t){var n=t^r.shift();r.push(0),a.forEach((function(t,a){return r[a]^=e.reedSolomonMultiply(t,n)}))},s=0,i=t;s<i.length;s++){var o=i[s];n(o)}return r},e.reedSolomonMultiply=function(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");for(var a=0,r=7;r>=0;r--)a=a<<1^285*(a>>>7),a^=(e>>>r&1)*t;return n(a>>>8==0),a},e.prototype.finderPenaltyCountPatterns=function(t){var e=t[1];n(e<=3*this.size);var a=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(a&&t[0]>=4*e&&t[6]>=e?1:0)+(a&&t[6]>=4*e&&t[0]>=e?1:0)},e.prototype.finderPenaltyTerminateAndCount=function(t,e,a){return t&&(this.finderPenaltyAddHistory(e,a),e=0),e+=this.size,this.finderPenaltyAddHistory(e,a),this.finderPenaltyCountPatterns(a)},e.prototype.finderPenaltyAddHistory=function(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)},e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e}();function a(t,e,a){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)a.push(t>>>r&1)}function r(t,e){return 0!=(t>>>e&1)}function n(t){if(!t)throw new Error("Assertion error")}t.QrCode=e;var s=function(){function t(t,e,a){if(this.mode=t,this.numChars=e,this.bitData=a,e<0)throw new RangeError("Invalid argument");this.bitData=a.slice()}return t.makeBytes=function(e){for(var r=[],n=0,s=e;n<s.length;n++){var i=s[n];a(i,8,r)}return new t(t.Mode.BYTE,e.length,r)},t.makeNumeric=function(e){if(!t.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var r=[],n=0;n<e.length;){var s=Math.min(e.length-n,3);a(parseInt(e.substring(n,n+s),10),3*s+1,r),n+=s}return new t(t.Mode.NUMERIC,e.length,r)},t.makeAlphanumeric=function(e){if(!t.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r,n=[];for(r=0;r+2<=e.length;r+=2){var s=45*t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r));s+=t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),a(s,11,n)}return r<e.length&&a(t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,n),new t(t.Mode.ALPHANUMERIC,e.length,n)},t.makeSegments=function(e){return""==e?[]:t.isNumeric(e)?[t.makeNumeric(e)]:t.isAlphanumeric(e)?[t.makeAlphanumeric(e)]:[t.makeBytes(t.toUtf8ByteArray(e))]},t.makeEci=function(e){var r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)a(e,8,r);else if(e<16384)a(2,2,r),a(e,14,r);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");a(6,3,r),a(e,21,r)}return new t(t.Mode.ECI,0,r)},t.isNumeric=function(e){return t.NUMERIC_REGEX.test(e)},t.isAlphanumeric=function(e){return t.ALPHANUMERIC_REGEX.test(e)},t.prototype.getData=function(){return this.bitData.slice()},t.getTotalBits=function(t,e){for(var a=0,r=0,n=t;r<n.length;r++){var s=n[r],i=s.mode.numCharCountBits(e);if(s.numChars>=1<<i)return 1/0;a+=4+i+s.bitData.length}return a},t.toUtf8ByteArray=function(t){t=encodeURI(t);for(var e=[],a=0;a<t.length;a++)"%"!=t.charAt(a)?e.push(t.charCodeAt(a)):(e.push(parseInt(t.substring(a+1,a+3),16)),a+=2);return e},t.NUMERIC_REGEX=/^[0-9]*$/,t.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,t.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t}();t.QrSegment=s}(S||(S={})),function(t){(function(t){var e=function(){function t(t,e){this.ordinal=t,this.formatBits=e}return t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),t}();t.Ecc=e})(t.QrCode||(t.QrCode={}))}(S||(S={})),function(t){(function(t){var e=function(){function t(t,e){this.modeBits=t,this.numBitsCharCount=e}return t.prototype.numCharCountBits=function(t){return this.numBitsCharCount[Math.floor((t+7)/17)]},t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),t}();t.Mode=e})(t.QrSegment||(t.QrSegment={}))}(S||(S={}));var F=S,D="L",O={L:F.QrCode.Ecc.LOW,M:F.QrCode.Ecc.MEDIUM,Q:F.QrCode.Ecc.QUARTILE,H:F.QrCode.Ecc.HIGH},B=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function z(t){return t in O}function x(t,e){void 0===e&&(e=0);var a=[];return t.forEach((function(t,r){var n=null;t.forEach((function(s,i){if(!s&&null!==n)return a.push("M".concat(n+e," ").concat(r+e,"h").concat(i-n,"v1H").concat(n+e,"z")),void(n=null);if(i!==t.length-1)s&&null===n&&(n=i);else{if(!s)return;null===n?a.push("M".concat(i+e,",").concat(r+e," h1v1H").concat(i+e,"z")):a.push("M".concat(n+e,",").concat(r+e," h").concat(i+1-n,"v1H").concat(n+e,"z"))}}))})),a.join("")}function K(t,e,a,r){var n=r.width,s=r.height,i=r.x,o=r.y,l=t.length+2*a,u=Math.floor(.1*e),c=l/e,d=(n||u)*c,h=(s||u)*c,f=null==i?t.length/2-d/2:i*c,v=null==o?t.length/2-h/2:o*c,p=null;if(r.excavate){var g=Math.floor(f),m=Math.floor(v),k=Math.ceil(d+f-g),E=Math.ceil(h+v-m);p={x:g,y:m,w:k,h:E}}return{x:f,y:v,h:h,w:d,excavation:p}}function Q(t,e){return t.slice().map((function(t,a){return a<e.y||a>=e.y+e.h?t:t.map((function(t,a){return(a<e.x||a>=e.x+e.w)&&t}))}))}var V={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:D,validator:function(t){return z(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0},imageSettings:{type:Object,required:!1,default:function(){return{}}},gradient:{type:Boolean,required:!1,default:!1},gradientType:{type:String,required:!1,default:"linear",validator:function(t){return["linear","radial"].indexOf(t)>-1}},gradientStartColor:{type:String,required:!1,default:"#000"},gradientEndColor:{type:String,required:!1,default:"#fff"}},$=P(P({},V),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),H=(0,r.pM)({name:"QRCodeSvg",props:V,setup:function(t){var e,a=(0,l.KR)(0),n=(0,l.KR)(""),s=function(){var r=t.value,s=t.level,i=t.margin,o=i>>>0,l=z(s)?s:D,u=F.QrCode.encodeText(r,O[l]).getModules();if(a.value=u.length+2*o,t.imageSettings.src){var c=K(u,t.size,o,t.imageSettings);e={x:c.x+o,y:c.y+o,width:c.w,height:c.h},c.excavation&&(u=Q(u,c.excavation))}n.value=x(u,o)},i=function(){if(!t.gradient)return null;var e="linear"===t.gradientType?{x1:"0%",y1:"0%",x2:"100%",y2:"100%"}:{cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"};return(0,r.h)("linear"===t.gradientType?"linearGradient":"radialGradient",P({id:"qr-gradient"},e),[(0,r.h)("stop",{offset:"0%",style:{stopColor:t.gradientStartColor}}),(0,r.h)("stop",{offset:"100%",style:{stopColor:t.gradientEndColor}})])};return s(),(0,r.$u)(s),function(){return(0,r.h)("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(a.value," ").concat(a.value)},[(0,r.h)("defs",{},[i()]),(0,r.h)("rect",{width:"100%",height:"100%",fill:t.background}),(0,r.h)("path",{fill:t.gradient?"url(#qr-gradient)":t.foreground,d:n.value}),t.imageSettings.src&&(0,r.h)("image",P({href:t.imageSettings.src},e))])}}}),U=(0,r.pM)({name:"QRCodeCanvas",props:V,setup:function(t,e){var a=(0,l.KR)(null),n=(0,l.KR)(null),s=function(){var e=t.value,r=t.level,s=t.size,i=t.margin,o=t.background,l=t.foreground,u=t.gradient,c=t.gradientType,d=t.gradientStartColor,h=t.gradientEndColor,f=i>>>0,v=z(r)?r:D,p=a.value;if(p){var g=p.getContext("2d");if(g){var m=F.QrCode.encodeText(e,O[v]).getModules(),k=m.length+2*f,E=n.value,_={x:0,y:0,width:0,height:0},C=t.imageSettings.src&&null!=E&&0!==E.naturalWidth&&0!==E.naturalHeight;if(C){var w=K(m,t.size,f,t.imageSettings);_={x:w.x+f,y:w.y+f,width:w.w,height:w.h},w.excavation&&(m=Q(m,w.excavation))}var R=window.devicePixelRatio||1,y=s/k*R;if(p.height=p.width=s*R,g.scale(y,y),g.fillStyle=o,g.fillRect(0,0,k,k),u){var L=void 0;L="linear"===c?g.createLinearGradient(0,0,k,k):g.createRadialGradient(k/2,k/2,0,k/2,k/2,k/2),L.addColorStop(0,d),L.addColorStop(1,h),g.fillStyle=L}else g.fillStyle=l;B?g.fill(new Path2D(x(m,f))):m.forEach((function(t,e){t.forEach((function(t,a){t&&g.fillRect(a+f,e+f,1,1)}))})),C&&g.drawImage(E,_.x,_.y,_.width,_.height)}}};(0,r.sV)(s),(0,r.$u)(s);var i=e.attrs.style;return function(){return(0,r.h)(r.FK,[(0,r.h)("canvas",P(P({},e.attrs),{ref:a,style:P(P({},i),{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")})})),t.imageSettings.src&&(0,r.h)("img",{ref:n,src:t.imageSettings.src,style:{display:"none"},onLoad:s})])}}}),X=(0,r.pM)({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,a=t.value,n=t.size,s=t.margin,i=t.level,o=t.background,l=t.foreground,u=t.imageSettings,c=t.gradient,d=t.gradientType,h=t.gradientStartColor,f=t.gradientEndColor;return(0,r.h)("svg"===e?H:U,{value:a,size:n,margin:s,level:i,background:o,foreground:l,imageSettings:u,gradient:c,gradientType:d,gradientStartColor:h,gradientEndColor:f})},props:$}),W=(0,r.pM)({__name:"QrCode",props:{qrLink:{},size:{}},setup(t){const e=t,a=(0,l.KR)("H"),n=(0,l.KR)("svg"),s=(0,l.KR)("#ffffff"),i=(0,l.KR)("#000000"),o=((0,l.KR)(0),(0,l.KR)({src:"https://github.com/scopewu.png",width:50,height:50,excavate:!0})),u=(0,l.KR)(!1),c=(0,l.KR)("linear"),d=(0,l.KR)("#000000"),h=(0,l.KR)("#38bdf8");return(t,l)=>((0,r.uX)(),(0,r.Wv)(X,{value:e.qrLink,level:a.value,"render-as":n.value,background:s.value,foreground:i.value,gradient:u.value,"gradient-type":c.value,"gradient-start-color":d.value,"gradient-end-color":h.value,"image-settings":o.value,size:e.size},null,8,["value","level","render-as","background","foreground","gradient","gradient-type","gradient-start-color","gradient-end-color","image-settings","size"]))}});const Y=W;var q=Y,G=a(2225);const j={class:"container"},J={class:"buttons"},Z=["href"];var tt=(0,r.pM)({__name:"ReferalPopup",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){const{t:a,locale:n}=(0,I.s9)(),s=w(),i=e,o=()=>{i("update:modelValue",!1)},u=async()=>{await navigator.clipboard.writeText(c.value+"\n"+d.value);const t=(0,_.v)();t.showAlert("Ссылка: "+c.value+" скопирована в буфер обмена!")},c=(0,l.KR)("https://mail.google.com/mail/u/0/#inbox"),d=(0,l.KR)("Присоединяйтесь!"),h=(0,r.EW)((()=>`https://t.me/share/url?url=${encodeURIComponent(c.value)}&text=${encodeURIComponent(d.value)}`));(0,r.sV)((async()=>{await f()}));const f=async()=>{try{c.value=await s.ensureReferalLink()}catch(t){G.B.emit("showErrorPopup",t.message)}};return(t,e)=>((0,r.uX)(),(0,r.Wv)(g.eB,null,{default:(0,r.k6)((()=>[t.modelValue?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"card-popup",onClick:o},[(0,r.Lk)("div",{class:"content",onClick:e[0]||(e[0]=(0,g.D$)((()=>{}),["stop"]))},[(0,r.Lk)("div",j,[e[1]||(e[1]=(0,r.Lk)("div",{class:"popup-header"},[(0,r.Lk)("h2",null,"Пригласить друга")],-1)),(0,r.bF)(q,{size:270,"qr-link":t.link},null,8,["qr-link"]),(0,r.Lk)("div",J,[(0,r.Lk)("a",{href:h.value,target:"_blank",class:"share-button"}," Поделиться ",8,Z),(0,r.Lk)("button",{onClick:u},"Скопировать ссылку"),(0,r.Lk)("button",{onClick:o},"Закрыть")])])])])):(0,r.Q3)("",!0)])),_:1}))}});const et=(0,f.A)(tt,[["__scopeId","data-v-39bfa330"]]);var at=et;const rt={class:"friends-list"},nt={class:"list"};var st=(0,r.pM)({__name:"FriendsList",setup(t){const e=w(),a=(0,r.EW)((()=>e.friends)),n=(0,l.KR)(!1),s=()=>{n.value=!0};return(t,e)=>((0,r.uX)(),(0,r.CE)("div",rt,[(0,r.bF)(at,{onClick:e[0]||(e[0]=(0,g.D$)((()=>{}),["stop"])),modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t)},null,8,["modelValue"]),(0,r.Lk)("div",{class:"list-header"},[e[2]||(e[2]=(0,r.Lk)("p",null,"6 Friends",-1)),(0,r.Lk)("button",{onClick:s},"Invite +")]),(0,r.Lk)("div",nt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.value,((t,e)=>((0,r.uX)(),(0,r.Wv)(N,{key:e,friend:t},null,8,["friend"])))),128))])]))}});const it=(0,f.A)(st,[["__scopeId","data-v-fff23e32"]]);var ot=it;const lt={class:"quests"},ut={class:"container"},ct={class:"quests-content"};var dt=(0,r.pM)({__name:"FriendsSection",setup(t){(0,l.KR)();const e=(0,l.KR)(!0),a=(0,l.KR)(!1),n=t=>{const r=t.target;e.value=0===r.scrollLeft,a.value=r.scrollLeft+r.offsetWidth>=r.scrollWidth};(0,r.sV)((()=>{const t=document.querySelector(".nav");t&&t.addEventListener("scroll",n)}));(0,l.KR)(10),(0,l.KR)(!1),(0,l.KR)(!1);const s=(0,o.L)();(0,r.EW)((()=>s.promoTasks)),(0,l.KR)(0),(0,r.EW)((()=>s.categories));return(t,e)=>((0,r.uX)(),(0,r.CE)("section",lt,[(0,r.Lk)("div",ut,[(0,r.Lk)("div",ct,[(0,r.Lk)("h2",null,(0,i.v_)(t.t("invite-friends")),1),(0,r.bF)(p),(0,r.bF)(ot)])])]))}});const ht=(0,f.A)(dt,[["__scopeId","data-v-15ee99c8"]]);var ft=ht,vt=(0,r.pM)({__name:"FriendsView",setup(t){return(t,e)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(n.A),(0,r.Lk)("main",null,[(0,r.bF)(ft)]),(0,r.bF)(s.A)],64))}});const pt=vt;var gt=pt},4462:function(t,e,a){t.exports=a.p+"img/green-coin.5547f652.svg"}}]);
//# sourceMappingURL=674.450fcbbf.js.map