/*! For license information please see 04064861.670d762d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[45877],{23446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(785893),o=a(511151);const n={title:"CVE-2024-26150: Keeping Backstage safe and secure",author:"Ben Lambert, Spotify & Sam Nixon, Roadie"},s=void 0,i={permalink:"/blog/2024/02/28/security-notice",source:"@site/blog/2024-02-28-security-notice.mdx",title:"CVE-2024-26150: Keeping Backstage safe and secure",description:"TL;DR: For the Backstage maintainers, ensuring that the project is secure for every adopter and end user is one of our top priorities.",date:"2024-02-28T00:00:00.000Z",tags:[],readingTime:1.215,hasTruncateMarker:!0,authors:[{name:"Ben Lambert, Spotify & Sam Nixon, Roadie"}],frontMatter:{title:"CVE-2024-26150: Keeping Backstage safe and secure",author:"Ben Lambert, Spotify & Sam Nixon, Roadie"},unlisted:!1,prevItem:{title:"Backstage in Paris: Wrapping up BackstageCon and KubeCon + CloudNativeCon Europe 2024",permalink:"/blog/2024/03/27/backstagecon-kubecon-24"},nextItem:{title:"Wrap up: BackstageCon \u201823, KubeCon + Cloud Native NA",permalink:"/blog/2023/11/15/backstagecon-kubecon-23"}},c={authorsImageUrls:[void 0]},d=[];function u(e){const t={a:"a",code:"code",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TL;DR"}),": For the Backstage maintainers, ensuring that the project is secure for every adopter and end user is one of our top priorities.\nWith the recent discovery of ",(0,r.jsx)(t.a,{href:"https://www.cve.org/CVERecord?id=CVE-2024-26150",children:"CVE-2024-26150"}),", we've shipped fixes for versions > v1.15.0.\nPlease update your Backstage instance."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Backstage Security Audit &amp; Updates",src:a(51263).Z+"",width:"1200",height:"630"})}),"\n","\n",(0,r.jsxs)(t.p,{children:["Last week we were notified by ",(0,r.jsx)(t.a,{href:"https://roadie.io/",children:"Roadie"})," of a potential security vulnerability in the scaffolder that they had discovered during a third-party security audit.\nRoadie are running their scaffolder tasks in an isolated, ephemeral container to mitigate these kinds of issues, but as good citizens of the Backstage community, they alerted the Backstage maintainer team to make sure a fix was applied to the upstream project.\nUpon further investigation, it turned out that this was a more widespread issue with the ",(0,r.jsx)(t.code,{children:"resolveSafeChildPath"})," utility from the ",(0,r.jsx)(t.code,{children:"@backstage/backend-common"})," package, which is used to prevent path traversal exploits.\nThis issue has now been fixed, and also backported to cover releases up to almost a year old."]}),"\n",(0,r.jsxs)(t.p,{children:["Please make sure that you have updated your Backstage instance to the latest v.1.23.2, or that you are using ",(0,r.jsx)(t.code,{children:"@backstage/backend-common"})," ",(0,r.jsx)(t.code,{children:"v0.21.1"}),", ",(0,r.jsx)(t.code,{children:"v0.19.10"}),", or ",(0,r.jsx)(t.code,{children:"v0.20.2"}),".\nIf you are building backend plugins for Backstage and do any local file operations, make sure you use the ",(0,r.jsx)(t.code,{children:"resolveSafeChildPath"})," utility, as this check is quite tricky to implement correctly \ud83d\ude0a"]}),"\n",(0,r.jsx)(t.p,{children:"Thanks to Roadie and the team for reporting this issue, and making the Backstage community safe!"}),"\n",(0,r.jsxs)(t.p,{children:["For more information you can check out the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/security/advisories/GHSA-2fc9-xpp8-2g9h",children:"security advisory"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},675251:(e,t,a)=>{var r=a(667294),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var r,n={},d=null,u=null;for(r in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:u,props:n,_owner:i.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},785893:(e,t,a)=>{e.exports=a(675251)},51263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/backstage-security-audit-d0283e8fb2fc980642fd9b4be7057cf5.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var r=a(667294);const o={},n=r.createContext(o);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);