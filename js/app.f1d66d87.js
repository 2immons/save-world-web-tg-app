(function(){"use strict";var e={2225:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(595);const a=(0,r.A)()},8762:function(e,t,n){var r=n(5130),a=n(6768),o=n(5931),i=(0,a.pM)({__name:"App",setup(e){const{t:t}=(0,o.s9)({useScope:"global"});return(e,t)=>{const n=(0,a.g2)("PopupWindow"),r=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(n),(0,a.bF)(r)],64)}}});const s=i;var c=s,u=n(1459),l=n(5234),p=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete my account","avatar-setting":"Change avatar","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends","language-settings":"Language","claim-task":"Claim","claim":"Claim","completed":"Completed","mining-speed":"Mining Speed","your-balance":"Your Balance","h":"h","m":"m","continue-promo-task":"Continue","promo-tasks":"Promo tasks","price":"Price","boost":"Boost","raised-all-money":"We raised all money!","donation-goal":"Donation Goal","you-donated":"You donated","last-donated":"last","donate-from":"Donate from","donate-more":"Donate more","not-donated":"You didn\'t donate yet","buy":"Buy","enter-referal":"Enter referal link","confirm-btn":"Confirm"}'),d=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить мой аккаунт","avatar-setting":"Change avatar","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей","language-settings":"Язык","claim-task":"Собрать","claim":"Собрать","completed":"Завершено","mining-speed":"Скорость","your-balance":"Баланс","h":"ч","m":"м","continue-promo-task":"Продолжить","promo-tasks":"Promo tasks","price":"Цена","boost":"Буст","raised-all-money":"Мы собрали все деньги!","donation-goal":"Цель","you-donated":"Вы вложили","last-donated":"осталось","donate-from":"Вложить от","donate-more":"Вложить еще","not-donated":"Вы еще ничего не вкладывали","buy":"Купить за","enter-referal":"Введите реферальную ссылку","confirm-btn":"Подтвердить"}');const f="en",m={en:p,ru:d};var h=n(9492),g=n(4232),b=n(144),v=n(2225);const y={key:0,class:"popup"};var w=(0,a.pM)({__name:"PopupWindow",setup(e){const t=(0,b.KR)(!1),n=(0,b.KR)(""),r=e=>{n.value=e,t.value=!0,setTimeout((()=>{t.value=!1}),3e3)};return(0,a.sV)((()=>{v.B.on("showErrorPopup",(e=>{r(e)}))})),(e,r)=>t.value?((0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("p",null,(0,g.v_)(n.value),1)])):(0,a.Q3)("",!0)}});const k=w;var A=k,_=n(2756);const C=(0,l.Ey)(),E=Object.assign(m),W=(0,o.hU)({legacy:!1,locale:f,fallbackLocale:"en",messages:E}),D=(0,r.Ef)(c);D.mixin({methods:{t(e){return W.global.t(e)}}}),D.use(u.A),D.use(C),D.use(W),D.use(h.Ay),(0,_.v)().setMiniAppSettings(),D.component("PopupWindow",A),D.mount("#app")},1459:function(e,t,n){var r=n(1387);const a=[{path:"/",name:"home",component:()=>n.e(49).then(n.bind(n,1705))},{path:"/tasks",name:"tasks",component:()=>Promise.all([n.e(23),n.e(444)]).then(n.bind(n,3486))},{path:"/settings",name:"settings",component:()=>n.e(194).then(n.bind(n,7970))},{path:"/karma",name:"karma",component:()=>n.e(398).then(n.bind(n,5239))},{path:"/mining",name:"mining",component:()=>n.e(400).then(n.bind(n,4202))},{path:"/friends",name:"friends",component:()=>n.e(711).then(n.bind(n,575))},{path:"/tasks/promo-task/:promo_task_id",name:"promo-task",component:()=>Promise.all([n.e(23),n.e(466)]).then(n.bind(n,7764)),props:!0}],o=(0,r.aE)({history:(0,r.Bt)(),routes:a});t.A=o},1110:function(e,t,n){n.d(t,{d:function(){return c}});var r=n(5234),a=n(4373),o=n(5903),i=n(2756),s=n(5628);const c=(0,r.nY)("settings",{state:()=>({}),actions:{async deleteAccount(){try{const e=(0,i.v)().getWebAppData,t=await a.A.post(`${o.$.backendURL}/api/delete-account`,e);(0,s.B)(t)}catch(e){throw console.error("Ошибка при удалении аккаунта:",e),new Error("Server error while deleting the account")}},async changeLanguage(e){try{const t=(0,i.v)().getWebAppData,n={...t,language:e},r=await a.A.post(`${o.$.backendURL}/api/change-language`,n);(0,s.B)(r)}catch(t){throw console.error("Ошибка смены языка:",t),new Error("Server error while changing the language")}},async becomeReferal(e){try{const t=(0,i.v)().getWebAppData,n={...t,code:e},r=await a.A.post(`${o.$.backendURL}/api/become-referal`,n);(0,s.B)(r)}catch(t){throw console.error("Ошибка привязки аккаунта по реферальной ссылке:",t),new Error("Server error while becoming referal")}}},getters:{}})},2756:function(e,t,n){n.d(t,{v:function(){return o}});n(4603),n(7566),n(8721);var r=n(5234),a=n(1110);const o=(0,r.nY)("telegram",{state:()=>({telegramWebApp:window.Telegram?.WebApp??null,webAppData:null,userData:{username:"No username",firstName:"Unknown",lastName:"Unknown",language:"en",avatar:""},referalCode:null}),actions:{setMiniAppSettings(){if(this.telegramWebApp&&this.telegramWebApp.initData){if(this.telegramWebApp.ready(),this.telegramWebApp.expand(),this.telegramWebApp.version>=8){this.telegramWebApp.lockOrientation(),this.telegramWebApp.disableVerticalSwipes();const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);e&&this.telegramWebApp.requestFullscreen()}this.userData=this.getUserData(),this.webAppData=this.generateWebAppData(),this.checkReferalCode()}else console.error("Telegram WebApp недоступен. Методы инициализации Mini App пропущены.")},getUserData(){const e=this.telegramWebApp.initDataUnsafe?.user;if(!e)throw new Error("Ошибка получения данных пользователя");return{username:e.username||"No username",firstName:e.first_name||"Unknown",lastName:e.last_name||"Unknown",language:e.language_code||"en",avatar:e.photo_url||""}},checkReferalCode(){const e=this.telegramWebApp.initDataUnsafe.start_param;if(null===this.referalCode&&e)try{const t=e?.match(/ref_([a-zA-Z0-9]+)/);t&&t[1]&&(this.referalCode=t[1],this.referalCode&&(0,a.d)().becomeReferal(this.referalCode))}catch(t){throw new Error("Ошибка при проверке реферального кода.")}},generateWebAppData(){const e=this.telegramWebApp.initData,t=new URLSearchParams(e),n=t.get("auth_date"),r=t.get("hash");t.delete("hash");const a=Array.from(t.entries()).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>`${e}=${t}`)).join("\n");return{web_app_data:{data_check_string:a,auth_date:n,hash:r}}},showAlert(e){this.telegramWebApp.showAlert(e)},sendReferalLink(e){this.telegramWebApp.shareMessage(e)}},getters:{getWebAppData:e=>{if(!e.webAppData)throw new Error("WebAppData не установлена");return e.webAppData}}})},5628:function(e,t,n){function r(e){if(!e.data.success){const t=Array.isArray(e.data.responseErrors)?e.data.responseErrors.join("; "):e.data.responseErrors||"Причина не указана.";throw new Error("Запрос отработал с ошибкой. "+t)}}n.d(t,{B:function(){return r}})},5903:function(e,t,n){n.d(t,{$:function(){return r}});const r={backendURL:"http://83.217.210.27:8000",worldPopulationURL:"http://83.217.210.27:5100/population"}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{23:"9aacc1e1",49:"d3223005",194:"5cf35a88",398:"1156e64c",400:"3a5656c9",444:"5ec39c1b",466:"4d879189",711:"d1fdc51a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{49:"98e7694f",194:"e3aba750",398:"66766e15",400:"7b9172c4",444:"bf23a8e1",466:"2c81f8ee",711:"13480acb"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="save-world-web-tg-app:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+o){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={49:1,194:1,398:1,400:1,444:1,466:1,711:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8762)}));r=n.O(r)})();
//# sourceMappingURL=app.f1d66d87.js.map