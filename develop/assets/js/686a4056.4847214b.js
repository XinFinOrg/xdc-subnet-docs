"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,m=s["".concat(l,".").concat(g)]||s[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"5. Upgrading the Subnet",sidebar_position:5},i="Upgrading the Subnet",p={unversionedId:"deployment/upgrading_the_subnet",id:"deployment/upgrading_the_subnet",title:"Upgrading the Subnet",description:"Upgrading the Checkpoing Smart Contract (CSC)",source:"@site/docs/deployment/5_upgrading_the_subnet.md",sourceDirName:"deployment",slug:"/deployment/upgrading_the_subnet",permalink:"/xdc-subnet-docs/deployment/upgrading_the_subnet",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"5. Upgrading the Subnet",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"4. Blockchain Explorer",permalink:"/xdc-subnet-docs/deployment/blockchain_explorer"},next:{title:"Subnet Deployment Generator Changelog",permalink:"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog"}},l={},c=[{value:"Upgrading the Checkpoing Smart Contract (CSC)",id:"upgrading-the-checkpoing-smart-contract-csc",level:2},{value:"Upgrading Subnet deployment",id:"upgrading-subnet-deployment",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-the-subnet"},"Upgrading the Subnet"),(0,o.kt)("h2",{id:"upgrading-the-checkpoing-smart-contract-csc"},"Upgrading the Checkpoing Smart Contract (CSC)"),(0,o.kt)("p",null,"The CSC is deployed as an upgradable smart contract. For further reading please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XinFinOrg/XDC-CSC"},"XDC-CSC"),". Upgrading can only be done by the original wallet that deployed the CSC. Under ",(0,o.kt)("inlineCode",{parentName:"p"},"generated")," directory, specify the private key in ",(0,o.kt)("inlineCode",{parentName:"p"},"common.env")," with the ENV ",(0,o.kt)("inlineCode",{parentName:"p"},"PARENTNET_WALLET_PK"),". Then run the following command, specify the CSC version to upgrade with ",(0,o.kt)("inlineCode",{parentName:"p"},"<CSC_VERSION>")," as a docker tag. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --env-file common.env   \\\n  -v $(pwd)/../generated/:/app/config       \\\n  --network host                             \\\n  --entrypoint './docker/upgrade_csc.sh' xinfinorg/csc:<CSC_VERSION>\n")),(0,o.kt)("p",null,"If the CSC upgrade keeps failing, it could be due to these 2 common reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The wallet is out of funds."),(0,o.kt)("li",{parentName:"ol"},"The wallet is being used somewhere else causing a transaction clash, eg. the Relayer is using the same wallet.")),(0,o.kt)("h2",{id:"upgrading-subnet-deployment"},"Upgrading Subnet deployment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"generated")," directory. "),(0,o.kt)("li",{parentName:"ol"},"Change the docker image tag of your desired component(s)."),(0,o.kt)("li",{parentName:"ol"},"Run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  docker compose --env-file docker-compose.env --profile machine1 up -d\n  docker compose --env-file docker-compose.env --profile services up -d\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag is not recommended since not all components version are not guaranteed to be compatible."))}u.isMDXComponent=!0}}]);