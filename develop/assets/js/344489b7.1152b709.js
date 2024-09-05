"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"1. Launch a Subnet",sidebar_position:1},i="Launch a Subnet",l={unversionedId:"deployment/launch_subnet",id:"deployment/launch_subnet",title:"Launch a Subnet",description:"Requirements",source:"@site/docs/deployment/1_launch_subnet.md",sourceDirName:"deployment",slug:"/deployment/launch_subnet",permalink:"/xdc-subnet-docs/deployment/launch_subnet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1. Launch a Subnet",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Deployment Guide",permalink:"/xdc-subnet-docs/category/deployment-guide"},next:{title:"2. FAQ",permalink:"/xdc-subnet-docs/deployment/faq"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Generate Subnet Configs With UI",id:"generate-subnet-configs-with-ui",level:2},{value:"Removing Subnet",id:"removing-subnet",level:2},{value:"Shutdown Subnet",id:"shutdown-subnet",level:3},{value:"Deleting Subnet",id:"deleting-subnet",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"launch-a-subnet"},"Launch a Subnet"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OS: Linux. Only Linux is supported for full deployment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OS: Mac is only supported for single machine testing environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker, docker compose V2. For manual installation of docker compose V2 please refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/linux/"},"https://docs.docker.com/compose/install/linux/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Recommended Hardware (per single Subnet node):"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CPU: 2 Core"),(0,a.kt)("li",{parentName:"ul"},"Memory: 4 GB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Web3 wallet with funds. For testing we have faucets provided:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.apothem.network/"},"https://faucet.apothem.network/")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.blocksscan.io/"},"https://faucet.blocksscan.io/"))))),(0,a.kt)("h2",{id:"generate-subnet-configs-with-ui"},"Generate Subnet Configs With UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pull ",(0,a.kt)("inlineCode",{parentName:"p"},"generator.sh")," script from the generator Github repo"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"curl -O https://raw.githubusercontent.com/XinFinOrg/XinFin-Node/generator-ui-concept/subnet/deployment-generator/scripts/generate.sh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the configuration generator, this will start a local webserver"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"chmod +x generate.sh\n./generate.sh\ncd generated\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000/")," in your browser. If you are running the generator on a remote server you can first use ssh tunnel: ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -N -L localhost:3000:localhost:3000 <username>@<ip_address> -i <private_key_file>"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Config the Subnet options per your requirement.\n",(0,a.kt)("img",{alt:"UI",src:n(9665).Z,width:"1996",height:"1444"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"follow the generated instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt"),". In general, the steps are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start Subnet Nodes"),(0,a.kt)("li",{parentName:"ul"},"deploy CSC"),(0,a.kt)("li",{parentName:"ul"},"deploy XDC-Zero (optional)"),(0,a.kt)("li",{parentName:"ul"},"start Subnet Services (relayer, stats-server, frontend)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once successfully deployed, you can check out ",(0,a.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/usage/homepage"},"UI usage guide")))),(0,a.kt)("h2",{id:"removing-subnet"},"Removing Subnet"),(0,a.kt)("h3",{id:"shutdown-subnet"},"Shutdown Subnet"),(0,a.kt)("p",null,"  Under ",(0,a.kt)("inlineCode",{parentName:"p"},"generated")," directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose --env-file docker-compose.env --profile services down \ndocker compose --env-file docker-compose.env --profile machine1 down\n")),(0,a.kt)("h3",{id:"deleting-subnet"},"Deleting Subnet"),(0,a.kt)("p",null,"  Remove ",(0,a.kt)("inlineCode",{parentName:"p"},"xdcchain*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bootnodes"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"stats-service")," directories\nWarning: this cannot be undone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf xdcchain* bootnodes stats-service\n")))}d.isMDXComponent=!0},9665:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ui-e7c533977a38edd5e02dfe8f1ef54a8f.png"}}]);