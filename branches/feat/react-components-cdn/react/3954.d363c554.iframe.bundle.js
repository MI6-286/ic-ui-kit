"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3954],{"../web-components/dist/esm/ic-back-to-top.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_back_to_top:()=>BackToTop});__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-90721b3c.js"),_helpers_c332acf8_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-components/dist/esm/helpers-c332acf8.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var BackToTop=function(){function BackToTop(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BackToTop),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.topObserver=null,this.setTargetElVisible=function(visible){_this.targetElVisible=visible},this.setFooterVisible=function(visible){_this.checkForClassificationBanner(),"undefined"!=typeof window&&0===window.scrollY?_this.footerVisible=!1:_this.footerVisible=visible},this.targetElObserverCallback=function(entries){_this.setTargetElVisible(entries[0].isIntersecting)},this.footerObserverCallback=function(entries){_this.setFooterVisible(entries[0].isIntersecting)},this.findTargetEl=function(target){var targetElement=null;return null==target?console.log("Error: No target ID specified for back to top component - defaulting to top of page"):null===(targetElement=document.querySelector(0===target.indexOf("#")?target:"#"+target))&&console.log("Error: Back to top target element '"+target+"' not found - defaulting to top of page"),targetElement},this.createTopObserver=function(target){var objParent;if(_this.targetEl=_this.findTargetEl(target),null!==_this.topObserver){var observedEl=document.querySelector("#ic-back-to-top-target");null!==observedEl&&(_this.topObserver.unobserve(observedEl),observedEl.remove())}null===_this.targetEl?(objParent=document.body,_this.targetEl=objParent.firstElementChild,_this.isTargetElNull=!0):(objParent=_this.targetEl.parentNode,_this.isTargetElNull=!1);var objBackToTopTargetEl=document.createElement("div");objBackToTopTargetEl.setAttribute("id","ic-back-to-top-target"),objParent.insertBefore(objBackToTopTargetEl,_this.targetEl);var marginTop=getComputedStyle(_this.targetEl).marginTop;_this.topObserver=new IntersectionObserver(_this.targetElObserverCallback,{threshold:[0],rootMargin:marginTop+" 0px 0px 0px"}),_this.topObserver.observe(objBackToTopTargetEl)},this.handleClick=function(){_this.isTargetElNull?window.scrollTo(0,0):_this.targetEl.scrollIntoView()},this.checkForClassificationBanner=function(){var banners=document.querySelectorAll("ic-classification-banner:not([inline='true'])");_this.bannerOffset=banners.length>0},this.target=void 0,this.bannerOffset=!1,this.targetElVisible=!0,this.footerVisible=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(BackToTop,[{key:"watchPropHandler",value:function watchPropHandler(newValue,oldValue){var _this2=this;(0,_helpers_c332acf8_js__WEBPACK_IMPORTED_MODULE_9__.o)(oldValue,newValue,(function(){_this2.createTopObserver(newValue)}))}},{key:"componentWillLoad",value:function componentWillLoad(){this.createTopObserver(this.target),this.checkForClassificationBanner();var footers=document.querySelectorAll("ic-footer");if(0===footers.length&&(footers=document.querySelectorAll("footer")),footers.length){var footerEl=footers[footers.length-1],threshold=this.bannerOffset?.15:0;new IntersectionObserver(this.footerObserverCallback,{threshold:[threshold]}).observe(footerEl)}}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_c332acf8_js__WEBPACK_IMPORTED_MODULE_9__.a)([{prop:this.target,propName:"target"}],"Back to Top")}},{key:"render",value:function render(){var _class,bannerOffset=this.bannerOffset,targetElVisible=this.targetElVisible,footerVisible=this.footerVisible;return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",{class:(_class={},_class["ic-back-to-top-link"]=!0,_class["offset-banner"]=bannerOffset,_class.show=!targetElVisible,_class["by-footer"]=footerVisible,_class),"aria-label":"Back to top",onClick:this.handleClick},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"ic-back-to-top-icon",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">\n    <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>\n</svg>\n'}),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"subtitle-small"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",null,"Back to top")))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{target:["watchPropHandler"]}}}]),BackToTop}();BackToTop.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:absolute;right:0}button{position:fixed;right:var(--ic-space-md);bottom:var(--ic-space-md);height:2.5rem;align-items:center;padding:var(--ic-space-xs) var(--ic-space-md) var(--ic-space-xs)\n    var(--ic-space-sm);margin:0;gap:var(--ic-space-xs);display:flex;background-color:var(--ic-architectural-white);border:0.063rem solid var(--ic-action-default);outline-width:inherit;box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);border-radius:5rem;text-decoration:none;visibility:hidden;opacity:0;transition:visibility 0s linear var(--ic-transition-duration-slow),\n    opacity var(--ic-transition-duration-slow);cursor:pointer;z-index:var(--ic-z-index-overlay)}button:hover{text-decoration:none;background-color:var(--ic-action-default-bg-hover-no-alpha);border:0.063rem solid var(--ic-action-default-hover)}button:active{text-decoration:none;background-color:var(--ic-action-default-bg-active-no-alpha);border:0.063rem solid var(--ic-action-default-active)}button:focus{box-shadow:var(--ic-border-focus)}.ic-back-to-top-link.show{visibility:visible;opacity:1;transition:visibility 0s linear 0s,\n    opacity var(--ic-transition-duration-slow),\n    box-shadow var(--ic-easing-transition-fast)}.ic-back-to-top-link.by-footer{position:relative;right:var(--ic-space-md);bottom:3.5rem}.ic-back-to-top-link.offset-banner{margin-bottom:var(--ic-space-lg)}.ic-back-to-top-icon{fill:var(--ic-action-default);padding-left:var(--ic-space-xxs);padding-top:var(--ic-space-xxxs)}.ic-back-to-top-icon>svg{height:var(--ic-space-md);width:var(--ic-space-md);display:inline-block}.ic-back-to-top-link span{color:var(--ic-action-default)}.ic-back-to-top-link:hover .ic-back-to-top-icon{fill:var(--ic-action-default-hover)}.ic-back-to-top-link:hover span{color:var(--ic-action-default-hover)}@media (forced-colors: active){.ic-back-to-top-icon{fill:currentcolor}}'}}]);