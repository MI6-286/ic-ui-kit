/*! For license information please see 8536.540498a8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[8536],{"./dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./dist/esm/helpers-46e5291b.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var TabGroup=function(){function TabGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabGroup),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.r)(this,hostRef),this.buttonStateSet=!1,this.resizeObserverCallback=function(){null!==_this.tabGroupEl&&void 0!==_this.tabGroupEl||(_this.tabGroupEl=_this.host.shadowRoot.querySelector(".tabs-container")),_this.tabOverflow=(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_29__.z)(_this.tabGroupEl),_this.tabOverflow&&(_this.lastTabVisible=_this.tabGroupEl.offsetWidth+_this.tabGroupEl.scrollLeft>=_this.tabGroupEl.scrollWidth)},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.splitterEl)},this.scrollLeft=function(){_this.scrollTabIntoView(_this.getCurrentLeftTab()-1)},this.scrollRight=function(){_this.scrollTabIntoView(_this.getCurrentLeftTab()+1)},this.longScrollRight=function(){_this.scrollRight(),_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.longScrollLeft=function(){_this.scrollLeft(),_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.leftArrowMouseDownHandler=function(){_this.scrollDelay=window.setTimeout(_this.longScrollLeft,200)},this.rightArrowMouseDownHandler=function(){_this.scrollDelay=window.setTimeout(_this.longScrollRight,200)},this.arrowMouseUpHandler=function(){window.clearTimeout(_this.scrollDelay)},this.getCurrentLeftTab=function(){var index=_this.tabOffsets.findIndex((function(el){return el>_this.tabGroupEl.scrollLeft}));return index<0?0:index},this.scrollHandler=function(){window.clearTimeout(_this.isScrolling),_this.isScrolling=window.setTimeout(_this.scrollStopped,50)},this.scrollStopped=function(){!1===_this.buttonStateSet&&(_this.firstTabVisible=0===_this.tabGroupEl.scrollLeft,_this.lastTabVisible=_this.tabGroupEl.offsetWidth+_this.tabGroupEl.scrollLeft>=_this.tabGroupEl.scrollWidth),_this.buttonStateSet=!1},this.contextId="default",this.inline=!1,this.label=void 0,this.appearance="dark",this.firstTabVisible=!0,this.lastTabVisible=!1,this.tabOverflow=!1}var _scrollTabIntoView;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(TabGroup,[{key:"scrollTabIntoView",value:(_scrollTabIntoView=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(tabNumber){var newScrollPos;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.firstTabVisible=tabNumber<=0,newScrollPos=tabNumber<=0?0:this.tabOffsets[tabNumber-1],this.lastTabVisible=this.tabGroupEl.offsetWidth+newScrollPos>=this.tabGroupEl.scrollWidth,this.buttonStateSet=!0,this.tabGroupEl.scrollLeft=newScrollPos;case 5:case"end":return _context.stop()}}),_callee,this)}))),function scrollTabIntoView(_x){return _scrollTabIntoView.apply(this,arguments)})},{key:"tabFocusHandler",value:function tabFocusHandler(event){this.tabOverflow&&this.scrollTabIntoView(event.detail.position)}},{key:"componentDidLoad",value:function componentDidLoad(){this.tabs=Array.from(this.host.querySelectorAll("ic-tab"));var runningTotal=0;this.tabOffsets=this.tabs.map((function(tab){return runningTotal+=tab.offsetWidth})),(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_29__.c)(this.runResizeObserver),(0,_helpers_46e5291b_js__WEBPACK_IMPORTED_MODULE_29__.a)([{prop:this.label,propName:"label"}],"Tab List")}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.resizeObserver.disconnect()}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,_this2=this,inline=this.inline,appearance=this.appearance,label=this.label,firstTabVisible=this.firstTabVisible,lastTabVisible=this.lastTabVisible,tabOverflow=this.tabOverflow;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.H,{role:"tablist","aria-label":label,class:(_class={},_class.light=appearance===_types_dd515332_js__WEBPACK_IMPORTED_MODULE_30__.I.Light,_class["ic-tab-group-not-inline"]=!inline,_class)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{class:"ic-tab-group-container"},this.tabOverflow&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{"aria-hidden":"true",id:"scroll-container-left",class:(_class2={},_class2["scroll-container"]=!0,_class2.hidden=!tabOverflow,_class2.disabled=firstTabVisible,_class2)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-tooltip",{placement:"bottom-start",label:"Scroll left",target:"left-arrow"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("span",{id:"left-arrow",class:"scroll-arrow",innerHTML:'<svg width="8" height="10" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.0876 1.175L5.9126 0L0.912598 5L5.9126 10L7.0876 8.825L3.27093 5L7.0876 1.175Z"/>\n</svg>',onClick:this.scrollLeft,onMouseDown:this.leftArrowMouseDownHandler,onMouseUp:this.arrowMouseUpHandler})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("span",{class:"scroll-splitter-left"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{class:"tabs-container",ref:function ref(el){return _this2.tabGroupEl=el},onScroll:this.scrollHandler},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("slot",null)),this.tabOverflow&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{"aria-hidden":"true",id:"scroll-container-right",class:(_class3={},_class3["scroll-container"]=!0,_class3.hidden=!tabOverflow,_class3.disabled=lastTabVisible,_class3)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("span",{class:"scroll-splitter-right"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("ic-tooltip",{placement:"bottom-start",label:"Scroll right",target:"right-arrow"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("span",{id:"right-arrow",class:"scroll-arrow",innerHTML:'<svg width="8" height="10" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.0876 0L0.912598 1.175L4.72926 5L0.912598 8.825L2.0876 10L7.0876 5L2.0876 0Z"/>\n</svg>\n',onClick:this.scrollRight,onMouseDown:this.rightArrowMouseDownHandler,onMouseUp:this.arrowMouseUpHandler})))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.h)("div",{"aria-hidden":"true",class:(_class4={},_class4["ic-tab-splitter"]=!0,_class4.hidden=inline,_class4),ref:function ref(el){return _this2.splitterEl=el}}))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_28__.g)(this)}}]),TabGroup}();TabGroup.style=":host{--border-bottom-color:var(--ic-architectural-300);--splitter-color:var(--ic-architectural-100);--tab-scroll-focus:var(--ic-border-focus);--tab-scroll-fill:var(--ic-action-default);--tab-scroll-disabled-fill:var(--ic-architectural-300);--tab-scroll-hover:var(--ic-action-default-bg-hover);--tab-scroll-active:var(--ic-action-default-bg-active);display:block;margin-bottom:var(--ic-space-md);margin-left:calc(-1 * var(--ic-space-xs))}:host(.light){--splitter-color:var(--ic-architectural-white);--tab-scroll-focus:var(--ic-border-focus-dark);--tab-scroll-fill:var(--ic-action-light);--tab-scroll-disabled-fill:var(--ic-architectural-500);--tab-scroll-hover:var(--ic-action-dark-bg-hover);--tab-scroll-active:var(--ic-action-dark-bg-active)}:host([inline]){margin-bottom:0}.tabs-container{display:flex;flex-direction:row;overflow-y:hidden;overflow-x:scroll;height:100%;align-items:center;padding:var(--ic-space-xs);scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none;margin:calc(-1 * var(--ic-space-xs)) 0}.tabs-container::-webkit-scrollbar{display:none}.ic-tab-group-container{display:flex;align-items:center}:host(.light.ic-tab-group-not-inline){--border-bottom-color:var(--ic-architectural-white)}.scroll-container{display:flex}.scroll-container.hidden{display:none}.scroll-container:first-child{margin-left:var(--ic-space-xs)}.scroll-arrow{display:flex;width:2.25rem;height:2.25rem;margin:var(--ic-space-xxs) var(--ic-space-xxxs);align-items:center;justify-content:center;fill:var(--tab-scroll-fill);cursor:pointer}.scroll-arrow:focus{outline:var(--ic-hc-focus-outline)}.scroll-arrow:hover{background-color:var(--tab-scroll-hover)}.scroll-arrow:active{background-color:var(--tab-scroll-active)}.scroll-container.disabled .scroll-arrow{fill:var(--tab-scroll-disabled-fill);cursor:default}.scroll-container.disabled .scroll-arrow:hover,.scroll-container.disabled .scroll-arrow:active,.scroll-container.disabled .scroll-arrow:focus{background-color:unset;box-shadow:none}.scroll-container.disabled .ic-tooltip-container{display:none !important}.scroll-splitter-left,.scroll-splitter-right{display:flex;height:var(--ic-space-lg);width:0.063rem;margin-top:0.625rem;background-color:var(--splitter-color)}.scroll-splitter-left{margin-left:var(--ic-space-xxxs)}.scroll-splitter-right{margin-right:var(--ic-space-xxxs)}.scroll-container.disabled .scroll-splitter-left,.scroll-container.disabled .scroll-splitter-right{display:none}.ic-tab-splitter{display:block;background-color:var(--border-bottom-color);height:0.063rem;right:0;left:0;margin-left:var(--ic-space-xs)}.ic-tab-splitter.hidden{height:0}"}}]);