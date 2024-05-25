/*! For license information please see 43935f3d.b27823d2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[39745],{350048:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(824246),i=r(511151);const o={id:"utility-apis",title:"Utility APIs",description:"Backstage Utility APIs"},s=void 0,a={id:"api/utility-apis",title:"Utility APIs",description:"Backstage Utility APIs",source:"@site/../docs/api/utility-apis.md",sourceDirName:"api",slug:"/api/utility-apis",permalink:"/docs/api/utility-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/api/utility-apis.md",tags:[],version:"current",frontMatter:{id:"utility-apis",title:"Utility APIs",description:"Backstage Utility APIs"},sidebar:"docs",previous:{title:"Figma",permalink:"/docs/dls/figma"},next:{title:"Package Index",permalink:"/docs/reference/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Consuming APIs",id:"consuming-apis",level:2},{value:"Supplying APIs",id:"supplying-apis",level:2},{value:"API Factories",id:"api-factories",level:3},{value:"Registering API Factories",id:"registering-api-factories",level:2},{value:"Core APIs",id:"core-apis",level:3},{value:"Plugin APIs",id:"plugin-apis",level:3},{value:"App APIs",id:"app-apis",level:3},{value:"Custom implementations of Utility APIs",id:"custom-implementations-of-utility-apis",level:2},{value:"Defining custom Utility APIs",id:"defining-custom-utility-apis",level:2},{value:"Architecture",id:"architecture",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",span:"span",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Backstage Plugins strive to be self-contained, with as much functionality as\npossible residing within the plugin itself and its backend APIs. There will\nhowever always be a need for plugins to communicate outside of its boundaries,\nboth with other plugins and the app itself."}),"\n",(0,t.jsxs)(n.p,{children:["Backstage provides two primary methods for plugins to communicate across their\nboundaries in client-side code. The first one being the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})})," API along with the\nextensions that it can provide, and the second one being Utility APIs. While the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})})," API is focused on\nthe initialization plugins and the app, the Utility APIs provide ways for\nplugins to communicate during their entire life cycle."]}),"\n",(0,t.jsx)(n.h2,{id:"consuming-apis",children:"Consuming APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Each Utility API is tied to an ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),"\ninstance, which is a global singleton object without any additional state or\nfunctionality, its only purpose is to reference Utility APIs.\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),"s are created using\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createapiref",children:(0,t.jsx)(n.code,{children:"createApiRef"})}),", which is exported\nby ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),". There are also\nmany predefined Utility APIs in\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),", and they're all\nexported with a name of the pattern ",(0,t.jsx)(n.code,{children:"*ApiRef"}),", for example\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,t.jsx)(n.code,{children:"errorApiRef"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To access one of the Utility APIs inside a React component, use the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.useapi",children:(0,t.jsx)(n.code,{children:"useApi"})})," hook exported by\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),", or the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.withapis",children:(0,t.jsx)(n.code,{children:"withApis"})})," HOC if you prefer class\ncomponents. For example, the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})})," can be accessed like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { useApi, errorApiRef } from '@backstage/core-plugin-api';\n\nexport const MyComponent = () => {\n  const errorApi = useApi(errorApiRef);\n\n  // Signal to the app that something went wrong, and display the error to the user.\n  const handleError = error => {\n    errorApi.post(error);\n  };\n\n  // the rest of the component ...\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that there is no explicit type given for\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})}),". This is because the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,t.jsx)(n.code,{children:"errorApiRef"})})," has the type\nembedded, and ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.useapi",children:(0,t.jsx)(n.code,{children:"useApi"})})," is able to infer\nthe type."]}),"\n",(0,t.jsxs)(n.p,{children:["Also note that consuming Utility APIs is not limited to plugins, it can be done\nfrom any component inside Backstage, including the ones in\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),". The only\nrequirement is that they are beneath the ",(0,t.jsx)(n.code,{children:"AppProvider"})," in the react tree."]}),"\n",(0,t.jsx)(n.h2,{id:"supplying-apis",children:"Supplying APIs"}),"\n",(0,t.jsx)(n.h3,{id:"api-factories",children:"API Factories"}),"\n",(0,t.jsxs)(n.p,{children:["APIs are registered in the form of\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apifactory",children:(0,t.jsx)(n.code,{children:"ApiFactory"})})," instances, which encapsulate\nthe process of instantiating an API. It is a collection of three things: the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})})," of the API to instantiate, a\nlist of all required dependencies, and a factory function that returns a new API\ninstance."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, this is the default\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apifactory",children:(0,t.jsx)(n.code,{children:"ApiFactory"})})," for the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"createApiFactory({\n  api: errorApiRef,\n  deps: { alertApi: alertApiRef },\n  factory: ({ alertApi }) => {\n    const errorApi = new ErrorAlerter(alertApi, new ErrorApiForwarder());\n    UnhandledErrorForwarder.forward(errorApi, { hidden: false });\n    return errorApi;\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example the ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,t.jsx)(n.code,{children:"errorApiRef"})}),"\nis our API, which encapsulates the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})})," type. The\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.alertapiref",children:(0,t.jsx)(n.code,{children:"alertApiRef"})})," is our single\ndependency, which we give the name ",(0,t.jsx)(n.code,{children:"alertApi"}),", and is then passed on to the\nfactory function, which returns an implementation of the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createapifactory",children:(0,t.jsx)(n.code,{children:"createApiFactory"})}),"\nfunction is a thin wrapper that enables TypeScript type inference. You may\nnotice that there are no type annotations in the above example, and that is\nbecause we're able to infer all types from the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),"s. TypeScript will make sure\nthat the return value of the ",(0,t.jsx)(n.code,{children:"factory"})," function matches the type embedded in\n",(0,t.jsx)(n.code,{children:"api"}),"'s ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),", in this case the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})}),". It will also match the\ntypes between the ",(0,t.jsx)(n.code,{children:"deps"})," and the parameters of the ",(0,t.jsx)(n.code,{children:"factory"})," function, again\nusing the type embedded within the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),"s."]}),"\n",(0,t.jsx)(n.h2,{id:"registering-api-factories",children:"Registering API Factories"}),"\n",(0,t.jsx)(n.p,{children:"The responsibility for adding Utility APIs to a Backstage app lies in three\ndifferent locations: the Backstage core library, each plugin included in the\napp, and the app itself."}),"\n",(0,t.jsx)(n.h3,{id:"core-apis",children:"Core APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Starting with the Backstage core library, it provides implementations for all of\nthe core APIs. The core APIs are the ones exported by\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),", such as the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,t.jsx)(n.code,{children:"errorApiRef"})})," and\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.configapiref",children:(0,t.jsx)(n.code,{children:"configApiRef"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The core APIs are loaded for any app created with\n",(0,t.jsx)(n.a,{href:"/docs/reference/app-defaults.createapp",children:(0,t.jsx)(n.code,{children:"createApp"})})," from\n",(0,t.jsx)(n.a,{href:"/docs/reference/app-defaults",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),", which means that\nthere is no step that needs to be taken to include these APIs in an app."]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-apis",children:"Plugin APIs"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the core APIs, plugins can define and export their own APIs.\nWhile doing so they should usually also provide default implementations of their\nown APIs, for example, the ",(0,t.jsx)(n.code,{children:"catalog"})," plugin exports ",(0,t.jsx)(n.code,{children:"catalogApiRef"}),", and also\nsupplies a default ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apifactory",children:(0,t.jsx)(n.code,{children:"ApiFactory"})})," of\nthat API using the ",(0,t.jsx)(n.code,{children:"CatalogClient"}),". There is one restriction to plugin-provided\nAPI Factories: plugins may not supply factories for core APIs, trying to do so\nwill cause the app to refuse to start."]}),"\n",(0,t.jsxs)(n.p,{children:["Plugins supply their APIs through the ",(0,t.jsx)(n.code,{children:"apis"})," option of\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const techdocsPlugin = createPlugin({\n  id: 'techdocs',\n  apis: [\n    createApiFactory({\n      api: techdocsStorageApiRef,\n      deps: { configApi: configApiRef },\n      factory({ configApi }) {\n        return new TechDocsStorageApi({\n          apiOrigin: configApi.getString('techdocs.storageUrl'),\n        });\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"app-apis",children:"App APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Lastly, the app itself is the final point where APIs can be added, and what has\nthe final say in what APIs will be loaded at runtime. The app may override the\nfactories for any of the core or plugin APIs, with the exception of the config,\napp theme, and identity APIs. These are static APIs that are tied into the\n",(0,t.jsx)(n.a,{href:"/docs/reference/app-defaults.createapp",children:(0,t.jsx)(n.code,{children:"createApp"})})," implementation, and\ntherefore not possible to override."]}),"\n",(0,t.jsx)(n.p,{children:"Overriding APIs is useful for apps that want to switch out behavior to tailor it\nto their environment. In some cases plugins may also export multiple\nimplementations of the same API, where they each have their own different\nrequirements on for example backend storage and surrounding environment."}),"\n",(0,t.jsx)(n.p,{children:"Supplying APIs to the app works just like for plugins:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  apis: [\n    /* ApiFactories */\n  ],\n  // ... other options\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A common pattern is to export a list of all APIs from ",(0,t.jsx)(n.code,{children:"apis.ts"}),", next to\n",(0,t.jsx)(n.code,{children:"App.tsx"}),". See the\n",(0,t.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/packages/app/src/apis.ts",children:"example app in this repo"}),"\nfor an example."]}),"\n",(0,t.jsx)(n.h2,{id:"custom-implementations-of-utility-apis",children:"Custom implementations of Utility APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Defining a custom implementation of a utility API is easy, you simply need to\nexport a class that ",(0,t.jsx)(n.code,{children:"implements"})," the target API, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export class IgnoringErrorApi implements ErrorApi {\n  post(error: ErrorApiError, context?: ErrorApiErrorContext) {\n    // ignore error\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IgnoringErrorApi"})," would then be imported in the app, and wired up like\nthis:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  apis: [\n    /* ApiFactories */\n    createApiFactory(errorApiRef, new IgnoringErrorApi()),\n\n    // OR\n    // If your API has dependencies, you use the object form\n    createApiFactory({\n      api: errorApiRef,\n      deps: { configApi: configApiRef },\n      factory({ configApi }) {\n        return new IgnoringErrorApi({\n          reportingUrl: configApi.getString('error.reportingUrl'),\n        });\n      },\n    }),\n  ],\n  // ... other options\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the above line will cause an error if ",(0,t.jsx)(n.code,{children:"IgnoreErrorApi"})," does not fully\nimplement the ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapi",children:(0,t.jsx)(n.code,{children:"ErrorApi"})}),", as it is\nchecked by the type embedded in the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,t.jsx)(n.code,{children:"errorApiRef"})})," at compile time."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-custom-utility-apis",children:"Defining custom Utility APIs"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins are free to define their own Utility APIs. Simply define the TypeScript\ninterface for the API, and create an\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})})," using\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createapiref",children:(0,t.jsx)(n.code,{children:"createApiRef"})})," exported from\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})}),". Also be sure to\nprovide at least one implementation of the API, and to declare a default factory\nfor the API in ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Custom Utility APIs can be either public or private, which is up to the plugin\nto choose. Private APIs do not expose an external API surface, and it's\ntherefore possible to make breaking changes to the API without affecting other\nusers of the plugin. If an API is made public however, it opens up for other\nplugins to make use of the API, and it also makes it possible for users for your\nplugin to override the API in the app. It is however important to maintain\nbackwards compatibility of public APIs, as you may otherwise break apps that are\nusing your plugin."}),"\n",(0,t.jsxs)(n.p,{children:["To make an API public, simply export the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})})," of the API, and any associated\ntypes. To make an API private, just avoid exporting the\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),", but still be sure to supply a\ndefault factory to ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createplugin",children:(0,t.jsx)(n.code,{children:"createPlugin"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Private APIs are useful for plugins that want to depend on other APIs outside of\nReact components, but not have to expose an entire API surface to maintain. When\nusing private APIs, it is fine to use the ",(0,t.jsx)(n.code,{children:"typeof"})," of an implementing class as\nthe type parameter passed to\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createapiref",children:(0,t.jsx)(n.code,{children:"createApiRef"})}),", while public APIs\nshould always define a separate TypeScript interface type."]}),"\n",(0,t.jsx)(n.p,{children:"Plugins may depend on APIs from other plugins, both in React components and as\ndependencies to API factories. Do however be sure to not cause circular\ndependencies between plugins."}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})})," instances mentioned above\nprovide a point of indirection between consumers and producers of Utility APIs.\nIt allows for plugins and components to depend on APIs in a type-safe way,\nwithout having a direct reference to a concrete implementation of the APIs. The\nApps are also given a lot of flexibility in what implementations to provide. As\nlong as they adhere to the contract established by an\n",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.apiref",children:(0,t.jsx)(n.code,{children:"ApiRef"})}),", they are free to choose any\nimplementation they want."]}),"\n",(0,t.jsxs)(n.p,{children:["The figure below shows the relationship between\n",(0,t.jsx)(n.span,{className:"textGreen textGreen",children:"different Apps"}),", that provide\n",(0,t.jsx)(n.span,{className:"textBlue textBlue",children:" different implementations"})," of the\n",(0,t.jsx)(n.span,{className:"textPurple textPurple",children:" FooApi"}),".\n",(0,t.jsx)(n.span,{className:"textYellow textYellow",children:" Components"})," within Plugins then access the\n",(0,t.jsx)(n.span,{className:"textPurple textPurple",children:" FooApi"})," via the\n",(0,t.jsx)(n.span,{className:"textRed textRed",children:" fooApiRef"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure showing the relationship between utility APIs, the apps that provide them, and the plugins that consume them",src:r(910122).Z+"",width:"296",height:"382"})}),"\n",(0,t.jsxs)(n.p,{children:["The current method for connecting Utility API providers and consumers is via the\nReact tree using an ",(0,t.jsx)(n.code,{children:"ApiProvider"}),", which is added to the ",(0,t.jsx)(n.code,{children:"AppProvider"})," of the\n",(0,t.jsx)(n.code,{children:"App"}),". In the future there may potentially be more ways to do this, in ways that\nare not tied to React. A design goal of the Utility APIs was to not have them\ndirectly tied to React."]}),"\n",(0,t.jsxs)(n.p,{children:["The indirection provided by Utility APIs also makes it straightforward to test\ncomponents that depend on APIs, and to provide a standard common development\nenvironment for plugins. A proper test wrapper with mocked API implementations\nis not yet ready, but it will be provided as a part of\n",(0,t.jsx)(n.a,{href:"/docs/reference/test-utils",children:(0,t.jsx)(n.code,{children:"@backstage/test-utils"})}),". It will provide mocked\nvariants of APIs, with additional methods for asserting a component's\ninteraction with the API."]}),"\n",(0,t.jsxs)(n.p,{children:["The common development environment for plugins is included in\n",(0,t.jsx)(n.a,{href:"/docs/reference/dev-utils",children:(0,t.jsx)(n.code,{children:"@backstage/dev-utils"})}),", where the exported\n",(0,t.jsx)(n.a,{href:"/docs/reference/dev-utils.createdevapp",children:(0,t.jsx)(n.code,{children:"createDevApp"})})," function creates an\napplication with implementations for all core APIs already present. Contrary to\nthe method for wiring up Utility API implementations in an app created with\n",(0,t.jsx)(n.a,{href:"/docs/reference/app-defaults.createapp",children:(0,t.jsx)(n.code,{children:"createApp"})}),",\n",(0,t.jsx)(n.a,{href:"/docs/reference/dev-utils.createdevapp",children:(0,t.jsx)(n.code,{children:"createDevApp"})})," uses automatic dependency\ninjection. This is to make it possible to replace any API implementation, and\nhaving that be reflected in dependents of that API."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},910122:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/utility-apis-fig1-9c402cdfb600310e725056dd4802b351.svg"},371426:(e,n,r)=>{var t=r(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,p=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:p,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),u=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function m(e,n,r){this.props=e,this.context=n,this.refs=x,this.updater=r||f}function y(){}function j(e,n,r){this.props=e,this.context=n,this.refs=x,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var A=j.prototype=new y;A.constructor=j,g(A,m.prototype),A.isPureReactComponent=!0;var b=Array.isArray,v=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var i,o={},s=null,a=null;if(null!=n)for(i in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)v.call(n,i)&&!I.hasOwnProperty(i)&&(o[i]=n[i]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:r,type:e,key:s,ref:a,props:o,_owner:P.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,i,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case t:c=!0}}if(c)return s=s(c=e),e=""===o?"."+_(c,0):o,b(s)?(i="",null!=e&&(i=e.replace(R,"$&/")+"/"),E(s,n,i,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),n.push(s)),1;if(c=0,o=""===o?".":o+":",b(e))for(var l=0;l<e.length;l++){var p=o+_(a=e[l],l);c+=E(a,n,i,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(a=e.next()).done;)c+=E(a=a.value,n,i,p=o+_(a,l++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function S(e,n,r){if(null==e)return e;var t=[],i=0;return E(e,t,"","",(function(e){return n.call(r,e,i++)})),t}function C(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},U={transition:null},F={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:U,ReactCurrentOwner:P};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=i,n.Profiler=s,n.PureComponent=j,n.StrictMode=o,n.Suspense=p,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=P.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)v.call(n,l)&&!I.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){c=Array(l);for(var p=0;p<l;p++)c[p]=arguments[p+2];i.children=c}return{$$typeof:r,type:e.type,key:o,ref:s,props:i,_owner:a}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=U.transition;U.transition={};try{e()}finally{U.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return T.current.useCallback(e,n)},n.useContext=function(e){return T.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return T.current.useDeferredValue(e)},n.useEffect=function(e,n){return T.current.useEffect(e,n)},n.useId=function(){return T.current.useId()},n.useImperativeHandle=function(e,n,r){return T.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return T.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return T.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return T.current.useMemo(e,n)},n.useReducer=function(e,n,r){return T.current.useReducer(e,n,r)},n.useRef=function(e){return T.current.useRef(e)},n.useState=function(e){return T.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return T.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return T.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(667294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);