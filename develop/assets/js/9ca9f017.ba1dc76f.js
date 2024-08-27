"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},c="Architecture",a={unversionedId:"introduction/architecture",id:"introduction/architecture",title:"Architecture",description:"The architecture consists of the following four main components owned by the customer:",source:"@site/docs/introduction/architecture.md",sourceDirName:"introduction",slug:"/introduction/architecture",permalink:"/xdc-subnet-docs/introduction/architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Motivation & Design Rationale",permalink:"/xdc-subnet-docs/introduction/intro"},next:{title:"Components",permalink:"/xdc-subnet-docs/category/components"}},s={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The architecture consists of the following four main components owned by the customer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a subnet driven by the XDC2.0 consensus engine, with configurable parameters"),(0,o.kt)("li",{parentName:"ol"},"a relayer program that checkpoints subnet block headers to the XDC mainnet"),(0,o.kt)("li",{parentName:"ol"},"a smart contract in the XDC mainnet that verifies and records the checkpoints and maintain the subnet header chain "),(0,o.kt)("li",{parentName:"ol"},"an API library for the wallet, which enables additional protection of subnet transactions through extra confirmation in the XDC mainnet ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:r(9674).Z,width:"3267",height:"1984"})))}d.isMDXComponent=!0},9674:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-f182c3ae406c319348d5c8c6ba3bc9de.svg"}}]);