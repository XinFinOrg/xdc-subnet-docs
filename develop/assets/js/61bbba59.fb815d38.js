"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Specs",sidebar_position:2},i=void 0,c={unversionedId:"components/checkpoint_smart_contract/spec",id:"components/checkpoint_smart_contract/spec",title:"spec",description:"APIs",source:"@site/docs/components/checkpoint_smart_contract/spec.md",sourceDirName:"components/checkpoint_smart_contract",slug:"/components/checkpoint_smart_contract/spec",permalink:"/xdc-subnet-docs/components/checkpoint_smart_contract/spec",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Specs",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Design",permalink:"/xdc-subnet-docs/components/checkpoint_smart_contract/design"},next:{title:"Relayer",permalink:"/xdc-subnet-docs/category/relayer"}},l={},s=[{value:"APIs",id:"apis",level:2},{value:"Algorithms and Rules",id:"algorithms-and-rules",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apis"},"APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Functions that have access restriction to authorized client"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reviseValidatorSet(address[], int, int)"),": Update subnet block header signer list at destined height"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"receiveHeader(bytes[])"),": Validate and store subnet headers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Functions that open for public access"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getHeader(byte32)"),": Return entire block header in RLP encoding format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getHeaderByNumber(int)"),": Return block hash and number at input height"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getHeaderConfirmationStatus(byte32)"),": Return block committing status"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getMainnetBlockNumber(byte32)"),": Return mainnet block number that processed the subnet block header"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getLatestBlocks()"),": Return latest committed block and submitted block")))),(0,a.kt)("h2",{id:"algorithms-and-rules"},"Algorithms and Rules"),(0,a.kt)("p",null,"Block header verification follows two principle rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Received block should have consistent round number and block number associated with its parent block."),(0,a.kt)("li",{parentName:"ol"},"Received block should have enough certificates signed by the list of block signers.")),(0,a.kt)("p",null,"Once a block header is checked and stored, the contract will examine whether there are 3 consecutive blocks that have 3 consetive round number. If that is the case, all of the direct ancestor blocks that are prior to these 3 consecutive blocks will be committed."))}d.isMDXComponent=!0}}]);