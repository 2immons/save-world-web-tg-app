(function(){"use strict";var e={237:function(e,n,t){var r=t(5130),o=t(6768),i=t(5931),a=(0,o.pM)({__name:"App",setup(e){const{t:n}=(0,i.s9)({useScope:"global"});return(e,n)=>{const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}}});const s=a;var u=s,c=t(1387);const f=[{path:"/",name:"home",component:()=>Promise.all([t.e(553),t.e(229)]).then(t.bind(t,4817))},{path:"/tasks",name:"tasks",component:()=>Promise.all([t.e(553),t.e(68)]).then(t.bind(t,657))},{path:"/settings",name:"settings",component:()=>Promise.all([t.e(553),t.e(103)]).then(t.bind(t,4842))},{path:"/karma",name:"karma",component:()=>Promise.all([t.e(553),t.e(841)]).then(t.bind(t,9680))},{path:"/mining",name:"mining",component:()=>Promise.all([t.e(553),t.e(408)]).then(t.bind(t,8517))},{path:"/friends",name:"friends",component:()=>Promise.all([t.e(553),t.e(883)]).then(t.bind(t,2924))}],l=(0,c.aE)({history:(0,c.Bt)(),routes:f});var d=l,p=t(5234),m=JSON.parse('{"accept-task":"Start","russian":"Russian","english":"English","profit-per-day":"Profit per day","test":"Test","settings":"Settings","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","weekly":"Weekly","become-referal":"Become referal","delete-account":"Delete account","change-stock":"Change stock exchange","vibration":"Vibration","coin-animation":"Coin animation","yes":"Yes","no":"Cancel","is-sure":"Are you sure?","mining":"Mining","invite-friends":"Invite friends"}'),h=JSON.parse('{"accept-task":"Начать","russian":"Русский","english":"Английский","profit-per-day":"Доходность:","test":"Тест","settings":"Настройки","home":"Home","karma":"Karma","frens":"Frens","tasks":"Tasks","mining":"Mining","weekly":"Еженедельные","become-referal":"Стать рефералом","delete-account":"Удалить аккаунт","change-stock":"Сменить биржу","vibration":"Вибрация","coin-animation":"Анимация монет","yes":"Да","no":"Отмена","is-sure":"Вы уверены?","invite-friends":"Пригласить друзей"}');const g="en",v={en:m,ru:h};var b=t(9492);const y=(0,p.Ey)(),k=Object.assign(v),w=(0,i.hU)({legacy:!1,locale:g,fallbackLocale:"en",messages:k}),O=(0,r.Ef)(u);O.mixin({methods:{t(e){return w.global.t(e)}}}),O.use(d),O.use(y),O.use(w),O.use(b.Ay),O.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{68:"2ed75ac9",103:"621b05fe",229:"fe1af7b3",408:"da33fc98",553:"04f8d17a",841:"4d518c29",883:"1e09d6e1"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{68:"44fdd688",103:"da4dfa58",229:"d17a558e",408:"d7bb1221",841:"ecb8ed42",883:"3382bc54"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=r),e[r]=[o];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://2immons.github.io/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var s=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,s=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=s,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return o();e(r,s,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={68:1,103:1,229:1,408:1,841:1,883:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var f=u(t)}for(n&&n(r);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(237)}));r=t.O(r)})();
//# sourceMappingURL=app.1f9d4ead.js.map