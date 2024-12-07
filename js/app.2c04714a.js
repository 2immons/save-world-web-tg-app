(function(){"use strict";var e={9756:function(e,n,t){var r=t(5130),o=t(6768),a=t(5931),i=(0,o.pM)({__name:"App",setup(e){const{t:n}=(0,a.s9)({useScope:"global"});return(e,n)=>{const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}}});const s=i;var u=s,c=t(1387);const l=[{path:"/",name:"home",component:()=>Promise.all([t.e(606),t.e(239)]).then(t.bind(t,9255))},{path:"/tasks",name:"tasks",component:()=>Promise.all([t.e(606),t.e(476)]).then(t.bind(t,7170))},{path:"/settings",name:"settings",component:()=>Promise.all([t.e(606),t.e(227)]).then(t.bind(t,6175))},{path:"/karma",name:"karma",component:()=>Promise.all([t.e(606),t.e(76)]).then(t.bind(t,1116))},{path:"/mining",name:"mining",component:()=>Promise.all([t.e(606),t.e(549)]).then(t.bind(t,5944))},{path:"/friends",name:"friends",component:()=>Promise.all([t.e(606),t.e(383)]).then(t.bind(t,8193))},{path:"/tasks/promo-task/:promo_task_id",name:"promo-task",component:()=>Promise.all([t.e(606),t.e(627)]).then(t.bind(t,2237)),props:!0}],f=(0,c.aE)({history:(0,c.Bt)(),routes:l});var d=f,m=t(5234),p=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete account","change-stock":"Change stock exchange","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends","language-settings":"Language","claim-task":"Claim","continue-promo-task":"Continue","promo-tasks":"Promo tasks"}'),h=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить аккаунт","change-stock":"Сменить биржу","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей","language-settings":"Язык","claim-task":"Собрать","continue-promo-task":"Продолжить","promo-tasks":"Promo tasks"}');const g="en",v={en:p,ru:h};var b=t(9492);const k=(0,m.Ey)(),y=Object.assign(v),w=(0,a.hU)({legacy:!1,locale:g,fallbackLocale:"en",messages:y}),C=(0,r.Ef)(u);C.mixin({methods:{t(e){return w.global.t(e)}}}),C.use(d),C.use(k),C.use(w),C.use(b.Ay),C.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{76:"df844780",227:"e19617a9",239:"6c3e545d",383:"0547486e",476:"7226bbbe",549:"e482c1f6",606:"5d6ce924",627:"952dcfcb"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{76:"0ce2e694",227:"3a21e609",239:"5dacf307",383:"78f7009d",476:"76b26ab5",549:"2caeedaf",627:"06fa2449"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var s=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var r=t&&t.type,s=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=s,i.href=n,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),s=t.p+i;if(n(i,s))return o();e(r,s,null,o,a)}))},o={524:0};t.f.miniCss=function(e,n){var t={76:1,227:1,239:1,383:1,476:1,549:1,627:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9756)}));r=t.O(r)})();
//# sourceMappingURL=app.2c04714a.js.map