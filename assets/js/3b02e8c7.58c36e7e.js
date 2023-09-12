"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"3. Deployment and Configs Explanation",sidebar_position:3},i="Configs Explanation",l={unversionedId:"deployment/configs_explanation",id:"deployment/configs_explanation",title:"Configs Explanation",description:"The kickstart file 'docker.env'",source:"@site/docs/deployment/3_configs_explanation.md",sourceDirName:"deployment",slug:"/deployment/configs_explanation",permalink:"/xdc-subnet-docs/deployment/configs_explanation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"3. Deployment and Configs Explanation",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"2. Debug Guide (How to know if my subnet is running?)",permalink:"/xdc-subnet-docs/deployment/debug_guide"},next:{title:"Subnet Deployment Generator Changelog",permalink:"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog"}},s={},c=[{value:"The kickstart file &#39;docker.env&#39;",id:"the-kickstart-file-dockerenv",level:2},{value:"Required Parameters",id:"required-parameters",level:3},{value:"Files under &#39;generated&#39; directory",id:"files-under-generated-directory",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configs-explanation"},"Configs Explanation"),(0,a.kt)("h2",{id:"the-kickstart-file-dockerenv"},"The kickstart file 'docker.env'"),(0,a.kt)("p",null,"  docker.env is the basefile which kickstarts all configs generation"),(0,a.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,a.kt)("p",null,"  Below is an example of the mimimum file required for configs generation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#deployment config\nCONFIG_PATH=~/XinFin-Node/subnet/deployment-generator\n\n#subnet config\nNETWORK_NAME=testsubnet\nNUM_SUBNET=5\nNUM_MACHINE=3\nMAIN_IP=192.168.1.1\n\n#parentchain config\nPARENTCHAIN=devnet\nPARENTCHAIN_WALLET=0x0000000000000000000000000000000000000000\nPARENTCHAIN_WALLET_PK=0x0000000000000000000000000000000000000000000000000000000000000000\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CONFIG_PATH - This is the path to the directory where you want to put the generated configs. Most likely it is your current directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"NETWORK_NAME - Your subnet Name")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"NUM_SUBNET - The total number of subnet nodes you want to deploy.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"NUM_MACHINE - The number of machines that you want to deploy the subnet across. The generated configs will evenly spread the nodes across the machines.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"MAIN_IP - The IP address of the main machine(machine1) which will host subnet services and the bootnode. This IP should be known to all other machines, could be private or public (preferrably private).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"PARENTCHAIN - The Parentchain where the Checkpoint Smart Contract (CSC) will be deployed and where relayer will push block headers. Available: 'devnet', 'testnet', 'mainnet'. (Currently only 'devnet' is supported)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"PARENTCHAIN_WALLET_PK - The private key of Parentchain wallet"),(0,a.kt)("h3",{parentName:"li",id:"optional-parameters"},"Optional Parameters"),(0,a.kt)("h4",{parentName:"li",id:"versions-config"},"Versions Config"),(0,a.kt)("p",{parentName:"li"},"By default, generated configs will use the current stable version which is hard coded in the generator (not latest). To customize version the specific component version parameter can be included. Set the value to the docker image version tag you want (eg. VERSION_SUBNET=v0.1.3, VERSION_RELAYER=latest). Brose ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/xinfinorg"},"XDC dockerhub")," to check the available docker images. Below are the available parameters for versioning."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"VERSION_SUBNET\nVERSION_BOOTNODE\nVERSION_OBSERVER\nVERSION_RELAYER\nVERSION_STATS\nVERSION_FRONTEND\n")),(0,a.kt)("h4",{parentName:"li",id:"other-configs"},"Other Configs"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RELAYER_MODE - 'full' or 'lite', this effects the type of Checkpoint Smart Contract(CSC) that is deployed. Defaults to 'full'. Please check ",(0,a.kt)("a",{parentName:"li",href:"#WIP"},"here")," for relayer mode documentation. "),(0,a.kt)("li",{parentName:"ul"},"GRANDMASTER_PK - The Grandmaster privatekey, only one is allowed. Random if not provided."),(0,a.kt)("li",{parentName:"ul"},"SUBNETS_PK - Subnet nodes' privatekeys, multiple keys separated by comma(,). Number of keys must equal NUM_SUBNET. Randomized by default. "),(0,a.kt)("li",{parentName:"ul"},"NETWORK_ID - If you want a specific number, must be between 1-65536. Default is random."),(0,a.kt)("li",{parentName:"ul"},"SERVICES_SECRET - A shared secret for authentication between the stats service and the subnet nodes. Default to a random string."),(0,a.kt)("li",{parentName:"ul"},"SLEEP - Debug parameter, set a timer(in seconds) to prevent the generator docker image from shutting down after generation finished. ")),(0,a.kt)("h2",{id:"files-under-generated-directory"},"Files under 'generated' directory"),(0,a.kt)("p",null,"After the generator has succesfully run, all generated files will be under 'generated' directory. These files can be edited if you would like to further customize your subnet. Below is a description of each generated file and how it is used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"commands.txt - The generated instructions to launch the subnet."),(0,a.kt)("li",{parentName:"ul"},"docker-compose.yml - The main deployment file. Includes docker images versions, startup commands, network configurations."),(0,a.kt)("li",{parentName:"ul"},"docker-compose.env - The config injection path that docker uses to point to other *.env files."),(0,a.kt)("li",{parentName:"ul"},"genesis.json - The 'block 0' of the Subnet. Initializes the blockchain for subnet nodes."),(0,a.kt)("li",{parentName:"ul"},"genesis_input.yml - An intermediate file used in config generation."),(0,a.kt)("li",{parentName:"ul"},"deployment.config.json - The config file used for CSC deployment."),(0,a.kt)("li",{parentName:"ul"},"keys.json - Generated keypairs or custom keypairs by user input. Please be mindful to remove this file and keep the credentials securely."),(0,a.kt)("li",{parentName:"ul"},"common.env - The config parameters for Subnet services."),(0,a.kt)("li",{parentName:"ul"},"subnet*.env - The config parameters for each Subnet node.")))}d.isMDXComponent=!0}}]);