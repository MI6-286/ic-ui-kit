(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({119:"components-ic-dialog-ic-dialog-stories-mdx",348:"components-ic-classification-banner-ic-classification-bannner-stories-mdx",438:"components-ic-footer-ic-footer-stories-mdx",953:"components-ic-badge-ic-badge-stories-mdx",1194:"components-ic-status-tag-ic-status-tag-stories-mdx",1332:"components-ic-search-bar-ic-search-bar-stories-mdx",1608:"components-ic-chip-ic-chip-stories-mdx",1645:"components-ic-checkbox-group-ic-checkbox-group-stories-mdx",1814:"components-ic-theme-ic-theme-stories-mdx",2284:"components-ic-data-list-ic-data-list-stories-mdx",2309:"components-ic-text-field-ic-text-field-stories-mdx",2662:"components-ic-breadcrumb-group-ic-breadcrumb-group-stories-mdx",2717:"components-ic-loading-indicator-ic-loading-indicator-stories-mdx",2828:"components-ic-card-ic-card-stories-mdx",3558:"components-ic-hero-ic-hero-stories-mdx",4196:"components-ic-stepper-ic-stepper-stories-mdx",4598:"components-ic-toggle-button-group-ic-toggle-button-group-stories-mdx",4700:"components-ic-popover-menu-ic-popover-menu-stories-mdx",4754:"components-ic-alert-ic-alert-stories-mdx",4800:"components-ic-skeleton-ic-skeleton-stories-mdx",5001:"components-ic-select-ic-select_(single)-stories-mdx",5105:"components-ic-toggle-button-ic-toggle-button-stories-mdx",5188:"components-ic-page-header-ic-page-header-stories-mdx",5192:"patterns-top-nav-content-footer-stories-mdx",5273:"components-ic-button-ic-button-stories-mdx",5328:"components-ic-link-ic-link-stories-mdx",5413:"components-ic-accordion-ic-accordion-stories-mdx",5613:"components-ic-tab-context-ic-tabs-stories-mdx",5981:"components-ic-empty-state-ic-empty-state-stories-mdx",6217:"components-ic-select-ic-select_(searchable)-stories-mdx",6222:"components-ic-pagination-ic-pagination-stories-mdx",6401:"patterns-z-index-stories-mdx",6912:"components-ic-tooltip-ic-tooltip-stories-mdx",7840:"components-ic-back-to-top-ic-back-to-top-stories-mdx",7894:"components-ic-typography-ic-typography-stories-mdx",8088:"components-ic-toast-ic-toast-stories-mdx",8234:"components-ic-top-navigation-ic-top-navigation-stories-mdx",8490:"components-ic-side-navigation-ic-side-navigation-stories-mdx",8806:"components-ic-radio-group-ic-radio-group-stories-mdx",9232:"components-ic-switch-ic-switch-stories-mdx",9441:"components-ic-section-container-ic-section-container-stories-mdx"}[chunkId]||chunkId)+"."+{33:"db0c1fd5",119:"54035994",348:"8960b28b",421:"f977b0e6",438:"6b0aaf51",525:"d50084fb",554:"3ed4f26b",731:"90f5bd5d",758:"10f60dec",925:"3923f4fb",953:"fe2b46a2",1194:"f6595097",1293:"402ebac2",1323:"80640ba6",1332:"33f0bc62",1370:"aeb12526",1410:"26400e19",1608:"89f4b67c",1616:"e2b8cd92",1645:"663cb946",1729:"b6960f68",1763:"c176154d",1769:"1e356b2c",1814:"08a5d3ff",1885:"afd814ca",2119:"984fb74f",2163:"cfbdca2d",2284:"d6d87331",2285:"16988b54",2309:"4ed0a931",2662:"87e5d4c0",2717:"0ccb320e",2769:"b50741cc",2797:"bae20704",2828:"f40bbf16",3384:"2db370e9",3426:"e58afd3a",3558:"bdec0dda",3727:"df11e26f",3891:"44657e71",4062:"fd1706a6",4100:"023c60f3",4183:"a4f16662",4196:"0b0e6c00",4376:"6512572b",4397:"778e73d7",4598:"f7473f41",4700:"8db11cfe",4726:"02738906",4754:"cbdc1c14",4800:"1ff0cae7",4844:"4a49afa9",5001:"daa45f8e",5105:"d5a10701",5188:"72275c32",5192:"a0ed5bc7",5273:"63fc00e2",5276:"f5c18dec",5328:"2e2cf34c",5369:"09eefb63",5413:"4e99f13c",5541:"13c07c1c",5613:"c94afe79",5718:"a546b8b7",5837:"5d31c369",5913:"cc6294ce",5981:"747cac9d",6015:"860750f8",6137:"7d359cf9",6217:"ef3873ab",6222:"d6727294",6283:"97014f06",6401:"74ca36e1",6607:"0372be30",6772:"29e72d81",6912:"89dffde1",6929:"913b0e36",6983:"f6914d59",7258:"cb6a3214",7438:"224e7394",7462:"d29b2325",7840:"bcbef38d",7894:"5364687b",7917:"57a87b4c",8044:"aa89178e",8088:"16ac7f2f",8115:"75f049fc",8164:"15d803d0",8234:"886a4c26",8254:"28255917",8265:"eb4fbe83",8341:"52a7c119",8419:"19c8411a",8490:"ca44ba72",8515:"f4a7e10a",8552:"eb6d2497",8555:"34956e26",8797:"2f551b3f",8806:"3da558fb",8864:"b852be88",8905:"b97f93fe",8983:"f8ee5f91",9115:"4373b2ac",9176:"0b69d420",9181:"3b0aa319",9183:"6d9dfc14",9232:"77bf1a85",9234:"fd5307d9",9441:"4d5295ad",9506:"b4e123f5",9562:"120a7c67",9613:"ba0331d0",9699:"995db01d",9732:"1bb478fe"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@ukic/web-components:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@ukic/web-components:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();