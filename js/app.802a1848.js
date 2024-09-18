(function(){"use strict";var e={302:function(e,n,t){var r=t(5130),o=t(6768);function a(e,n){const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}var u=t(1241);const i={},l=(0,u.A)(i,[["render",a]]);var s=l,c=t(1387),f=t.p+"img/save-world-web-logo.42a9754d.png";const d={class:"logo"};function p(e,n){return(0,o.uX)(),(0,o.CE)("section",d,n[0]||(n[0]=[(0,o.Lk)("div",{class:"container"},[(0,o.Lk)("button",{class:"logo-wrapper"},[(0,o.Lk)("img",{src:f,alt:""})])],-1)]))}const v={},m=(0,u.A)(v,[["render",p],["__scopeId","data-v-6a2a4471"]]);var g=m,b=t(9438),h=t(8393);const k={class:"quests-btn-wrapper"};function w(e,n){const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",k,[(0,o.bF)(t,{to:"/quests",class:"quests-btn"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("QUESTS")]))),_:1})])}const _={},L=(0,u.A)(_,[["render",w],["__scopeId","data-v-470d3908"]]);var y=L,A=(0,o.pM)({__name:"HomeView",setup(e){return(e,n)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(b.A),(0,o.Lk)("main",null,[(0,o.bF)(g),(0,o.bF)(y)]),(0,o.bF)(h.A)],64))}});const C=A;var E=C;const T=[{path:"/",name:"home",component:E},{path:"/quests",name:"quests",component:()=>t.e(594).then(t.bind(t,5436))}],F=(0,c.aE)({history:(0,c.Bt)(),routes:T});var O=F;(0,r.Ef)(s).use(O).mount("#app")},8393:function(e,n,t){t.d(n,{A:function(){return p}});var r=t(6768),o=t.p+"img/home.de651f16.svg",a=t.p+"img/balance.c46f43e9.svg",u=t.p+"img/info.427c6718.svg";const i={class:"container"},l={class:"footer-content"};function s(e,n){const t=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",null,[n[5]||(n[5]=(0,r.Lk)("hr",null,null,-1)),(0,r.Lk)("div",i,[(0,r.Lk)("nav",l,[(0,r.bF)(t,{to:"/",class:"nav-item"},{default:(0,r.k6)((()=>n[0]||(n[0]=[(0,r.Lk)("img",{src:o,alt:""},null,-1),(0,r.Lk)("p",null,"Home",-1)]))),_:1}),(0,r.bF)(t,{to:"/",class:"nav-item"},{default:(0,r.k6)((()=>n[1]||(n[1]=[(0,r.Lk)("img",{src:a,alt:""},null,-1),(0,r.Lk)("p",null,"Balance",-1)]))),_:1}),(0,r.bF)(t,{to:"/",class:"nav-item"},{default:(0,r.k6)((()=>n[2]||(n[2]=[(0,r.Lk)("img",{src:o,alt:""},null,-1),(0,r.Lk)("p",null,"Green Coin",-1)]))),_:1}),(0,r.bF)(t,{to:"/",class:"nav-item"},{default:(0,r.k6)((()=>n[3]||(n[3]=[(0,r.Lk)("img",{src:o,alt:""},null,-1),(0,r.Lk)("p",null,"Karma",-1)]))),_:1}),(0,r.bF)(t,{to:"/",class:"nav-item"},{default:(0,r.k6)((()=>n[4]||(n[4]=[(0,r.Lk)("img",{src:u,alt:""},null,-1),(0,r.Lk)("p",null,"Info",-1)]))),_:1})])])])}var c=t(1241);const f={},d=(0,c.A)(f,[["render",s],["__scopeId","data-v-b3625024"]]);var p=d},9438:function(e,n,t){t.d(n,{A:function(){return v}});t(4603),t(7566),t(8721);var r=t(6768),o=t(4232),a=t.p+"img/settings.b1578647.svg",u=t(144);t(4373);const i={class:"container"},l={class:"header-content"},s={class:"user-wrapper"},c=["src"];var f={__name:"PageHeader",setup(e){const n=(0,u.KR)("Loading..."),t=(0,u.KR)("Loading..."),f=(0,u.KR)("Loading..."),d=(0,u.KR)("");return(0,r.sV)((async()=>{if(window.Telegram&&window.Telegram.WebApp){window.Telegram.WebApp.ready();const e=window.Telegram.WebApp.initDataUnsafe?.user;if(e){n.value=e.username||"No username",t.value=e.first_name||"Unknown",f.value=e.last_name||"Unknown",d.value=e.photo_url||"",console.log(t.value),console.log(d.value);const r=window.Telegram.WebApp.initData;new URLSearchParams(r)}}else console.error("Telegram WebApp API не доступен.")})),(e,n)=>((0,r.uX)(),(0,r.CE)("header",null,[(0,r.Lk)("div",i,[(0,r.Lk)("div",l,[(0,r.Lk)("div",s,[(0,r.Lk)("img",{src:d.value,alt:"Аватар"},null,8,c),(0,r.Lk)("p",null,(0,o.v_)(t.value),1)]),n[0]||(n[0]=(0,r.Lk)("button",{class:"settings-wrapper"},[(0,r.Lk)("img",{src:a,alt:"Настройки"})],-1))])]),n[1]||(n[1]=(0,r.Lk)("hr",null,null,-1))]))}},d=t(1241);const p=(0,d.A)(f,[["__scopeId","data-v-08322e50"]]);var v=p}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.c09d5216.js"}}(),function(){t.miniCssF=function(e){return"css/about.8c79f9d3.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var d=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/save-world-web-tg-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,a){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var i=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,i=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,u.parentNode&&u.parentNode.removeChild(u),a(l)}};return u.onerror=u.onload=i,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return o();e(r,i,null,o,a)}))},o={524:0};t.f.miniCss=function(e,n){var t={594:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),i=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],l=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var c=l(t)}for(n&&n(r);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(302)}));r=t.O(r)})();
//# sourceMappingURL=app.802a1848.js.map