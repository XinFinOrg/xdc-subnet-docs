"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[8865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Design",l={unversionedId:"components/relayer/design",id:"components/relayer/design",title:"Design",description:"Background",source:"@site/docs/components/relayer/design.md",sourceDirName:"components/relayer",slug:"/components/relayer/design",permalink:"/xdc-subnet-docs/develop/components/relayer/design",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Relayer",permalink:"/xdc-subnet-docs/develop/category/relayer"},next:{title:"Relayer Mode",permalink:"/xdc-subnet-docs/develop/components/relayer/relayer_mode"}},s={},c=[{value:"Background",id:"background",level:2},{value:"High-level architectural diagram",id:"high-level-architectural-diagram",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design"},"Design"),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"There is a strong demand from the banking industry to adopt XDC. One of the key requirements to enter the field is the ability to support subnets so that banks are able to keep the sensitive transactions within their own domain (privacy concern) but at the same time, have the ability to continuously audit the result (hash) of the subnet transactions on the XDC mainnet (security concern)."),(0,a.kt)("p",null,"Since the mainnet and subnets will be running as two independent node cluster, we will need to figure out a method to bridge them together to perform the auditing feature mentioned above. This is where \u201crelayer\u201d is coming into play."),(0,a.kt)("h2",{id:"high-level-architectural-diagram"},"High-level architectural diagram"),(0,a.kt)("p",null,"At high level, the relayer is able to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pull necessary data from both subnet and mainnet"),(0,a.kt)("li",{parentName:"ol"},"Process and submit subnet block data as smart contract transactions into mainnet"),(0,a.kt)("li",{parentName:"ol"},"When subnet masternodes list changes, report the new list and change height to the mainnet using grand-master account.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"architectural-diagram",src:n(6831).Z,width:"1040",height:"1450"})))}p.isMDXComponent=!0},6831:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relayer-diagram-31123beff3fd3569d14fd0e057bcd361.jpg"}}]);