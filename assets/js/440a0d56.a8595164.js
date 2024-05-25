/*! For license information please see 440a0d56.a8595164.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[432686],{725700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(785893),s=a(511151);const o={title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},i=void 0,r={permalink:"/blog/2020/08/05/announcing-backstage-software-templates",source:"@site/blog/2020-08-05-announcing-backstage-software-templates.mdx",title:"Announcing Backstage Software Templates",description:"TL;DR Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start.",date:"2020-08-05T00:00:00.000Z",tags:[],readingTime:3.895,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"https://twitter.com/stalund"}],frontMatter:{title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},unlisted:!1,prevItem:{title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",permalink:"/blog/2020/09/08/announcing-tech-docs"},nextItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"}},c={authorsImageUrls:[void 0]},l=[{value:"Balancing autonomy and standardization",id:"balancing-autonomy-and-standardization",level:2},{value:"Backstage Software Templates: Push-button deployment",id:"backstage-software-templates-push-button-deployment",level:2},{value:"The getting started guide gets automated",id:"the-getting-started-guide-gets-automated",level:3},{value:"Golden Paths pave the way",id:"golden-paths-pave-the-way",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Step 1: Choose a template",id:"step-1-choose-a-template",level:3},{value:"Step 2: Run!",id:"step-2-run",level:3},{value:"View new components in the Service Catalog",id:"view-new-components-in-the-service-catalog",level:3},{value:"Define your standards",id:"define-your-standards",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TL;DR"})," Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start."]}),"\n",(0,n.jsx)("video",{width:"100%",height:"100%",controls:!0,children:(0,n.jsx)("source",{src:"/video/software-templates.mp4",type:"video/mp4"})}),"\n","\n",(0,n.jsx)(t.h2,{id:"balancing-autonomy-and-standardization",children:"Balancing autonomy and standardization"}),"\n",(0,n.jsx)(t.p,{children:"At Spotify, we\u2019ve always believed in the speed and ingenuity that comes from having autonomous development teams. But as we learned firsthand, the faster you grow, the more fragmented and complex your software ecosystem becomes. And then everything slows down again."}),"\n",(0,n.jsx)(t.p,{children:"By centralizing services and standardizing your tooling, Backstage streamlines your development environment from end to end. Instead of restricting autonomy, standardization frees your engineers from infrastructure complexity. So you can return to building and scaling, quickly and safely."}),"\n",(0,n.jsx)(t.p,{children:"Today we are releasing one of the key features that helps balance autonomy and standardization: templates for creating software."}),"\n",(0,n.jsx)(t.h2,{id:"backstage-software-templates-push-button-deployment",children:"Backstage Software Templates: Push-button deployment"}),"\n",(0,n.jsx)(t.p,{children:"Backstage Software Templates automate and standardize the process of creating software components. To show you how they work, we created four sample templates to get you started \u2014 just configure them to fit your tooling and off you go:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create React App Template"})," \u2014 create a new CRA website project"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Golang Microservice"})," \u2014 create a Golang repo with this template built by members of the Go community"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"React SSR Template"})," \u2014 create a website powered with Next.js"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Spring Boot GRPC"})," \u2014 create a simple microservice using gRPC and Spring Boot Java"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"the-getting-started-guide-gets-automated",children:"The getting started guide gets automated"}),"\n",(0,n.jsx)(t.p,{children:"Since the templates can be customized to integrate with your existing infrastructure, it\u2019s easy to start a new project without ever having to leave Backstage. Let\u2019s say you\u2019re building a microservice. With three clicks in Backstage, you\u2019ll have a new Spring Boot project with your repo automatically configured on GitHub and your CI already running the first build."}),"\n",(0,n.jsx)(t.h3,{id:"golden-paths-pave-the-way",children:"Golden Paths pave the way"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize Backstage Software Templates to fit your organization\u2019s standards. Using Go instead of Java? CircleCI instead of Jenkins? Serverless instead of Kubernetes? GCP instead of AWS? ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/adding-templates",children:"Make your own recipes for any software component"})," and your best practices will be baked right in."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsxs)(t.p,{children:["The sample Software Templates are available under ",(0,n.jsx)(t.code,{children:"/create"}),". If you're setting up Backstage for the first time, follow ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"Getting Started with Backstage"})," and go to ",(0,n.jsx)(t.code,{children:"http://localhost:3000/create"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"available-templates",src:a(484202).Z+"",width:"1600",height:"1264"})}),"\n",(0,n.jsx)(t.h3,{id:"step-1-choose-a-template",children:"Step 1: Choose a template"}),"\n",(0,n.jsx)(t.p,{children:"When you select a template that you want to create, you can ask for different input variables. These are then passed to the templater internally."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"template-form",src:a(451966).Z+"",width:"1600",height:"1010"})}),"\n",(0,n.jsxs)(t.p,{children:["After filling in these variables, additional fields will appear so Backstage can be used. You\u2019ll specify the owner, which is a ",(0,n.jsx)(t.code,{children:"user"})," in the Backstage system, and the ",(0,n.jsx)(t.code,{children:"Location"}),", which must be a GitHub organization and a non-existing GitHub repository name, formatted as ",(0,n.jsx)(t.code,{children:"organization/reponame"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"step-2-run",children:"Step 2: Run!"}),"\n",(0,n.jsx)(t.p,{children:"Once you've entered values and confirmed, you'll then get a modal with live progress of what is currently happening with the creation of your template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create-component",src:a(389653).Z+"",width:"1600",height:"1010"})}),"\n",(0,n.jsx)(t.p,{children:"It shouldn't take too long before you see a success screen. At this point, a piece of \u201cHello World\u201d software has been created in your repo, and the CI automatically picks it up and starts building the code."}),"\n",(0,n.jsx)(t.p,{children:"Your engineers don\u2019t have to bother with setting up underlying infrastructure, it\u2019s all built into the template. They can start focusing on delivering business value."}),"\n",(0,n.jsx)(t.h3,{id:"view-new-components-in-the-service-catalog",children:"View new components in the Service Catalog"}),"\n",(0,n.jsxs)(t.p,{children:["New components, of course, get added automatically to the Backstage Service Catalog. After creation, you'll see the ",(0,n.jsx)(t.code,{children:"View in Catalog"})," button, which will take you to the registered component in the catalog:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"service-catalog",src:a(34169).Z+"",width:"1600",height:"1010"})}),"\n",(0,n.jsx)(t.h2,{id:"define-your-standards",children:"Define your standards"}),"\n",(0,n.jsxs)(t.p,{children:["Backstage ships with four example templates, but since these are likely not the (only) ones you want to promote inside your company, the next step is to add ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/",children:"your own templates"}),". Using Backstage\u2019s Software Templates feature, it\u2019s easy to help your engineers get started building software with your organization\u2019s best practices built-in."]}),"\n",(0,n.jsx)(t.p,{children:"We have learned that one of the keys to getting these standards adopted is to keep an open process. Templates are code. By making it clear to your engineers that you are open to pull requests, and that teams with different needs can add their own templates, you are on the path of striking a good balance between autonomy and standardization."}),"\n",(0,n.jsxs)(t.p,{children:["If you have feedback or questions, please open a ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"GitHub issue"}),", ping us on ",(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord chat"})," or send us an email at ",(0,n.jsx)(t.a,{href:"mailto:backstage-interest@spotify.com",children:"backstage-interest@spotify.com"})," \ud83d\ude4f"]}),"\n",(0,n.jsxs)(t.p,{children:["To get regular product updates and news about the Backstage community, sign up for the ",(0,n.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"Backstage newsletter"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,a)=>{var n=a(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var n,o={},l=null,d=null;for(n in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},34169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-b10a775f2c88046c71c20487db909a4f.png"},389653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-component-189edb4e40e9bb3a0d4868f15f2a301a.png"},451966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-form-139431b353a24b6f2ef5fc46063df0a8.png"},484202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/templates-52eb1681e1c84d251921e3a498ad220b.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var n=a(667294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);