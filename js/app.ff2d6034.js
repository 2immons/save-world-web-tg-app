(function(){"use strict";var e={9758:function(e,n,t){var r=t(5130),o=t(6768),a=t(5931),i=(0,o.pM)({__name:"App",setup(e){const{t:n}=(0,a.s9)({useScope:"global"});return(e,n)=>{const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}}});const u=i;var s=u,c=t(1387);const l=[{path:"/",name:"home",component:()=>Promise.all([t.e(225),t.e(434)]).then(t.bind(t,1697))},{path:"/tasks",name:"tasks",component:()=>Promise.all([t.e(225),t.e(96)]).then(t.bind(t,9113))},{path:"/settings",name:"settings",component:()=>Promise.all([t.e(225),t.e(929)]).then(t.bind(t,2708))},{path:"/balance",name:"balance",component:()=>Promise.all([t.e(225),t.e(393)]).then(t.bind(t,4956))},{path:"/friends",name:"friends",component:()=>Promise.all([t.e(225),t.e(910)]).then(t.bind(t,3919))}],f=(0,c.aE)({history:(0,c.Bt)(),routes:l});var d=f,p=t(5234),m=JSON.parse('{"accept-task":"START","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","balance":"Balance","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete account","change-stock":"Change stock exchange","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?"}'),h=JSON.parse('{"accept-task":"НАЧАТЬ","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Главная","balance":"Баланс","frens":"Друзья","tasks":"Задания","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить аккаунт","change-stock":"Сменить биржу","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?"}');const b="en",g={en:m,ru:h};var v=t(9492);const y=(0,p.Ey)(),k=Object.assign(g),w=(0,a.hU)({legacy:!1,locale:b,fallbackLocale:"en",messages:k}),O=(0,r.Ef)(s);O.mixin({methods:{t(e){return w.global.t(e)}}}),O.use(d),O.use(y),O.use(w),O.use(v.Ay),O.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{96:"539955a4",225:"e15b3ffb",393:"86782e75",434:"4aee6d10",910:"3eb84ed0",929:"93414f5c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{96:"30962866",393:"2c7737b9",434:"1bab8753",910:"2c7737b9",929:"da519ba5"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=u,i.href=n,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={524:0};t.f.miniCss=function(e,n){var t={96:1,393:1,434:1,910:1,929:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9758)}));r=t.O(r)})();
//# sourceMappingURL=app.ff2d6034.js.map