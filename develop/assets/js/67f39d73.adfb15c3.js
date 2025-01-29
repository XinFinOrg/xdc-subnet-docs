"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[6986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Faucet",sidebar_position:2},s="Faucet",i={unversionedId:"usage/faucet",id:"usage/faucet",title:"Faucet",description:"In Subnets, all native tokens are initially assigned to the Grandmaster Wallet. To allow users to use the Subnet, we have to distribute the tokens out of the Grandmaster. We have provided convenient scripts for you to easily share Subnet tokens to your users.",source:"@site/docs/usage/2_faucet.md",sourceDirName:"usage",slug:"/usage/faucet",permalink:"/xdc-subnet-docs/develop/usage/faucet",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Faucet",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Subnet Management",permalink:"/xdc-subnet-docs/develop/usage/ui/management"},next:{title:"Blockchain Explorer",permalink:"/xdc-subnet-docs/develop/usage/explorer"}},u={},l=[{value:"One-time Transfer",id:"one-time-transfer",level:2},{value:"Faucet Server",id:"faucet-server",level:2},{value:"Transfer Subnet Funds Without Faucet",id:"transfer-subnet-funds-without-faucet",level:2},{value:"Faucet Source Code",id:"faucet-source-code",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"In Subnets, all native tokens are initially assigned to the Grandmaster Wallet. To allow users to use the Subnet, we have to distribute the tokens out of the Grandmaster. We have provided convenient scripts for you to easily share Subnet tokens to your users."),(0,a.kt)("h2",{id:"one-time-transfer"},"One-time Transfer"),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"generated")," directory run the Faucet script. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./scripts/faucet.sh\n")),(0,a.kt)("p",null,"The script will ask for your source wallet private key. You can use the Grandmaster Wallet(check ",(0,a.kt)("inlineCode",{parentName:"p"},"keys.json")," file for the private key).\nThen input the destination wallet and the transfer amount."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example",src:r(3983).Z,width:"2518",height:"1106"})),(0,a.kt)("h2",{id:"faucet-server"},"Faucet Server"),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"generated")," directory run the Faucet server script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./scripts/faucet-server.sh\n")),(0,a.kt)("p",null,"The script will ask for your source wallet private key. you can use the Grandmaster Wallet(check ",(0,a.kt)("inlineCode",{parentName:"p"},"keys.json")," for the private key).\nBy default, the server is hosted on port ",(0,a.kt)("inlineCode",{parentName:"p"},"5211")," of your machine. Then, on your browser, visit the url: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5211")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example",src:r(8073).Z,width:"2550",height:"676"})),(0,a.kt)("p",null,"Input your destination wallet or feel free to generate a random wallet via Address Generator."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example",src:r(690).Z,width:"2100",height:"938"})),(0,a.kt)("p",null,"Submit and wait for confirmation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example",src:r(8639).Z,width:"2088",height:"1076"})),(0,a.kt)("p",null,"You can host this on any server and allow users to make token requests by themselves."),(0,a.kt)("h2",{id:"transfer-subnet-funds-without-faucet"},"Transfer Subnet Funds Without Faucet"),(0,a.kt)("p",null,"The Faucet is not neccessary needed for funds transfer, most Ethereum compatible web3 wallet will also work. "),(0,a.kt)("p",null,"First import a new wallet with the Grandmaster private key. Then add a custom network pointing to your Subnet RPC URL. Finally, use the web3 wallet for tokens transfer."),(0,a.kt)("h2",{id:"faucet-source-code"},"Faucet Source Code"),(0,a.kt)("p",null,"Please feel free to check the below repositories for the Subnet Faucet source code."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XinFinOrg/XinFin-Node/tree/master/subnet/deployment-generator/scripts"},"https://github.com/XinFinOrg/XinFin-Node/tree/master/subnet/deployment-generator/scripts")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/XinFinOrg/XinFin-Node/tree/master/subnet/deployment-generator/src/faucet.js"},"https://github.com/XinFinOrg/XinFin-Node/tree/master/subnet/deployment-generator/src/faucet.js")))}d.isMDXComponent=!0},8073:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faucet-server1-6ab41031326285b2aef43725891ae042.png"},690:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faucet-server2-95093c5cece86788909eb72edc84d042.png"},8639:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faucet-server3-450ec20105040ea58c729c689f3b3910.png"},3983:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/faucet-4cf3625fc5f5bea0ffcf4c132e960cf6.png"}}]);