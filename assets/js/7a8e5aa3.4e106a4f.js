/*! For license information please see 7a8e5aa3.4e106a4f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[787129],{948018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify"},s=void 0,a={id:"overview/adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify",source:"@site/../docs/overview/adopting.md",sourceDirName:"overview",slug:"/overview/adopting",permalink:"/docs/overview/adopting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/adopting.md",tags:[],version:"current",frontMatter:{id:"adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify"},sidebar:"docs",previous:{title:"The Spotify Story",permalink:"/docs/overview/background"},next:{title:"Release & Versioning Policy",permalink:"/docs/overview/versioning-policy"}},c={},l=[{value:"Organizational setup",id:"organizational-setup",level:2},{value:"Internal evangelization",id:"internal-evangelization",level:2},{value:"Tactics",id:"tactics",level:3},{value:"KPIs and metrics",id:"kpis-and-metrics",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This document outlines some general best practices that have been key to\nBackstage's success inside Spotify. Every organization is different and some of\nthese learnings will therefore not be applicable for your company. We are hoping\nthat this can become a living document, and strongly encourage you to contribute\nback whatever learnings you gather while adopting Backstage inside your company."}),"\n",(0,r.jsx)(t.h2,{id:"organizational-setup",children:"Organizational setup"}),"\n",(0,r.jsxs)(t.p,{children:["The true value of Backstage is unlocked when it becomes ",(0,r.jsx)(t.em,{children:"THE"})," developer portal\nat your company. As such it is important to recognize that you will need a\ncentral team that owns your Backstage deployment and treats it like a product."]}),"\n",(0,r.jsxs)(t.p,{children:["This team will have ",(0,r.jsx)(t.strong,{children:"four"})," primary objectives:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Maintain and operate your deployment of Backstage. This includes customer\nsupport, infrastructure, CI/CD and, as your Backstage product grows, on-call\nsupport."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Drive adoption of customers (developers at your company)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Work with senior tech leadership and architects to ensure your organization's\nbest practices for software development are encoded into a set of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Software Templates"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Evangelize Backstage as a central platform towards other\ninfrastructure/platform teams."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"internal-evangelization",children:"Internal evangelization"}),"\n",(0,r.jsx)(t.p,{children:'The last objective deserves more attention, since it is the least obvious, but\nalso the most critical to successfully creating a consolidated platform. When\ndone right, Backstage acts as a "platform of platforms" or marketplace between\ninfra/platform teams and end-users:'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"pop",src:n(949936).Z+"",width:"1180",height:"660"})}),"\n",(0,r.jsxs)(t.p,{children:["While anyone at your company can contribute to the platform, the vast majority\nof work will be done by teams that also have internal engineers as their\ncustomers. The central team should treat these ",(0,r.jsx)(t.em,{children:"contributing teams"})," as customers\nof the platform as well."]}),"\n",(0,r.jsxs)(t.p,{children:["These teams should be able to autonomously deliver value directly to their\ncustomers. This is done primarily by building ",(0,r.jsx)(t.a,{href:"/docs/plugins/",children:"plugins"}),".\nContributing teams should themselves treat their plugins as, or part of, the\nproducts they maintain."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Case study: Inside Spotify we have a team that owns our CI platform. They not\nonly maintain the pipelines and build servers, but also expose their product\nin Backstage through a plugin. Since they also\n",(0,r.jsx)(t.a,{href:"/docs/plugins/call-existing-api",children:"maintain their own API"}),", they can improve\ntheir product by iterating on API and UI in lockstep. Because the plugin\nfollows our ",(0,r.jsx)(t.a,{href:"/docs/dls/design",children:"platform design guidelines"})," their customers get\na CI experience that is consistent with other tools on the platform (and users\ndon't have to become experts in Jenkins)."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"tactics",children:"Tactics"}),"\n",(0,r.jsx)(t.p,{children:"Examples of tactics we have used to evangelize Backstage internally:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Arrange "Lunch & Learns" and seminars. Frequently offer teams interested in\nBackstage development to come to a seminar where you show, for example, how to\nbuild a plugin from scratch.'}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Embedding. As contributing teams start development of their first plugin it is\noften very appreciated to have one person from the central team come over and\n"embed" for a Sprint or two.'}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Hack days. Backstage-focused Hackathons or hack days is a fun way to get\npeople into plugin development."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Show & tell meetings. In order to build an internal community around Backstage\nwe have quarterly meetings where anyone working on Backstage is invited to\npresent their work. This is not only a great way to get early feedback, but\nalso helps coordination between teams that are building overlapping\nexperiences."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Provide metrics. Add instrumentation to your Backstage deployment and make\nmetrics available to contributing teams. At Spotify, we have even gone so far\nas to send out weekly digest emails showing how usage metrics have changed for\nindividual plugins."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Pro-actively identify new plugins. Reach out to teams that own internal UIs or\nplatforms that you think would make sense to consolidate into Backstage."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"kpis-and-metrics",children:"KPIs and metrics"}),"\n",(0,r.jsx)(t.p,{children:"These are some of the metrics that you can use to verify if Backstage has a\nsuccessful impact on your software development process:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Onboarding time"})," Time until new engineers are productive. At Spotify we\nmeasure this as the time until the employee has merged their 10th PR (this\nmetric was down 55% two years after deploying Backstage). Even though you may\nnot be onboarding engineers at a rapid pace, this metric is a great proxy for\nthe overall complexity of your ecosystem. Reducing it will therefore benefit\nyour whole engineering organization, not just new joiners."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Number of merges per developer/day"})," Less time spent jumping between\ndifferent tools and looking for information means more time to focus on\nshipping code. A second level of bottlenecks can be identified if you\ncategorize contributions by domain (services, web, data, etc)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deploys to production"})," Cousin to the metric above: How many times does an\nengineer push changes into production."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"MTTR"})," With clear ownership of all the pieces in your microservices\necosystem and all tools integrated into one place, Backstage makes it quicker\nfor teams to find the root cause of failures, and fix them."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Context switching"}),' Reducing context switching can help engineers stay in\nthe "zone". We measure the number of different tools an engineer has to\ninteract with in order to get a certain job done (e.g. push a change, follow\nit into production and validate it did not break anything).']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"T-shapedness"})," A\n",(0,r.jsx)(t.a,{href:"https://medium.com/@jchyip/why-t-shaped-people-e8706198e437",children:"T-shaped"}),"\nengineer is someone that is able to contribute to different domains of\nengineering. Teams with T-shaped people have fewer bottlenecks and can\ntherefore deliver more consistently. Backstage makes it easier to be T-shaped\nsince tools and infrastructure are consistent between domains, and information\nis available centrally."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"eNPS"})," Surveys asking about how productive people feel, how easy it is to\nfind information and overall satisfaction with internal tools."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Fragmentation"})," ",(0,r.jsx)(t.em,{children:"(Experimental)"})," Backstage\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Software Templates"})," help drive\nstandardization in your software ecosystem. By measuring the variance in\ntechnology between different software components it is possible to get a sense\nof the overall fragmentation in your ecosystem. Examples could include:\nframework versions, languages, deployment methods and various code quality\nmeasurements."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, these proxy metrics can be used to validate the success of\nBackstage as ",(0,r.jsx)(t.em,{children:"the"})," platform:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Nr of teams that have contributed at least one plugin (currently 63 inside\nSpotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Nr of total plugins (currently 135 inside Spotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"% of contributions coming from outside the central Backstage team (currently\n85% inside Spotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Traditional metrics such as visits (MAU, DAU, etc) and page views. Currently\n~50% of all Spotifiers use Backstage on a monthly basis, even though the\npercentage of engineers is below 50%. Most engineers actually use Backstage on\na daily basis."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Again, any feedback is appreciated. Please use the Edit button at the bottom of the\npage to make a suggestion."}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsx)(t.p,{children:'It might be tempting to try to optimize Backstage usage and\n"engagement". Even though you want to consolidate all your tooling and technical\ndocumentation in Backstage, it is important to remember that time spent in\nBackstage is time not spent writing code \ud83d\ude43'})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},949936:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pop-347af6a9b37c1529dbef0fa692798aad.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=b.prototype=new v;x.constructor=b,m(x,g.prototype),x.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+B(c,0):i,j(s)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var u=i+B(a=e[l],l);c+=C(a,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=C(a=a.value,t,o,u=i+B(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null},O={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);