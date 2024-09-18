(function(){"use strict";var e={7186:function(e,n,t){var r=t(5130),o=t(6768);function a(e,n){const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}var i=t(1241);const s={},u=(0,i.A)(s,[["render",a]]);var c=u,l=t(1387);const d={class:"logo"};var f=(0,o.pM)({__name:"MainLogo",setup(e){return(e,n)=>((0,o.uX)(),(0,o.CE)("div",d,n[0]||(n[0]=[(0,o.Lk)("div",{class:"container"},[(0,o.Lk)("h1",null,"Save World Web")],-1)])))}});const p=(0,i.A)(f,[["__scopeId","data-v-776d984b"]]);var v=p,b=(t(4603),t(7566),t(8721),t(4232)),m=t(144),g=t(4373);const h={class:"container"},w={class:"header-content"},k={class:"username-wrapper"};var _={__name:"PageHeader",setup(e){const n=(0,m.KR)("Loading..."),t=(0,m.KR)("Loading..."),r=(0,m.KR)("Loading..."),a=(0,m.KR)(""),i=async e=>{try{const n=await g.A.post("http://localhost:8000/validate",e);console.log("Запрос валидации:",n.data)}catch(n){n.response?console.error("Валидация не пройдена:",n.response.data):console.error("Ошибка запроса:",n.message)}};return(0,o.sV)((async()=>{if(window.Telegram&&window.Telegram.WebApp){window.Telegram.WebApp.ready();const e=window.Telegram.WebApp.initDataUnsafe?.user;if(e){n.value=e.username||"No username",t.value=e.first_name||"No first name",r.value=e.last_name||"No last name",a.value=e.hash;const o=window.Telegram.WebApp.initData,s=new URLSearchParams(o);await i(s)}}else console.error("Telegram WebApp API не доступен.")})),(e,t)=>((0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("div",h,[(0,o.Lk)("div",w,[(0,o.Lk)("div",k,(0,b.v_)(n.value)+" fff",1),t[0]||(t[0]=(0,o.Lk)("div",{class:"settings-wrapper"},"Settings",-1))])])]))}};const L=(0,i.A)(_,[["__scopeId","data-v-0f1d89fc"]]);var y=L;const A={class:"container"},F={class:"footer-content"},E={class:"btn-wrapper"},O={class:"btn-wrapper"},C={class:"btn-wrapper"},T={class:"btn-wrapper"},W={class:"btn-wrapper"};function j(e,n){const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("footer",null,[(0,o.Lk)("div",A,[(0,o.Lk)("nav",F,[(0,o.Lk)("div",E,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("div",O,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("Balance")]))),_:1})]),(0,o.Lk)("div",C,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("Green Coin")]))),_:1})]),(0,o.Lk)("div",T,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.eW)("Karma")]))),_:1})]),(0,o.Lk)("div",W,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[4]||(n[4]=[(0,o.eW)("Info")]))),_:1})])])])])}const P={},S=(0,i.A)(P,[["render",j],["__scopeId","data-v-2ef5abce"]]);var I=S;const M={class:"quest-item"};function X(e,n){return(0,o.uX)(),(0,o.CE)("div",M,n[0]||(n[0]=[(0,o.Lk)("h3",null,"Quest name",-1),(0,o.Lk)("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, metus sit amet volutpat convallis, neque sem ullamcorper ligula, in iaculis sem libero ac velit. ",-1)]))}const q={},K=(0,i.A)(q,[["render",X],["__scopeId","data-v-6a2f1e78"]]);var N=K;const x={class:"quests"},R={class:"container"},B={class:"quests-content"},D={class:"quests-list"};var H=(0,o.pM)({__name:"QuestsList",setup(e){return(e,n)=>((0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("div",R,[(0,o.Lk)("div",B,[n[0]||(n[0]=(0,o.Lk)("h2",null,"Quests",-1)),(0,o.Lk)("div",D,[(0,o.bF)(N),(0,o.bF)(N),(0,o.bF)(N)])])])]))}});const Q=(0,i.A)(H,[["__scopeId","data-v-5758ca02"]]);var U=Q,V=(0,o.pM)({__name:"HomeView",setup(e){return(e,n)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(y),(0,o.Lk)("main",null,[(0,o.bF)(v),(0,o.bF)(U)]),(0,o.bF)(I)],64))}});const G=V;var z=G;const J=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,5609))}],Y=(0,l.aE)({history:(0,l.Bt)(),routes:J});var Z=Y;(0,r.Ef)(c).use(Z).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.df07963c.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="save-world-web-tg-app:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=r),e[r]=[o];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/save-world-web-tg-app/"}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(u)var l=u(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunksave_world_web_tg_app"]=self["webpackChunksave_world_web_tg_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(7186)}));r=t.O(r)})();
//# sourceMappingURL=app.eee6877b.js.map