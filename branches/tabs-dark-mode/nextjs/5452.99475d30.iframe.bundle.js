"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5452],{"../web-components/dist/esm/ic-typography.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_typography:()=>Typography});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_bd038c51_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/helpers-bd038c51.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),Typography=function(){function Typography(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,Typography),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,hostRef),this.typographyTruncationExpandToggle=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"typographyTruncationExpandToggle",7),this.focusBtnFromKeyboard=!0,this.inAGGrid=!1,this.lastMarkerTop=0,this.lastWidth=0,this.resizeObserver=null,this.truncatedHeight=0,this.toggleExpanded=function(ev){ev.stopPropagation(),_this.expanded=!_this.expanded,_this.typographyTruncationExpandToggle.emit({expanded:_this.expanded,typographyEl:_this.el})},this.checkMarkerPosition=function(elTop,markerTop){markerTop-elTop<_this.truncatedHeight?(_this.truncated=!1,_this.expanded=!1):_this.truncated=!0},this.getElementTop=function(el){return el.getClientRects?el.getClientRects()[0].top:0},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){clearTimeout(_this.resizeInterval),_this.resizeInterval=window.setTimeout(_this.resizeObserverCallback,50)})),_this.resizeObserver.observe(_this.truncWrapperEl)},this.resizeObserverCallback=function(){if(_this.lastWidth!==_this.el.clientWidth)if(0!==_this.truncatedHeight){var markerTop=_this.getElementTop(_this.marker);markerTop!==_this.lastMarkerTop&&(_this.checkMarkerPosition(_this.getElementTop(_this.el),markerTop),_this.lastMarkerTop=markerTop,_this.lastWidth=_this.el.clientWidth)}else _this.checkMaxLines(_this.el.clientHeight)},this.truncButtonFocus=function(){_this.focusBtnFromKeyboard&&(_this.truncButtonFocussed=!0)},this.truncButtonBlur=function(){_this.focusBtnFromKeyboard=!0,_this.truncButtonFocussed=!1},this.truncButtonFocusFromMouse=function(){_this.focusBtnFromKeyboard=!1},this.truncated=!1,this.truncButtonFocussed=!1,this.applyVerticalMargins=!1,this.bold=!1,this.italic=!1,this.maxLines=void 0,this.strikethrough=!1,this.theme="inherit",this.underline=!1,this.variant="body",this.expanded=!1}var _setShowHideExpanded,_checkMaxLines,_resetTruncation;return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(Typography,[{key:"watchExpandedHandler",value:function watchExpandedHandler(){this.el.setAttribute("style","--truncation-max-lines: ".concat(this.expanded?"initial":this.maxLines))}},{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"resetTruncation",value:(_resetTruncation=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.truncated&&(this.truncated=!1,this.maxLines=0,this.el.removeAttribute("max-lines"),this.expanded=!1,this.el.removeAttribute("style"));case 1:case"end":return _context.stop()}}),_callee,this)}))),function resetTruncation(){return _resetTruncation.apply(this,arguments)})},{key:"componentDidLoad",value:function componentDidLoad(){var _a,_b;if(("body"===this.variant||"IC-TOOLTIP"===(null===(_b=null===(_a=this.el.getRootNode())||void 0===_a?void 0:_a.host)||void 0===_b?void 0:_b.tagName))&&this.maxLines>0){var marker=document.createElement("span");marker.style.visibility="hidden",this.el.appendChild(marker),this.marker=marker,this.lastWidth=this.el.clientWidth,this.checkMaxLines(this.el.clientHeight),(0,_helpers_bd038c51_js__WEBPACK_IMPORTED_MODULE_2__.j)(this.runResizeObserver)}}},{key:"componentWillRender",value:function componentWillRender(){(0,_helpers_bd038c51_js__WEBPACK_IMPORTED_MODULE_2__.u)(this.el)&&(this.inAGGrid=!0)}},{key:"checkMaxLines",value:(_checkMaxLines=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(height){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:Math.floor(height/24)>this.maxLines&&(this.el.setAttribute("style","--truncation-max-lines: ".concat(this.maxLines)),this.truncatedHeight=this.el.clientHeight,this.truncated=!0);case 2:case"end":return _context2.stop()}}),_callee2,this)}))),function checkMaxLines(_x){return _checkMaxLines.apply(this,arguments)})},{key:"setShowHideExpanded",value:(_setShowHideExpanded=(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__.A)(_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee3(expanded){return _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:this.expanded=expanded;case 1:case"end":return _context3.stop()}}),_callee3,this)}))),function setShowHideExpanded(_x2){return _setShowHideExpanded.apply(this,arguments)})},{key:"render",value:function render(){var _a,_b,_this2=this,variant=this.variant,applyVerticalMargins=this.applyVerticalMargins,maxLines=this.maxLines,truncated=this.truncated,expanded=this.expanded,strikethrough=this.strikethrough,underline=this.underline,italic=this.italic,bold=this.bold,theme=this.theme;return console.log("theme",theme),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__.A)({},"ic-typography-".concat(variant),!0),"ic-typography-vertical-margins-".concat(variant),applyVerticalMargins),"ic-typography-bold",bold),"ic-typography-italic",italic),"ic-typography-strikethrough",strikethrough),"ic-typography-underline",underline),"in-ag-grid",this.inAGGrid),"ic-theme-".concat(theme),"inherit"!==theme)},("body"===variant||"IC-TOOLTIP"===(null===(_b=null===(_a=this.el.getRootNode())||void 0===_a?void 0:_a.host)||void 0===_b?void 0:_b.tagName))&&maxLines>0?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"trunc-wrapper",ref:function ref(el){return _this2.truncWrapperEl=el}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null)):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",null),"body"===variant&&maxLines>0&&truncated&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{class:{"trunc-btn":!0,focus:this.truncButtonFocussed},onFocus:this.truncButtonFocus,onBlur:this.truncButtonBlur,onMouseDown:this.truncButtonFocusFromMouse,onClick:this.toggleExpanded},expanded?"See less":"See more"))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{expanded:["watchExpandedHandler"]}}}]),Typography}();Typography.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;color:var(--ic-typography-color, var(--ic-color-primary-text))}:host(.ic-typography-vertical-margins-h1){margin:0 0 var(--ic-space-xl)}:host(.ic-typography-vertical-margins-h2){margin:var(--ic-space-xxl) 0 var(--ic-space-lg)}:host(.ic-typography-vertical-margins-h3){margin:var(--ic-space-xl) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-h4){margin:var(--ic-space-lg) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-subtitle-large),:host(.ic-typography-vertical-margins-subtitle-small),:host(.ic-typography-vertical-margins-body),:host(.ic-typography-vertical-margins-code-large),:host(.ic-typography-vertical-margins-code-small),:host(.ic-typography-vertical-margins-code-extra-small){margin:0 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-caption),:host(.ic-typography-vertical-margins-caption-uppercase){margin:0 0 var(--ic-space-xs)}:host(.ic-typography-vertical-margins-h2:first-child),:host(.ic-typography-vertical-margins-h3:first-child),:host(.ic-typography-vertical-margins-h4:first-child){margin-top:0}:host(.ic-typography-h1){font:var(--ic-font-h1) !important}:host(.ic-typography-h2){font:var(--ic-font-h2);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-h3){font:var(--ic-font-h3)}:host(.ic-typography-h4){font:var(--ic-font-h4);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-large){font:var(--ic-font-subtitle-large);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-small){font:var(--ic-font-subtitle-small);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-body){font:var(--ic-font-body);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-caption){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-caption-uppercase){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025);text-transform:uppercase}:host(.ic-typography-label){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-label-uppercase){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025);text-transform:uppercase}:host(.ic-typography-code-large){font:var(--ic-font-code-large);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-code-small){font:var(--ic-font-code-small);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-code-extra-small){font:var(--ic-font-code-extra-small);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-badge){font:var(--ic-font-badge);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-badge-small){font:var(--ic-font-badge-small);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-no-wrap){white-space:nowrap}:host ::slotted(h1),:host ::slotted(h2),:host ::slotted(h3),:host ::slotted(h4),:host ::slotted(h5),:host ::slotted(h6),:host ::slotted(p),:host ::slotted(label){font:inherit;letter-spacing:inherit}.trunc-wrapper{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--truncation-max-lines, initial);-webkit-line-clamp:var(--truncation-max-lines, initial);overflow:hidden;padding-right:var(--ellipsis-padding-right, 0)}.trunc-btn{border:none;background:none;padding:0;color:var(--ic-color-primary-text);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}.trunc-btn:hover,.trunc-btn.focus{outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none;cursor:pointer}:host(.ic-typography-strikethrough){text-decoration:line-through}:host(.ic-typography-underline){text-decoration:underline}:host(.ic-typography-underline.ic-typography-strikethrough){text-decoration:line-through underline}:host(.ic-typography-italic){font-style:italic !important}:host(.ic-typography-bold){font-weight:var(--ic-font-weight-bold)}:host(.ic-theme-dark),:host(.ic-theme-light){--ic-typography-color:var(--ic-color-primary-text)}:host(.in-ag-grid),:host(.in-ag-grid) ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports (text-underline-offset: 25%){.trunc-btn:hover,.trunc-btn.focus{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}'}}]);