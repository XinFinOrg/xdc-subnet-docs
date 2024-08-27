"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Design",l={unversionedId:"components/checkpoint_smart_contract/design",id:"components/checkpoint_smart_contract/design",title:"Design",description:"Overview",source:"@site/docs/components/checkpoint_smart_contract/design.md",sourceDirName:"components/checkpoint_smart_contract",slug:"/components/checkpoint_smart_contract/design",permalink:"/xdc-subnet-docs/components/checkpoint_smart_contract/design",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Checkpoint Smart Contract",permalink:"/xdc-subnet-docs/category/checkpoint-smart-contract"},next:{title:"Specs",permalink:"/xdc-subnet-docs/components/checkpoint_smart_contract/spec"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Specifics",id:"specifics",level:2},{value:"Checkpoint",id:"checkpoint",level:3},{value:"Lite Checkpoint",id:"lite-checkpoint",level:3},{value:"Upgradeable module",id:"upgradeable-module",level:3},{value:"ProxyGateway Smart Contract",id:"proxygateway-smart-contract",level:4}],s={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design"},"Design"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The primary function of the parent chain smart contract is to receive block data from the subnet node, verify it, and store it. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Noteworthy aspects:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Every block data received will be verified to ensure the signature is signed by validators and has passed with 2/3 of the votes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the gap block occurring in the middle of each epoch, a ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," may appear, which will be selected for temporary storage.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In each epoch block, a ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," may appear, which will choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," selected during the gap as validators from the current block to the next epoch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Only three consecutive blocks of ",(0,r.kt)("inlineCode",{parentName:"p"},"roundNumber")," can confirm the previous block, and ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnetNum")," will change from -1 to ",(0,r.kt)("inlineCode",{parentName:"p"},"block.number")," once the block is committed."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview",src:a(2152).Z,width:"1366",height:"800"})),(0,r.kt)("h2",{id:"specifics"},"Specifics"),(0,r.kt)("h3",{id:"checkpoint"},"Checkpoint"),(0,r.kt)("p",null,"The Checkpoint contract implements a blockchain checkpoint system, which verifies and stores block header information for subnetworks. Here are some key functions and features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The contract defines several data structures, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HeaderInfo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Validators")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockLite"),". These structures are used to store block header information, validator information, and more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The contract employs several mappings and other variables to track the current block header tree, committed blocks, validator set, latest block, and so forth.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The contract's constructor receives the initial validator set, the genesis block header, the first block header, etc., as parameters and initializes the contract state based on these.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveHeader")," function allows users to submit new block headers. This function will verify the meta information of the block header (like block number, parent block hash, etc.), the signature certificate, and update the block's submission status when specific conditions are met.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Functions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"setLookup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"setCommittedStatus"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"checkUniqueness"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"checkCommittedStatus")," are used to update or check the contract's internal status.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"getHeader"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getHeaderByNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getLatestBlocks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentValidators")," enable users to query block header information, validator sets, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"splitSignature")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recoverSigner")," functions are used to recover the signer's address from the signature, which is necessary for verifying the block header signature."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic Flow:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Checkpoint uses the following parameters for contract construction:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address[]  initial_validator_set "),": List of initial validator addresses"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes genesis_header"),": block0HexRLP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes block1_header"),": block1HexRLP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uint64 gap"),": GAP block number on public chain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uint64 epoch"),": EPOCH block number on public chain"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Relayers need to fetch every block data from the subnet node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users can retrieve the information of each block using methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"getHeader"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Checkpoint",src:a(2810).Z,width:"2238",height:"924"})),(0,r.kt)("h3",{id:"lite-checkpoint"},"Lite Checkpoint"),(0,r.kt)("p",null,"Lite Checkpoint is a lightweight block header checkpoint. It implements several functions, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting the initial validator set and related parameters during contract initialization."),(0,r.kt)("li",{parentName:"ul"},"Checking whether the submitted block header meets the requirements."),(0,r.kt)("li",{parentName:"ul"},"Receiving and processing submitted block headers."),(0,r.kt)("li",{parentName:"ul"},"Submitting the block header and block header by block number."),(0,r.kt)("li",{parentName:"ul"},"Retrieving uncommitted block header information."),(0,r.kt)("li",{parentName:"ul"},"Accessing specific block header information."),(0,r.kt)("li",{parentName:"ul"},"Fetching the current and next round of epoch blocks according to the index."),(0,r.kt)("li",{parentName:"ul"},"Getting the latest block information."),(0,r.kt)("li",{parentName:"ul"},"Accessing the current set of validators.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic Flow:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lite Checkpoint uses the following parameters for contract construction:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address[]  initialValidatorSet "),": List of initial validator addresses"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes block1"),": block1HexRLP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uint64 gap"),": GAP block number on public chain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uint64 epoch"),": EPOCH block number on public chain"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Relayers only need to fetch gap/epoch block data and fetch the following consecutive ",(0,r.kt)("inlineCode",{parentName:"p"},"roundNumber")," blocks to confirm the signed gap/epoch block from the subnet node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users can get gap/epoch block information from methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"getHeader"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lite Checkpoint",src:a(7688).Z,width:"2204",height:"932"})),(0,r.kt)("h3",{id:"upgradeable-module"},"Upgradeable module"),(0,r.kt)("p",null,"The Upgradeable module mainly revolves around the concept of transparent proxies and the ability to upgrade the underlying logic contracts without changing the contract's address."),(0,r.kt)("h4",{id:"proxygateway-smart-contract"},"ProxyGateway Smart Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyGateway")," smart contract plays a central role in this module. It inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyAdmin")," and primarily serves the purpose of creating and managing transparent upgradeable proxies (",(0,r.kt)("inlineCode",{parentName:"p"},"TransparentUpgradeableProxy"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key Components and Functionalities"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cscProxies"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A mapping used to store two types of transparent upgradeable proxies.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),' represents "full"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),' represents "lite"'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CreateProxy Event"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Emitted whenever a new transparent upgradeable proxy is created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"createProxy Function"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates a new ",(0,r.kt)("inlineCode",{parentName:"li"},"TransparentUpgradeableProxy"),"."),(0,r.kt)("li",{parentName:"ul"},"Emits the ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateProxy")," event upon creation."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"createFullProxy Function"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Specifically designed for creating a transparent upgradeable proxy of type "full".'),(0,r.kt)("li",{parentName:"ul"},'Checks if a "full" type proxy already exists.'),(0,r.kt)("li",{parentName:"ul"},"Ensures the provided logic contract has a ",(0,r.kt)("inlineCode",{parentName:"li"},"MODE"),' function that returns "full".'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"createLiteProxy Function"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Designed for creating proxies of type "lite".'),(0,r.kt)("li",{parentName:"ul"},'Checks if a "lite" type proxy already exists.'),(0,r.kt)("li",{parentName:"ul"},"Ensures the provided logic contract has a ",(0,r.kt)("inlineCode",{parentName:"li"},"MODE"),' function that returns "lite".')))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(848).Z,width:"1822",height:"1000"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic Flow:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Initialization"),":"),(0,r.kt)("p",{parentName:"li"},"The process begins with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyGateway"),' contract, which serves as a central hub for creating transparent upgradeable proxies. The contract owner has the capability to create either "full" or "lite" proxies.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Proxy Creation"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The owner calls either the ",(0,r.kt)("inlineCode",{parentName:"li"},"createFullProxy")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"createLiteProxy")," function based on the desired type of proxy."),(0,r.kt)("li",{parentName:"ul"},"The specified logic contract's ",(0,r.kt)("inlineCode",{parentName:"li"},"MODE")," is checked to ensure it matches the desired proxy type."),(0,r.kt)("li",{parentName:"ul"},"A new ",(0,r.kt)("inlineCode",{parentName:"li"},"TransparentUpgradeableProxy")," is created with the specified logic contract, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProxyGateway")," as the admin, and any necessary initialization data."),(0,r.kt)("li",{parentName:"ul"},"The new proxy's address is stored in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cscProxies")," mapping under its corresponding type."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateProxy")," event is emitted to log the creation of the new proxy."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Upgrading the Proxy"),":"),(0,r.kt)("p",{parentName:"li"},"When there's a need to upgrade the underlying logic of the proxy (for instance, to introduce new features or fix bugs):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A new logic contract version is deployed to the network."),(0,r.kt)("li",{parentName:"ul"},"The owner (or authorized entity) of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProxyGateway")," contract calls the inherited ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrade")," function from ",(0,r.kt)("inlineCode",{parentName:"li"},"ProxyAdmin")," to point the proxy to the new logic contract."),(0,r.kt)("li",{parentName:"ul"},"The proxy now delegates all calls to the new logic contract, while still retaining all its previous storage and state."),(0,r.kt)("li",{parentName:"ul"},"This enables the system to evolve and implement new functionalities without migrating to a new contract address or affecting the contract's stored data."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interacting with the Proxy"),":"),(0,r.kt)("p",{parentName:"li"},"Users and other contracts can interact with the proxy just as they would with a regular contract. However, behind the scenes, all function calls and data accesses are delegated to the current logic contract that the proxy points to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Querying and Data Access"),":"),(0,r.kt)("p",{parentName:"li"},"Users and contracts can still query data, access functions, or invoke transactions on the proxy's address. The proxy transparently delegates these to the underlying logic contract, ensuring continuity of operations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Advanced Management"),":"),(0,r.kt)("p",{parentName:"li"},"Through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyAdmin")," functionality, the owner can further manage the proxy, such as changing the admin or even downgrading to a previous version of the logic contract if needed."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(5869).Z,width:"2012",height:"1180"})))}m.isMDXComponent=!0},2810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc-checkpoint-36d3f42583ecf743412f5f6b1b1cc943.jpg"},7688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc-litecheckpoint-cbb2a69680785f10c23607a35edf201d.jpg"},2152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc-overview-51bb08c762cab3e54f221fc92569c874.jpg"},848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc-upgradeable-overview-14253c682a52f16297aea204d11e31b6.png"},5869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc-upgradeable-upgrade-6cacdcde125ee9862d2c34f915882cf6.png"}}]);