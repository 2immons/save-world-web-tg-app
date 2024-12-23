(function(){"use strict";var e={2225:function(e,t,n){n.d(t,{B:function(){return r}});var a=n(595);const r=(0,a.A)()},8147:function(e,t,n){var a=n(5130),r=n(6768),o=n(5931),i=(0,r.pM)({__name:"App",setup(e){const{t:t}=(0,o.s9)({useScope:"global"});return(e,t)=>{const n=(0,r.g2)("PopupWindow"),a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(n),(0,r.bF)(a)],64)}}});const s=i;var c=s,u=n(1459),l=n(5234),p=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete my account","avatar-setting":"Change avatar","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends","language-settings":"Language","claim-task":"Claim","claim":"Claim","completed":"Completed","mining-speed":"Mining Speed","your-balance":"Your Balance","h":"h","m":"m","continue-promo-task":"Continue","promo-tasks":"Promo tasks","price":"Price","boost":"Boost","raised-all-money":"We raised all money!","donation-goal":"Donation Goal","you-donated":"You donated","last-donated":"last","donate-from":"Donate from","donate-more":"Donate more","not-donated":"You didn\'t donate yet","buy":"Buy","enter-referal":"Enter referal link","confirm-btn":"Confirm","link-copied":"Referal link copied to clipboard!","game-settings":"Game settings:"}'),d=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить мой аккаунт","avatar-setting":"Change avatar","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей","language-settings":"Язык","claim-task":"Собрать","claim":"Собрать","completed":"Завершено","mining-speed":"Скорость","your-balance":"Баланс","h":"ч","m":"м","continue-promo-task":"Продолжить","promo-tasks":"Promo tasks","price":"Цена","boost":"Буст","raised-all-money":"Мы собрали все деньги!","donation-goal":"Цель","you-donated":"Вы вложили","last-donated":"осталось","donate-from":"Вложить от","donate-more":"Вложить еще","not-donated":"Вы еще ничего не вкладывали","buy":"Купить за","enter-referal":"Введите реферальную ссылку","confirm-btn":"Подтвердить","link-copied":"Реферальная ссылка скопирована в буфер обмена!","game-settings":"Настройки игры:"}');const m="en",f={en:p,ru:d};var g=n(9492),h=(n(4114),n(4232)),b=n.p+"img/alert-icon.4113b221.svg",v=n.p+"img/v-icon--success.9dc7f0d7.svg",y=n(144),k=n(2225),w=n(2756);const A={key:0,class:"popup-item__content popup-item__content--error"},_={key:1,class:"popup-item__content popup-item__content--info"};var E;(function(e){e[e["ERROR"]=0]="ERROR",e[e["INFO"]=1]="INFO"})(E||(E={}));var C=(0,r.pM)({__name:"PopupWindow",setup(e){const t=(0,y.KR)([]);let n=0;const o=(e,a)=>{const r=n++;t.value.push({id:r,message:e,type:a}),setTimeout((()=>{t.value=t.value.filter((e=>e.id!==r))}),3e3)};(0,r.sV)((()=>{k.B.on("showErrorPopup",(e=>{o(e,E.ERROR)})),k.B.on("showInfoPopup",(e=>{o(e,E.INFO)}))}));const i=(0,y.KR)(""),s=(0,r.EW)((()=>(0,w.v)().telegramWebApp.isFullscreen));return(0,r.wB)(s,(e=>{i.value=e?"popup-margin-calc":"popup-margin-default"}),{immediate:!0}),(e,n)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,h.C4)(i.value)},[(0,r.bF)(a.F,{name:"popup",tag:"div"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.value,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"popup-item"},[e.type===E.ERROR?((0,r.uX)(),(0,r.CE)("div",A,[n[0]||(n[0]=(0,r.Lk)("img",{src:b,alt:""},null,-1)),(0,r.Lk)("p",null,(0,h.v_)(e.message),1)])):e.type===E.INFO?((0,r.uX)(),(0,r.CE)("div",_,[n[1]||(n[1]=(0,r.Lk)("img",{src:v,alt:""},null,-1)),(0,r.Lk)("p",null,(0,h.v_)(e.message),1)])):(0,r.Q3)("",!0)])))),128))])),_:1})],2))}});const W=C;var O=W;const R=(0,l.Ey)(),D=Object.assign(f),P=(0,o.hU)({legacy:!1,locale:m,fallbackLocale:"en",messages:D}),S=(0,a.Ef)(c);S.mixin({methods:{t(e){return P.global.t(e)}}}),S.use(u.A),S.use(R),S.use(P),S.use(g.Ay),(0,w.v)().setMiniAppSettings(),S.component("PopupWindow",O),S.mount("#app")},1459:function(e,t,n){var a=n(1387);const r=[{path:"/",name:"home",component:()=>n.e(49).then(n.bind(n,1705))},{path:"/tasks",name:"tasks",component:()=>Promise.all([n.e(232),n.e(850)]).then(n.bind(n,3486))},{path:"/settings",name:"settings",component:()=>n.e(527).then(n.bind(n,5157))},{path:"/karma",name:"karma",component:()=>n.e(496).then(n.bind(n,517))},{path:"/mining",name:"mining",component:()=>n.e(785).then(n.bind(n,8321))},{path:"/friends",name:"friends",component:()=>n.e(449).then(n.bind(n,5641))},{path:"/tasks/promo-task/:promo_task_id",name:"promo-task",component:()=>Promise.all([n.e(232),n.e(804)]).then(n.bind(n,7764)),props:!0}],o=(0,a.aE)({history:(0,a.Bt)(),routes:r});t.A=o},1110:function(e,t,n){n.d(t,{d:function(){return c}});var a=n(5234),r=n(4373),o=n(5903),i=n(2756),s=n(5628);const c=(0,a.nY)("settings",{state:()=>({}),actions:{async deleteAccount(){try{const e=(0,i.v)().getWebAppData,t=await r.A.post(`${o.$.backendURL}/api/delete-account`,e);(0,s.B)(t)}catch(e){throw console.error("Ошибка при удалении аккаунта:",e),new Error("Server error while deleting the account")}},async changeLanguage(e){try{const t=(0,i.v)().getWebAppData,n={...t,language:e},a=await r.A.post(`${o.$.backendURL}/api/change-language`,n);(0,s.B)(a)}catch(t){throw console.error("Ошибка смены языка:",t),new Error("Server error while changing the language")}},async becomeReferal(e){try{const t=(0,i.v)().getWebAppData,n={...t,code:e},a=await r.A.post(`${o.$.backendURL}/api/become-referal`,n);(0,s.B)(a)}catch(t){throw console.error("Ошибка привязки аккаунта по реферальной ссылке:",t),new Error("Server error while becoming referal")}}},getters:{}})},2756:function(e,t,n){n.d(t,{v:function(){return o}});n(4603),n(7566),n(8721);var a=n(5234),r=n(1110);const o=(0,a.nY)("telegram",{state:()=>({telegramWebApp:window.Telegram?.WebApp??null,webAppData:null,userData:{username:"No username",firstName:"Unknown",lastName:"Unknown",language:"en",avatar:""},referalCode:null}),actions:{setMiniAppSettings(){if(this.telegramWebApp&&this.telegramWebApp.initData){if(this.telegramWebApp.ready(),this.telegramWebApp.expand(),this.telegramWebApp.version>=8){this.telegramWebApp.lockOrientation(),this.telegramWebApp.disableVerticalSwipes();const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);e&&this.telegramWebApp.requestFullscreen()}this.userData=this.getUserData(),this.webAppData=this.generateWebAppData(),this.checkReferalCode()}else console.error("Telegram WebApp недоступен. Методы инициализации Mini App пропущены.")},getUserData(){const e=this.telegramWebApp.initDataUnsafe?.user;if(!e)throw new Error("Ошибка получения данных пользователя");return{username:e.username||"No username",firstName:e.first_name||"Unknown",lastName:e.last_name||"Unknown",language:e.language_code||"en",avatar:e.photo_url||""}},checkReferalCode(){const e=this.telegramWebApp.initDataUnsafe.start_param;if(null===this.referalCode&&e)try{const t=e?.match(/ref_([a-zA-Z0-9]+)/);t&&t[1]&&(this.referalCode=t[1],this.referalCode&&(0,r.d)().becomeReferal(this.referalCode))}catch(t){throw new Error("Ошибка при проверке реферального кода.")}},generateWebAppData(){const e=this.telegramWebApp.initData,t=new URLSearchParams(e),n=t.get("auth_date"),a=t.get("hash");t.delete("hash");const r=Array.from(t.entries()).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>`${e}=${t}`)).join("\n");return{web_app_data:{data_check_string:r,auth_date:n,hash:a}}},showAlert(e){this.telegramWebApp.showAlert(e)},sendReferalLink(e){this.telegramWebApp.shareMessage(e)}},getters:{getWebAppData:e=>{if(!e.webAppData)throw new Error("WebAppData не установлена");return e.webAppData}}})},5628:function(e,t,n){function a(e){if(!e.data.success){const t=Array.isArray(e.data.responseErrors)?e.data.responseErrors.join("; "):e.data.responseErrors||"Причина не указана.";throw new Error("Запрос отработал с ошибкой. "+t)}}n.d(t,{B:function(){return a}})},5903:function(e,t,n){n.d(t,{$:function(){return a}});const a={backendURL:"http://83.217.210.27:8000",worldPopulationURL:"http://83.217.210.27:5100/population"}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{49:"767a849f",232:"6e5aa6dc",449:"02460c54",496:"0b065e61",527:"aa0a6f49",785:"0dbb4116",804:"4293c0b6",850:"b522e1e6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{49:"2fbab8e0",449:"e797dc24",496:"e51ab8f4",527:"dd02c998",785:"6738b1cc",804:"be014ef8",850:"d221ecb2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="save-world-web-tg-app:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+o){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=s,i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return r();e(a,s,null,r,o)}))},r={524:0};n.f.miniCss=function(e,t){var n={49:1,449:1,496:1,527:1,785:1,804:1,850:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(8147)}));a=n.O(a)})();
//# sourceMappingURL=app.d94a2ea4.js.map