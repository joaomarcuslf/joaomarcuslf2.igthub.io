(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{8672:function(e,s,n){Promise.resolve().then(n.bind(n,2300)),Promise.resolve().then(n.bind(n,3409)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23))},2300:function(e,s,n){"use strict";n.d(s,{default:function(){return r}});var t=n(7437),a=n(6648),i=n(2830),l=n(2265),c=function(e){let[s,n]=(0,l.useState)(null),t=(0,l.useCallback)(t=>{let a=e.find(e=>e.key===t);if((null==a?void 0:a.key)===(null==s?void 0:s.key)){n(null);return}n(a),(0,i.l)(".timeline")},[]);return{activeJob:s,showDescription:t}};function r(e){let{jobs:s}=e,{activeJob:n,showDescription:i}=c(s);return(0,t.jsx)("section",{className:"timeline hero is-light",children:(0,t.jsxs)("div",{className:"hero-body",children:[(0,t.jsx)("h2",{className:"title",children:"Work Timeline"}),(0,t.jsxs)("div",{className:"timeline-content",children:[(0,t.jsx)("div",{className:"initial-date",children:"Aug 2015"}),(0,t.jsx)("div",{className:"timeline-bar"}),(0,t.jsx)("div",{className:"final-date",children:"Present"}),(0,t.jsx)("div",{className:"events",children:s.map(e=>(0,t.jsx)("button",{id:e.key,type:"button",className:"event",onClick:()=>i(e.key),children:(0,t.jsx)(a.default,{className:"timeline-company-image",src:"/images/companies/".concat(e.companyImg),alt:e.name,width:"60",height:"60"})},e.key))})]}),n&&(0,t.jsx)("div",{id:"timelineDescription",className:"timeline-event-description",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsxs)("div",{className:"media",children:[(0,t.jsx)("div",{className:"media-left",children:(0,t.jsx)("figure",{className:"image is-48x48",children:(0,t.jsx)(a.default,{src:"/images/companies/".concat(n.companyImg),alt:"".concat(n.companyName,"} - ").concat(n.name),width:"60",height:"60"})})}),(0,t.jsxs)("div",{className:"media-content",children:[(0,t.jsx)("p",{className:"title is-4 has-text-left",children:n.name}),(0,t.jsx)("a",{href:n.companyRef,target:"blank",className:"subtitle is-6 has-text-left",children:n.companyName})]})]}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:n.description}}),(0,t.jsx)("br",{}),(0,t.jsx)("time",{children:"".concat(n.startDate," - ").concat("~"===n.endDate?"Present":n.endDate)})]})]})})})})]})})}},3409:function(e,s,n){"use strict";n.d(s,{default:function(){return d}});var t=n(7437),a=n(7138),i=n(6463),l=n(2265);let c={top:"fa-star",tech:"fa-code","soft-skill":"fa-user-friends","hard-skill":"fa-user-cog",deafult:"fa-file-lines"},r=e=>e.top?c.top:c[e.domain]||c.deafult;function d(e){var s;let{skills:n}=e,[c,d]=(0,l.useState)(null),o=(0,i.useSearchParams)().get("skill");return(0,l.useEffect)(()=>{let e=n.find(e=>e.key===o),s="nav";e&&(d(e),s="skills-section"),e||d(null),setTimeout(()=>{let e=document.querySelector(".".concat(s));e&&e.scrollIntoView({behavior:"smooth"})},200)},[o,n]),c&&(0,t.jsx)("div",{id:"mainSkill",className:"skills-section-item card main-skill",children:(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("div",{className:"media",children:(0,t.jsxs)("div",{className:"media-content",children:[(0,t.jsx)("span",{className:"icon is-large",children:(0,t.jsx)("span",{className:"fa ".concat(r(c)," fa-lg"),children:" "})}),(0,t.jsx)("p",{className:"skills-section-title is-4",children:null==c?void 0:c.name})]})}),(0,t.jsx)("div",{className:"content has-text-centered",children:(0,t.jsx)("div",{className:"tags mb-0",children:null==c?void 0:null===(s=c.subSkills)||void 0===s?void 0:s.map(e=>(0,t.jsx)("span",{className:"tag",children:e},e))})}),(0,t.jsx)(a.default,{href:"/about-me",className:"button has-icon is-light is-rounded is-outlined",children:(0,t.jsx)("span",{className:"icon is-large",children:(0,t.jsx)("i",{className:"fa fa-times fa-md"})})})]})})}},6648:function(e,s,n){"use strict";n.d(s,{default:function(){return a.a}});var t=n(5601),a=n.n(t)},7138:function(e,s,n){"use strict";n.d(s,{default:function(){return a.a}});var t=n(231),a=n.n(t)},6463:function(e,s,n){"use strict";var t=n(1169);n.o(t,"usePathname")&&n.d(s,{usePathname:function(){return t.usePathname}}),n.o(t,"useSearchParams")&&n.d(s,{useSearchParams:function(){return t.useSearchParams}})},5601:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{default:function(){return r},getImageProps:function(){return c}});let t=n(9920),a=n(497),i=n(8173),l=t._(n(1241));function c(e){let{props:s}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(s))void 0===n&&delete s[e];return{props:s}}let r=i.Image},2830:function(e,s,n){"use strict";function t(e){let s=document.querySelector(e);s&&s.scrollIntoView({behavior:"smooth"})}n.d(s,{l:function(){return t}})}},function(e){e.O(0,[173,231,971,23,744],function(){return e(e.s=8672)}),_N_E=e.O()}]);