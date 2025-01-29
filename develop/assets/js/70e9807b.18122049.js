"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[7977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"Relayer Mode"},l="Relayer Mode",c={unversionedId:"components/relayer/relayer_mode",id:"components/relayer/relayer_mode",title:"Relayer Mode",description:"There are 2 relayer modes 'Full' and 'Lite' where the default mode is 'Full'. In the full mode, all subnet block headers are checkpointed to the parent chain. In the lite mode, only the Epoch and Epoch gap subnet block headers are checkpointed in the parent chain (blocks 451,900,1351,1800, and so on). The Epoch and Epoch gap blocks stores important information regarding subnet validators selection. For further reading please check Checkpoint Smart Contract.",source:"@site/docs/components/relayer/relayer_mode.md",sourceDirName:"components/relayer",slug:"/components/relayer/relayer_mode",permalink:"/xdc-subnet-docs/develop/components/relayer/relayer_mode",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Relayer Mode"},sidebar:"defaultSidebar",previous:{title:"Design",permalink:"/xdc-subnet-docs/develop/components/relayer/design"},next:{title:"API Library",permalink:"/xdc-subnet-docs/develop/category/api-library"}},i={},s=[{value:"Choosing Full or Lite Relayer",id:"choosing-full-or-lite-relayer",level:2},{value:"Deployment",id:"deployment",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relayer-mode"},"Relayer Mode"),(0,o.kt)("p",null,"There are 2 relayer modes 'Full' and 'Lite' where the default mode is 'Full'. In the full mode, all subnet block headers are checkpointed to the parent chain. In the lite mode, only the Epoch and Epoch gap subnet block headers are checkpointed in the parent chain (blocks 451,900,1351,1800, and so on). The Epoch and Epoch gap blocks stores important information regarding subnet validators selection. For further reading please check ",(0,o.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/develop/components/checkpoint_smart_contract/design"},"Checkpoint Smart Contract"),"."),(0,o.kt)("h2",{id:"choosing-full-or-lite-relayer"},"Choosing Full or Lite Relayer"),(0,o.kt)("p",null,"The Full mode has the advantage of being more 'complete' and more 'current' as blocks are getting confirmed in the parent chain almost immediately. The Lite mode has the advantage of using lower parent chain gas fee as the Relayer is only submitting to once every 450 blocks."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"In the deployment ",(0,o.kt)("inlineCode",{parentName:"p"},"RELAYER_MODE")," config is only relevant for Checkpoint Smart Contract (CSC) deployment. The relayer itself is able to detect the CSC type automatically and push block headers accordingly."))}u.isMDXComponent=!0}}]);