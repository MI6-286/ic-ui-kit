"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4376],{"./dist/esm/ic-tab-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_tab_group:()=>TabGroup});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-d1d2c456.js"),_helpers_5c2846f4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-5c2846f4.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/types-6f6b41a5.js");const TabGroup=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="dark",this.contextId="default",this.inline=!1,this.label=void 0}componentDidLoad(){(0,_helpers_5c2846f4_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Tab Group")}render(){const{appearance,label}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"tablist","aria-label":label,class:{light:appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Light,inline:this.inline}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-horizontal-scroll",{appearance:appearance===_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark?_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Default:appearance,"focus-trigger":"tabFocus"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tabs-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get delegatesFocus(){return!0}};TabGroup.style=":host{--border-bottom-color:var(--ic-architectural-300);display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-border-default)}:host(.inline){margin-bottom:0;border-bottom:none}.light{border-bottom:var(--ic-border-width) solid var(--ic-architectural-white)}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}"}}]);