"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[1114],{"../web-components/dist/esm/ic-badge.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_badge:()=>Badge});var _home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js"),Badge=(__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js"),function(){function Badge(hostRef){var _this=this;(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,Badge),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLabel=null,this.setBadgeColour=function(){var colorRGBA=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.b)(_this.customColor);if(colorRGBA){_this.customColorRGBA=colorRGBA;var r=colorRGBA.r,g=colorRGBA.g,b=colorRGBA.b,a=colorRGBA.a;_this.el.style.backgroundColor="rgba(".concat(r,", ").concat(g,", ").concat(b,", ").concat(a,")")}},this.getBadgeRGB=function(){switch(_this.variant){case"custom":return _this.customColorRGBA;case"error":case"success":case"warning":case"info":return(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.r)((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.g)("--ic-status-".concat(_this.variant)));case"neutral":case"light":return(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.h)((0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.g)("--ic-architectural-".concat("neutral"===_this.variant?500:40)))}},this.getBadgeForeground=function(){var _this$getBadgeRGB=_this.getBadgeRGB(),r=_this$getBadgeRGB.r,g=_this$getBadgeRGB.g,b=_this$getBadgeRGB.b;_this.foregroundColour=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.d)((299*r+587*g+114*b)/1e3)},this.getLabel=function(){return _this.maxNumber&&Number(_this.label)>_this.maxNumber?"".concat(_this.maxNumber,"+"):_this.label},this.setAccessibleLabel=function(){var parentEl=_this.el.parentElement,defaultAriaLabel=_this.isAccessibleLabelDefined()?_this.accessibleLabel:_this.label||"with badge being displayed";if(parentEl){var tagName=parentEl.tagName;if("IC-CARD"!==tagName&&("IC-TAB"!==tagName||"IC-TAB"===tagName&&_this.parentAriaLabel)){var ariaLabelPrefix=_this.parentAriaLabel?"".concat(_this.parentAriaLabel," ,"):"";parentEl.ariaLabel=_this.visible?"".concat(ariaLabelPrefix," ").concat(defaultAriaLabel):void 0}else _this.ariaLabel=", ".concat(defaultAriaLabel)}},this.isAccessibleLabelDefined=function(){return(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.e)(_this.accessibleLabel)&&null!==_this.accessibleLabel},this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="default",this.label=void 0,this.type="text",this.variant="neutral",this.visible=!0}return(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__.A)(Badge,[{key:"accessibleLabelHandler",value:function accessibleLabelHandler(){this.setAccessibleLabel()}},{key:"customColorHandler",value:function customColorHandler(){"custom"===this.variant&&this.setBadgeColour()}},{key:"variantHandler",value:function variantHandler(){this.getBadgeForeground()}},{key:"visibleHandler",value:function visibleHandler(){this.setAccessibleLabel()}},{key:"componentWillLoad",value:function componentWillLoad(){var _a;"custom"===this.variant&&this.setBadgeColour(),this.getBadgeForeground();var ariaLabel=null===(_a=this.el.parentElement)||void 0===_a?void 0:_a.ariaLabel;ariaLabel&&(this.parentAriaLabel=ariaLabel),this.setAccessibleLabel()}},{key:"componentDidLoad",value:function componentDidLoad(){"text"===this.type&&(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Badge")}},{key:"render",value:function render(){var ariaLabel=this.ariaLabel,el=this.el,foregroundColour=this.foregroundColour,getLabel=this.getLabel,position=this.position,size=this.size,label=this.label,type=this.type,variant=this.variant,visible=this.visible;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)((0,_home_runner_work_ic_ui_kit_ic_ui_kit_packages_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.A)({},"ic-badge-".concat(position),!0),"ic-badge-".concat(size),!0),"ic-badge-".concat(variant),!0),"ic-badge-".concat(type),!0),"ic-badge-foreground-".concat(foregroundColour),null!==foregroundColour),"".concat(visible?"ic-badge-show":"ic-badge-hide"),!0),id:el.id||null,"aria-label":ariaLabel,role:"status"},"icon"===type&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge-icon"}),"text"===type&&label&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"small"===size?"badge-small":"badge"},getLabel()))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}},{key:"watchers",get:function get(){return{accessibleLabel:["accessibleLabelHandler"],customColor:["customColorHandler"],variant:["variantHandler"],visible:["visibleHandler"]}}}]),Badge}());Badge.style="@media (prefers-reduced-motion: no-preference){:host(.ic-badge-show){animation:expand var(--ic-transition-duration-slow)}:host(.ic-badge-hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host(.ic-badge-neutral){background-color:var(--ic-architectural-500)}:host(.ic-badge-light){background-color:var(--ic-architectural-40)}:host(.ic-badge-info){background-color:var(--ic-status-info)}:host(.ic-badge-warning){background-color:var(--ic-status-warning)}:host(.ic-badge-error){background-color:var(--ic-status-error)}:host(.ic-badge-success){background-color:var(--ic-status-success)}:host(.ic-badge-small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.ic-badge-large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-default){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.ic-badge-dot.ic-badge-small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.ic-badge-dot.ic-badge-large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.ic-badge-foreground-dark) ::slotted(*){fill:var(--ic-color-primary-text)}:host(.ic-badge-foreground-light) ::slotted(*){fill:white}:host(.ic-badge-foreground-dark) ic-typography{color:var(--ic-color-primary-text)}:host(.ic-badge-foreground-light) ic-typography{color:white}:host(.ic-badge-text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-text.ic-badge-small) ic-typography{padding:0 0.2132rem}:host(.ic-badge-text.ic-badge-large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.ic-badge-icon.ic-badge-small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.ic-badge-icon.ic-badge-large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.ic-badge-far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.ic-badge-far.ic-badge-small),:host(.ic-badge-dot.ic-badge-far.ic-badge-large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-far),:host(.ic-badge-dot.ic-badge-far.ic-badge-small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.ic-badge-near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.ic-badge-dot.ic-badge-near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.ic-badge-inline){position:static}:host(.ic-badge-hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);