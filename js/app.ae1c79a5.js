(function(){"use strict";var e={2225:function(e,n,t){t.d(n,{B:function(){return r}});var o=t(595);const r=(0,o.A)()},8498:function(e,n,t){var o=t(5130),r=t(6768),a=t(5931),i=(0,r.pM)({__name:"App",setup(e){const{t:n}=(0,a.s9)({useScope:"global"});return(e,n)=>{const t=(0,r.g2)("PopupWindow"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(t),(0,r.bF)(o)],64)}}});const s=i;var u=s,c=t(1459),l=t(5234),d=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete my account","avatar-setting":"Change avatar","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends","language-settings":"Language","claim-task":"Claim","claim":"Claim","completed":"Completed","mining-speed":"Mining Speed","your-balance":"Your Balance","h":"h","m":"m","continue-promo-task":"Continue","promo-tasks":"Promo tasks","price":"Price","boost":"Boost","raised-all-money":"We raised all money!","donation-goal":"Donation Goal","you-donated":"You donated","last-donated":"last","donate-from":"Donate from","donate-more":"Donate more","not-donated":"You didn\'t donate yet","buy":"Buy","enter-referal":"Enter referal link","confirm-btn":"Confirm"}'),f=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить мой аккаунт","avatar-setting":"Change avatar","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей","language-settings":"Язык","claim-task":"Собрать","claim":"Собрать","completed":"Завершено","mining-speed":"Скорость","your-balance":"Баланс","h":"ч","m":"м","continue-promo-task":"Продолжить","promo-tasks":"Promo tasks","price":"Цена","boost":"Буст","raised-all-money":"Мы собрали все деньги!","donation-goal":"Цель","you-donated":"Вы вложили","last-donated":"осталось","donate-from":"Вложить от","donate-more":"Вложить еще","not-donated":"Вы еще ничего не вкладывали","buy":"Купить за","enter-referal":"Введите реферальную ссылку","confirm-btn":"Подтвердить"}');const m="en",p={en:d,ru:f};var g=t(9492),h=t(4232),v=t(144),b=t(2225);const y={key:0,class:"popup"};var k=(0,r.pM)({__name:"PopupWindow",setup(e){const n=(0,v.KR)(!1),t=(0,v.KR)(""),o=e=>{t.value=e,n.value=!0,setTimeout((()=>{n.value=!1}),3e3)};return(0,r.sV)((()=>{b.B.on("showErrorPopup",(e=>{o(e)}))})),(e,o)=>n.value?((0,r.uX)(),(0,r.CE)("div",y,[(0,r.Lk)("p",null,(0,h.v_)(t.value),1)])):(0,r.Q3)("",!0)}});const w=k;var C=w;const P=(0,l.Ey)(),_=Object.assign(p),E=(0,a.hU)({legacy:!1,locale:m,fallbackLocale:"en",messages:_}),O=(0,o.Ef)(u);O.mixin({methods:{t(e){return E.global.t(e)}}}),O.use(c.A),O.use(P),O.use(E),O.use(g.Ay),O.component("PopupWindow",C),O.mount("#app")},1459:function(e,n,t){var o=t(1387);const r=[{path:"/",name:"home",component:()=>Promise.all([t.e(602),t.e(986)]).then(t.bind(t,9791))},{path:"/tasks",name:"tasks",component:()=>Promise.all([t.e(602),t.e(362)]).then(t.bind(t,4129))},{path:"/settings",name:"settings",component:()=>Promise.all([t.e(602),t.e(483)]).then(t.bind(t,7970))},{path:"/karma",name:"karma",component:()=>Promise.all([t.e(602),t.e(115)]).then(t.bind(t,7761))},{path:"/mining",name:"mining",component:()=>Promise.all([t.e(602),t.e(890)]).then(t.bind(t,6183))},{path:"/friends",name:"friends",component:()=>Promise.all([t.e(602),t.e(926)]).then(t.bind(t,4805))},{path:"/tasks/promo-task/:promo_task_id",name:"promo-task",component:()=>Promise.all([t.e(602),t.e(891)]).then(t.bind(t,7764)),props:!0}],a=(0,o.aE)({history:(0,o.Bt)(),routes:r});n.A=a}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{115:"7165575f",362:"0494fed8",483:"a66c9bad",602:"e29f70e2",890:"a8f6d433",891:"9f090624",926:"2e4f1530",986:"99d2b758"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{115:"361c6279",362:"074b3a2c",483:"0be4401c",890:"18de5f29",891:"a685cbc6",926:"10d4dcd7",986:"28930eee"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var s=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,s=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=s,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=s,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),s=t.p+i;if(n(i,s))return r();e(o,s,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={115:1,362:1,483:1,890:1,891:1,926:1,986:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),s=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(u)var l=u(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(8498)}));o=t.O(o)})();
//# sourceMappingURL=app.ae1c79a5.js.map