(()=>{var e={};e.id=1485,e.ids=[1485],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},92609:e=>{"use strict";e.exports=require("encoding")},14752:e=>{"use strict";e.exports=require("pino-pretty")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},98188:e=>{"use strict";e.exports=require("module")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},67546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>l,pages:()=>c,routeModule:()=>x,tree:()=>p});var s=r(67096),i=r(16132),o=r(37284),a=r.n(o),n=r(32564),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);r.d(t,u);let p=["",{children:["events",{children:["[sport]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,47141)),"/Users/dylanburkey/Downloads/hazebet/src/app/events/[sport]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,13009)),"/Users/dylanburkey/Downloads/hazebet/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/dylanburkey/Downloads/hazebet/src/app/events/[sport]/page.tsx"],l="/events/[sport]/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/events/[sport]/page",pathname:"/events/[sport]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},70895:(e,t,r)=>{Promise.resolve().then(r.bind(r,40296))},40296:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Events});var s=r(30784),i=r(57114),o=r(6135),a=r(23670);let useData=()=>{let e=(0,i.useParams)(),t="top"===e.sport?{orderBy:o.zu.Turnover,filter:{limit:6}}:{filter:{sportSlug:e.sport}};return(0,o.ek)(t)};function Events(){let{loading:e,data:t}=useData();return(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.ct,{}),e?s.jsx("div",{children:"Loading..."}):s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:t?.games.map(e=>s.jsx(a.yb,{game:e},e.id))})]})}},47141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>u});var s=r(95153);let i=(0,s.createProxy)(String.raw`/Users/dylanburkey/Downloads/hazebet/src/app/events/[sport]/page.tsx`),{__esModule:o,$$typeof:a}=i,n=i.default,u=n},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[9022,1323,2996],()=>__webpack_exec__(67546));module.exports=r})();