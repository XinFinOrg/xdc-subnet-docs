"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:4},l="Subnet Deployment Generator Changelog",i={unversionedId:"deployment/subnet_deployment_generator_changelog",id:"deployment/subnet_deployment_generator_changelog",title:"Subnet Deployment Generator Changelog",description:"v0.1.4",source:"@site/docs/deployment/subnet_deployment_generator_changelog.md",sourceDirName:"deployment",slug:"/deployment/subnet_deployment_generator_changelog",permalink:"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"3. Deployment and Configs Explanation",permalink:"/xdc-subnet-docs/deployment/configs_explanation"},next:{title:"UI Usage Guide",permalink:"/xdc-subnet-docs/category/ui-usage-guide"}},c={},u=[{value:"v0.1.4",id:"v014",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subnet-deployment-generator-changelog"},"Subnet Deployment Generator Changelog"),(0,o.kt)("h3",{id:"v014"},"v0.1.4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added custom keys functionality\n'docker.env' now accepts GRANDMASTER_PK and SUBNETS_PK. Where SUBNETS_PK can have multiple keys separated by a comma ','. Number of subnet keys must equal NUM_SUBNET. Keys are randomized if not provided."),(0,o.kt)("li",{parentName:"ul"},"Added RELAYER_MODE in 'docker.env', CSC deployment will select from 'full' or 'lite' smart contract, default 'full'."),(0,o.kt)("li",{parentName:"ul"},"Automate CHECKPOINT_CONTRACT copy-paste step (manual action no longer required)."),(0,o.kt)("li",{parentName:"ul"},"PARENTCHAIN_WALLET is no longer required in 'docker.env', the address will be derived from PARENTCHAIN_WALLET_PK. "),(0,o.kt)("li",{parentName:"ul"},"Disabled parentchain observer in docker-compose.yml, unused for now (due to long startup time).")))}d.isMDXComponent=!0}}]);