"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"2. Debug Guide (How to know if my subnet is running?)",sidebar_position:2},i="Debug guide (how to know if my subnet is running?)",l={unversionedId:"deployment/debug_guide",id:"deployment/debug_guide",title:"Debug guide (how to know if my subnet is running?)",description:"## Subnet Nodes",source:"@site/docs/deployment/2_debug_guide.md",sourceDirName:"deployment",slug:"/deployment/debug_guide",permalink:"/xdc-subnet-docs/deployment/debug_guide",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"2. Debug Guide (How to know if my subnet is running?)",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"1. Launch a Subnet",permalink:"/xdc-subnet-docs/deployment/launch_subnet"},next:{title:"3. Deployment and Configs Explanation",permalink:"/xdc-subnet-docs/deployment/configs_explanation"}},p={},s=[{value:"Subnet Nodes",id:"subnet-nodes",level:2},{value:"Subnet Services",id:"subnet-services",level:2},{value:"Common Issues",id:"common-issues",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-guide-how-to-know-if-my-subnet-is-running"},"Debug guide (how to know if my subnet is running?)"),(0,o.kt)("h2",{id:"subnet-nodes"},"Subnet Nodes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check chainstate with curl, you can change ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8545")," to your subnet node's RPC PORT"),(0,o.kt)("p",{parentName:"li"},"Call latest block api, there should not be error and blocks should increase with time."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location \'http://localhost:8545\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{"jsonrpc":"2.0","method":"XDPoS_getV2BlockByNumber","params":["latest"],"id":1}\'\n')),(0,o.kt)("p",{parentName:"li"},"Check current peers, there should be NUM_SUBNET-1 peers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location \'http://localhost:8545\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\'\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check chainstate inside docker"),(0,o.kt)("p",{parentName:"li"},"Exec into the subnet container"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker exec -it <container_name> bash\n")),(0,o.kt)("p",{parentName:"li"},"Attach to the API process"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"XDC attach /work/xdcchain/XDC.ipc\n")),(0,o.kt)("p",{parentName:"li"},"Call current block api"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"XDPoS.getV2Block()\n")),(0,o.kt)("p",{parentName:"li"},"Check current peers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"admin.peers\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check logs, assuming log level 4 (default 2), you want to look for logs with blockNum, and blockNum should increase with time."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker logs -f <container_name> \n")))),(0,o.kt)("h2",{id:"subnet-services"},"Subnet Services"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bootnode"),(0,o.kt)("p",{parentName:"li"},"Check logs, you should see messages from all subnet nodes"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker logs -f <container_name> \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Relayer "),(0,o.kt)("p",{parentName:"li"},"Check logs, you should see blocks being periodically submitted"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker logs -f <container_name> \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stats-server"),(0,o.kt)("p",{parentName:"li"},"Check logs, in ",(0,o.kt)("inlineCode",{parentName:"p"},"<deployment folder>/stats-service/logs/debug"),", you should see block data and history data being received.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Frontend"),(0,o.kt)("p",{parentName:"li"},"Check logs or check errors through developer console in web browser."))),(0,o.kt)("h2",{id:"common-issues"},"Common Issues"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Subnet node does not boot with error log ",(0,o.kt)("inlineCode",{parentName:"p"},"Fatal: Error starting protocol stack: listen unix /work/xdcchain/XDC.ipc: bind: invalid argument")),(0,o.kt)("p",{parentName:"li"},"This is due to the volume mount path being too long. The mounth path is your current directory (also can check with ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," command). Please move the ",(0,o.kt)("inlineCode",{parentName:"p"},"generated")," folder to a shorter path and try again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Docker image startup fails with ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGKILL")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Error code: 137")," found in logs. (Issue found in Frontend image)"),(0,o.kt)("p",{parentName:"li"},"This error occurs because Docker ran Out Of Memory (OOM). You can increase the memory limit in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/settings/mac/#:~:text=lower%20the%20number.-,Memory,-.%20By%20default%2C%20Docker"},"Docker settings")))))}d.isMDXComponent=!0}}]);