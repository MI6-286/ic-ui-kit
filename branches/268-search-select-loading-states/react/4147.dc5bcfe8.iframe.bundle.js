/*! For license information please see 4147.dc5bcfe8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4147],{"../web-components/dist/esm/ic-tab-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_context:()=>TabContext});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");var _index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../web-components/dist/esm/index-3b144b17.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabContext=function(){function TabContext(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabContext),(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__.r)(this,hostRef),this.tabSelect=(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__.c)(this,"tabSelect",7),this.icTabSelect=(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__.c)(this,"icTabSelect",7),this.newTabs=[],this.newTabPanels=[],this.linkTabs=function(){_this.tabs.forEach((function(tab,index){var tabId="ic-tab-"+index+"-context-"+_this.contextId,tabPanelId="ic-tab-panel-"+index+"-context-"+_this.contextId,shared="ic-tab--"+index+"-context-"+_this.contextId;tab.setAttribute("id",tabId),tab.tabId=shared,tab.tabPosition=index,tab.setAttribute("aria-controls",tabPanelId),tab.setAttribute("context-id",_this.contextId),_this.tabPanels[index].setAttribute("id",tabPanelId),_this.tabPanels[index].panelId=shared,_this.tabPanels[index].tabPosition=index,_this.tabPanels[index].setAttribute("aria-labelledby",tabId),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_30__.I.Light&&(tab.appearance=_this.appearance,_this.tabPanels[index].appearance=_this.appearance)})),_this.appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_30__.I.Light&&(_this.tabGroup.appearance=_this.appearance)},this.getChildren=function(){_this.tabGroup=Array.from(_this.host.querySelectorAll("ic-tab-group")).find((function(tabGroup){return tabGroup.contextId===_this.contextId})),_this.tabs=Array.from(_this.tabGroup.querySelectorAll("ic-tab")).filter((function(tab){return tab.contextId===_this.contextId})),_this.enabledTabs=_this.getEnabledTabs(),_this.tabPanels=Array.from(_this.host.querySelectorAll("ic-tab-panel"))},this.attatchEventListeners=function(){"automatic"===_this.activationType?_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavAutomatic(event)})):_this.tabGroup.addEventListener("keydown",(function(event){_this.handleKeyBoardNavManual(event)}))},this.setControlledMode=function(){void 0!==_this.selectedTabIndex&&(_this.controlledMode=!0,_this.selectedTab=_this.selectedTabIndex)},this.setInitialTab=function(){if(_this.controlledMode)_this.selectedTab=_this.selectedTabIndex,_this.focusedTabIndex=_this.selectedTabIndex;else{var firstEnabledTabIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[0].tabId}));_this.selectedTab=firstEnabledTabIndex,_this.focusedTabIndex=firstEnabledTabIndex}},this.configureTabs=function(){_this.enabledTabs.forEach((function(tab){tab.selected=tab.tabPosition===_this.selectedTab})),_this.tabPanels.forEach((function(tabPanel){tabPanel.selectedTab=_this.tabs[_this.selectedTab].tabId}))},this.getEnabledTabs=function(){return Array.from(_this.tabs).filter((function(child){return!child.disabled}))},this.getIndexOfEnabledTab=function(allTabsIndex){return _this.enabledTabs.findIndex((function(tab){return tab.tabId===_this.tabs[allTabsIndex].tabId}))},this.keyboardSelectTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.controlledMode?(_this.icTabSelect.emit({tabIndex:newIndex}),_this.tabSelect.emit({tabIndex:newIndex})):_this.selectedTab=newIndex},this.keyboardFocusTab=function(enabledTabIndex){var newIndex=_this.tabs.findIndex((function(tab){return tab.tabId===_this.enabledTabs[enabledTabIndex].tabId}));_this.enabledTabs[enabledTabIndex].focus(),_this.focusedTabIndex=newIndex},this.handleKeyBoardNavAutomatic=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.selectedTab),preventDefault=!0;switch(key){case"Home":_this.keyboardSelectTab(0);break;case"End":_this.keyboardSelectTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardSelectTab(enabledTabIndex+1):_this.keyboardSelectTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardSelectTab(enabledTabIndex-1):_this.keyboardSelectTab(_this.enabledTabs.length-1);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.handleKeyBoardNavManual=function(event){var key=event.key,enabledTabIndex=_this.getIndexOfEnabledTab(_this.focusedTabIndex),preventDefault=!0;switch(key){case"Home":_this.keyboardFocusTab(0);break;case"End":_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"ArrowRight":enabledTabIndex<_this.enabledTabs.length-1?_this.keyboardFocusTab(enabledTabIndex+1):_this.keyboardFocusTab(0);break;case"ArrowLeft":enabledTabIndex>0?_this.keyboardFocusTab(enabledTabIndex-1):_this.keyboardFocusTab(_this.enabledTabs.length-1);break;case"Enter":case" ":_this.keyboardSelectTab(_this.focusedTabIndex);break;default:preventDefault=!1}preventDefault&&event.preventDefault()},this.contextId="default",this.activationType="automatic",this.selectedTabIndex=void 0,this.appearance="dark",this.selectedTab=void 0}var _tabRemovedHandler;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabContext,[{key:"updateSelectedTab",value:function updateSelectedTab(newValue){this.selectedTab=newValue}},{key:"tabClickHandler",value:function tabClickHandler(event){void 0===this.selectedTabIndex&&event.detail.contextId===this.contextId&&(this.selectedTab=event.detail.position),this.icTabSelect.emit({tabIndex:event.detail.position}),this.tabSelect.emit({tabIndex:event.detail.position})}},{key:"tabCreatedHandler",value:function tabCreatedHandler(ev){var _this$tabs,_this$tabPanels;this.tabs&&this.tabPanels&&((ev.detail.setFocus?this.newTabs:this.newTabPanels).push(ev.detail),this.newTabs.length===this.newTabPanels.length&&((_this$tabs=this.tabs).push.apply(_this$tabs,_toConsumableArray(this.newTabs)),(_this$tabPanels=this.tabPanels).push.apply(_this$tabPanels,_toConsumableArray(this.newTabPanels)),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.newTabs=[],this.newTabPanels=[]))}},{key:"tabRemovedHandler",value:(_tabRemovedHandler=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(hadFocus){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.getChildren(),this.enabledTabs=this.getEnabledTabs(),this.linkTabs(),this.tabs[this.selectedTab]&&this.tabPanels[this.selectedTab]?(this.tabs[this.selectedTab].selected=!0,this.tabPanels[this.selectedTab].selectedTab=this.tabs[this.selectedTab].tabId):this.setInitialTab(),hadFocus&&this.tabs[this.selectedTab].setFocus();case 5:case"end":return _context.stop()}}),_callee,this)}))),function tabRemovedHandler(_x){return _tabRemovedHandler.apply(this,arguments)})},{key:"componentDidLoad",value:function componentDidLoad(){this.setControlledMode(),this.getChildren(),this.linkTabs(),this.attatchEventListeners(),this.setInitialTab(),this.configureTabs()}},{key:"componentWillUpdate",value:function componentWillUpdate(){this.configureTabs()}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this2=this;"manual"===this.activationType?this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavManual(event)})):this.tabGroup.removeEventListener("keydown",(function(event){return _this2.handleKeyBoardNavAutomatic(event)}))}},{key:"render",value:function render(){return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__.h)("slot",null)}},{key:"host",get:function get(){return(0,_index_3b144b17_js__WEBPACK_IMPORTED_MODULE_29__.g)(this)}}],[{key:"watchers",get:function get(){return{selectedTabIndex:["updateSelectedTab"]}}}]),TabContext}()},"../web-components/dist/esm/types-dd515332.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var IcInformationStatus,IcThemeForegroundEnum;__webpack_require__.d(__webpack_exports__,{I:()=>IcThemeForegroundEnum,a:()=>IcInformationStatus}),function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}))}}]);