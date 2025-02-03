(function(){"use strict";var e={2225:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(595);const a=(0,r.A)()},8147:function(e,t,n){var r=n(5130),a=n(6768),o=n(5931),i=(0,a.pM)({__name:"App",setup(e){const{t:t}=(0,o.s9)({useScope:"global"});return(e,t)=>{const n=(0,a.g2)("PopupWindow"),r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(n),(0,a.bF)(r)],64)}}});const s=i;var c=s,u=n(1459),l=n(5234),p=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete my account","avatar-setting":"Change avatar","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends","language-settings":"Language","claim-task":"Claim","claim":"Claim","completed":"Completed","mining-speed":"Mining Speed","your-balance":"Your Balance","h":"h","m":"m","continue-promo-task":"Continue","promo-tasks":"Promo tasks","price":"Price","boost":"Boost","raised-all-money":"We raised all money!","donation-goal":"Donation Goal","you-donated":"You donated","last-donated":"last","donate-from":"Donate from","donate-more":"Donate more","not-donated":"You didn\'t donate yet","buy":"Buy","enter-referal":"Enter referal link","confirm-btn":"Confirm","link-copied":"Referal link copied to clipboard!","game-settings":"Game settings:"}'),d=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить мой аккаунт","avatar-setting":"Change avatar","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей","language-settings":"Язык","claim-task":"Собрать","claim":"Собрать","completed":"Завершено","mining-speed":"Скорость","your-balance":"Баланс","h":"ч","m":"м","continue-promo-task":"Продолжить","promo-tasks":"Promo tasks","price":"Цена","boost":"Буст","raised-all-money":"Мы собрали все деньги!","donation-goal":"Цель","you-donated":"Вы вложили","last-donated":"осталось","donate-from":"Вложить от","donate-more":"Вложить еще","not-donated":"Вы еще ничего не вкладывали","buy":"Купить за","enter-referal":"Введите реферальную ссылку","confirm-btn":"Подтвердить","link-copied":"Реферальная ссылка скопирована в буфер обмена!","game-settings":"Настройки игры:"}');const f="en",m={en:p,ru:d};var g=n(9492),h=(n(4114),n(4232)),v=n.p+"img/alert-icon.4113b221.svg",b=n.p+"img/v-icon--success.9dc7f0d7.svg",w=n(144),y=n(2225),k=n(2756);const A={key:0,class:"popup-item__content popup-item__content--error"},E={key:1,class:"popup-item__content popup-item__content--info"};var C;(function(e){e[e["ERROR"]=0]="ERROR",e[e["INFO"]=1]="INFO"})(C||(C={}));var _=(0,a.pM)({__name:"PopupWindow",setup(e){const t=(0,w.KR)([]);let n=0;const o=(e,r)=>{const a=n++;t.value.push({id:a,message:e,type:r}),setTimeout((()=>{t.value=t.value.filter((e=>e.id!==a))}),3e3)};(0,a.sV)((()=>{y.B.on("showErrorPopup",(e=>{o(e,C.ERROR)})),y.B.on("showInfoPopup",(e=>{o(e,C.INFO)}))}));const i=(0,w.KR)(""),s=(0,a.EW)((()=>(0,k.v)().telegramWebApp.isFullscreen));return(0,a.wB)(s,(e=>{i.value=e?"popup-margin-calc":"popup-margin-default"}),{immediate:!0}),(e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,h.C4)(i.value)},[(0,a.bF)(r.F,{name:"popup",tag:"div"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.value,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"popup-item"},[e.type===C.ERROR?((0,a.uX)(),(0,a.CE)("div",A,[n[0]||(n[0]=(0,a.Lk)("img",{src:v,alt:""},null,-1)),(0,a.Lk)("p",null,(0,h.v_)(e.message),1)])):e.type===C.INFO?((0,a.uX)(),(0,a.CE)("div",E,[n[1]||(n[1]=(0,a.Lk)("img",{src:b,alt:""},null,-1)),(0,a.Lk)("p",null,(0,h.v_)(e.message),1)])):(0,a.Q3)("",!0)])))),128))])),_:1})],2))}});const R=_;var O=R;const D=(0,l.Ey)(),S=Object.assign(m),W=(0,o.hU)({legacy:!1,locale:f,fallbackLocale:"en",messages:S}),P=(0,r.Ef)(c);P.mixin({methods:{t(e){return W.global.t(e)}}}),P.use(u.A),P.use(D),P.use(W),P.use(g.Ay);const L=(0,k.v)();L.setMiniAppSettings(),P.component("PopupWindow",O),P.mount("#app")},1459:function(e,t,n){var r=n(1387);const a=[{path:"/",name:"home",component:()=>n.e(554).then(n.bind(n,2096))},{path:"/tasks",name:"tasks",component:()=>Promise.all([n.e(232),n.e(850)]).then(n.bind(n,3486))},{path:"/settings",name:"settings",component:()=>n.e(527).then(n.bind(n,5157))},{path:"/karma",name:"karma",component:()=>n.e(496).then(n.bind(n,517))},{path:"/mining",name:"mining",component:()=>n.e(785).then(n.bind(n,8321))},{path:"/friends",name:"friends",component:()=>n.e(449).then(n.bind(n,5641))},{path:"/tasks/promo-task/:promo_task_id",name:"promo-task",component:()=>Promise.all([n.e(232),n.e(804)]).then(n.bind(n,7764)),props:!0}],o=(0,r.aE)({history:(0,r.Bt)(),routes:a});t.A=o},1110:function(e,t,n){n.d(t,{d:function(){return c}});var r=n(5234),a=n(4373),o=n(5903),i=n(2756),s=n(5628);const c=(0,r.nY)("settings",{state:()=>({}),actions:{async deleteAccount(){try{const e=(0,i.v)().initData,t=await a.A.post(`${o.$.backendURL}/api/delete-account`,e);(0,s.B)(t)}catch(e){throw console.error("Ошибка при удалении аккаунта:",e),new Error("Server error while deleting the account")}},async changeLanguage(e){try{(0,i.v)().getInitData;const t={language:e},n=await a.A.post(`${o.$.backendURL}/api/change-language`,t);(0,s.B)(n)}catch(t){throw console.error("Ошибка смены языка:",t),new Error("Server error while changing the language")}},async becomeReferal(e){try{(0,i.v)().getInitData;const t={code:e},n=await a.A.post(`${o.$.backendURL}/api/become-referal`,t);(0,s.B)(n)}catch(t){throw console.error("Ошибка привязки аккаунта по реферальной ссылке:",t),new Error("Server error while becoming referal")}}},getters:{}})},2756:function(e,t,n){n.d(t,{v:function(){return s}});var r=n(5234),a=n(1110),o=n(4373),i=n(5903);const s=(0,r.nY)("telegram",{state:()=>({telegramWebApp:window.Telegram?.WebApp??null,initData:"",userData:{username:"No username",firstName:"Unknown",lastName:"Unknown",language:"en",avatar:""},referalCode:null}),actions:{setMiniAppSettings(){if(this.telegramWebApp&&this.telegramWebApp.initData){if(this.telegramWebApp.ready(),this.telegramWebApp.expand(),this.telegramWebApp.version>=8){this.telegramWebApp.lockOrientation(),this.telegramWebApp.disableVerticalSwipes();const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);e&&this.telegramWebApp.requestFullscreen()}this.userData=this.getUserData(),this.setInitData(),this.checkReferalCode()}else console.error("Telegram WebApp недоступен. Методы инициализации Mini App пропущены.")},async auth(){try{const e=s().getInitData;await o.A.post(`${i.$.backendURL}/api/v1/auth`,e,{withCredentials:!0})}catch(e){if(o.A.isAxiosError(e)&&422===e.response?.status){const t=e.response.data.detail;throw t.forEach((e=>{console.error(`Validation error at ${e.loc.join(".")}: ${e.msg}`)})),new Error("Validation error when getting the user profile")}throw console.error("Ошибка при получении профиля пользователя:",e),new Error("Server error when getting the user profile")}},async refreshAuthToken(){try{const e=await o.A.post(`${i.$.backendURL}/api/v1/auth/refresh`,{},{withCredentials:!0}),t=e.data;console.log("Token refreshed successfully:",t)}catch(e){if(o.A.isAxiosError(e)&&422===e.response?.status){const t=e.response.data.detail;throw t.forEach((e=>{console.error(`Validation error at ${e.loc.join(".")}: ${e.msg}`)})),new Error("Validation error when refreshing the token")}throw console.error("Ошибка при обновлении токена:",e),new Error("Server error when refreshing the token")}},getUserData(){const e=this.telegramWebApp.initDataUnsafe?.user;if(!e)throw new Error("Ошибка получения данных пользователя");return{username:e.username||"No username",firstName:e.first_name||"Unknown",lastName:e.last_name||"Unknown",language:e.language_code||"en",avatar:e.photo_url||""}},checkReferalCode(){const e=this.telegramWebApp.initDataUnsafe.start_param;if(null===this.referalCode&&e)try{const t=e?.match(/ref_([a-zA-Z0-9]+)/);t&&t[1]&&(this.referalCode=t[1],this.referalCode&&(0,a.d)().becomeReferal(this.referalCode))}catch(t){throw new Error("Ошибка при проверке реферального кода.")}},setInitData(){this.initData=this.telegramWebApp.initData},showAlert(e){this.telegramWebApp.showAlert(e)},sendReferalLink(e){this.telegramWebApp.shareMessage(e)}},getters:{getInitData:e=>{if(!e.initData)throw new Error("InitData не установлена");return e.initData}}})},5628:function(e,t,n){function r(e){if(200!==e.status){const t=Array.isArray(e.data.responseErrors)?e.data.responseErrors.join("; "):e.data.responseErrors||"Причина не указана.";throw new Error("Запрос отработал с ошибкой. "+t)}}n.d(t,{B:function(){return r}})},5903:function(e,t,n){n.d(t,{$:function(){return r}});const r={backendURL:"https://tonycrypto.site",worldPopulationURL:"http://83.217.210.27:5100/population"}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{232:"836aa6af",449:"829847d8",496:"f0c16cca",527:"aa0a6f49",554:"7865dfbc",785:"7fce9619",804:"4293c0b6",850:"b522e1e6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{449:"e797dc24",496:"e51ab8f4",527:"dd02c998",554:"d95a992e",785:"6738b1cc",804:"be014ef8",850:"d221ecb2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="save-world-web-tg-app:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+o){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={449:1,496:1,527:1,554:1,785:1,804:1,850:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8147)}));r=n.O(r)})();
//# sourceMappingURL=app.1a594861.js.map