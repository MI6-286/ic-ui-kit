"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5663],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});var Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_accordion:()=>Accordion});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_c28c228a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-c28c228a.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js"),accordionIds=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),0),Accordion=function(){function Accordion(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,Accordion),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.accordionClicked=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"accordionClicked",7),this.accordionId="ic-accordion-".concat(accordionIds++),this.CONTENT_VISIBILITY_PROPERTY="--ic-expanded-content-visiblity",this.toggleExpanded=function(){_this.expanded=!_this.expanded,_this.accordionClicked.emit({id:_this.accordionId})},this.setAccordionAnimation=function(el,duration,property,delay){el.style.transitionDuration="".concat(duration,"ms"),el.style.transitionProperty=property,el.style.transitionDelay=delay},this.setExpandedContentStyle=function(ev,expandedContent){"height"===ev.propertyName&&expandedContent.clientHeight>0&&(expandedContent.classList.add("expanded-content-opened"),expandedContent.style.height="auto")},this.hideExpandedContent=function(ev,expandedContent){"height"===ev.propertyName&&0===expandedContent.clientHeight&&expandedContent.style.setProperty(_this.CONTENT_VISIBILITY_PROPERTY,"hidden")},this.animateExpandedContent=function(){var elementHeight=_this.expandedContentEl.scrollHeight;elementHeight>0&&_this.expanded?(_this.expandedContentEl.style.setProperty(_this.CONTENT_VISIBILITY_PROPERTY,"visible"),_this.expandedContentEl.style.height="".concat(elementHeight,"px"),_this.setAccordionAnimation(_this.expandedContentEl,"300","height","ease-out"),_this.expandedContentEl.addEventListener("transitionend",(function(e){_this.setExpandedContentStyle(e,_this.expandedContentEl)}))):_this.expanded||(_this.expandedContentEl.style.height="".concat(_this.expandedContentEl.scrollHeight,"px"),_this.expandedContentEl.scrollHeight>0&&!_this.expanded&&(_this.expandedContentEl.style.height="0",_this.setAccordionAnimation(_this.expandedContentEl,"300","height","ease-in"),_this.expandedContentEl.classList.remove("expanded-content-opened")),_this.expandedContentEl.addEventListener("transitionend",(function(e){_this.hideExpandedContent(e,_this.expandedContentEl)})))},this.appearance="default",this.disabled=!1,this.expanded=!1,this.heading="",this.message="",this.size="default"}var _setFocus;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(Accordion,[{key:"handleExpandedWatch",value:function handleExpandedWatch(){this.animateExpandedContent()}},{key:"setFocus",value:(_setFocus=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.accordionBtnHeading&&this.accordionBtnHeading.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this2=this;this.expandedContentEl&&(this.expandedContentEl.removeEventListener("transitionend",(function(e){return _this2.setExpandedContentStyle(e,_this2.expandedContentEl)}),!0),this.expandedContentEl.removeEventListener("transitionend",(function(e){return _this2.hideExpandedContent(e,_this2.expandedContentEl)}),!0))}},{key:"componentDidLoad",value:function componentDidLoad(){this.expanded&&(this.expandedContentEl.style.height="auto",this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"visible"))}},{key:"render",value:function render(){var _this3=this,appearance=this.appearance,size=this.size,disabled=this.disabled,expanded=this.expanded;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{id:this.accordionId,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"".concat(appearance),!0),"disabled",disabled),"aria-disabled":disabled?"true":"false"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{ref:function ref(el){return _this3.accordionBtnHeading=el},id:"".concat(this.accordionId,"-button"),disabled,tabindex:disabled?-1:0,class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"".concat(size),!0),"section-button",!0),"section-button-open",expanded&&!disabled),"aria-expanded":"".concat(expanded),"aria-controls":"expanded-content-area",onClick:this.toggleExpanded},(0,_helpers_c28c228a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"icon-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"subtitle-large",class:"section-header"},(0,_helpers_c28c228a_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el,"heading")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"heading"}):this.heading),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"expand-chevron",!0),"content-expanded-chevron",expanded&&!disabled),"aria-hidden":"true",innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_8__.C})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__.A)({},"expanded-content",!0),"aria-labelledby":"".concat(this.accordionId,"-button"),role:"region","aria-hidden":"".concat(!expanded),id:"expanded-content-area",ref:function ref(el){return _this3.expandedContentEl=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"expanded-content-inner"},this.message?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("ic-typography",{variant:"body"},this.message):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{expanded:["handleExpandedWatch"]}}}]),Accordion}();Accordion.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;border-bottom:var(--ic-border-default)}:host(.light) ic-typography,:host(.light) .expanded-content,:host(.light) .icon-container,:host(.light) .expand-chevron{color:var(--ic-architectural-white)}:host(.disabled) ic-typography,:host(.disabled) .icon-container,:host(.disabled) .expand-chevron{color:var(--ic-architectural-500)}.section-button.small{padding:var(--ic-space-xxs) var(--ic-space-xs)}.section-button.large{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(:first-of-type){border-top:var(--ic-border-default)}:focus{outline:none}.section-button{background-color:transparent;display:flex;align-items:center;width:100%;padding:var(--ic-space-xs);font-weight:var(--ic-font-weight-bold);border:none}.section-header{text-align:left;flex:1 0}button:hover:enabled{background-color:var(--ic-action-dark-bg-hover);cursor:pointer}button:active{background-color:var(--ic-action-dark-bg-active)}button:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast)}button:disabled{pointer-events:none}.icon-container{margin:0 var(--ic-space-xs) 0 0;display:flex;align-items:center;width:var(--ic-space-lg);height:var(--ic-space-lg)}::slotted(svg){width:var(--ic-space-md);height:var(--ic-space-md)}.expand-chevron{width:var(--ic-space-lg);height:var(--ic-space-lg);margin-left:calc(var(--ic-space-xl) + var(--ic-space-xs));transform:rotate(90deg);justify-self:end}.content-expanded-chevron{transform:rotate(-90deg)}.expanded-content{height:0;overflow:hidden;display:flex;flex-direction:column;visibility:var(--ic-expanded-content-visiblity, hidden)}.expanded-content-inner{padding:var(--ic-space-xs)}.expanded-content-opened{overflow:visible}'}}]);