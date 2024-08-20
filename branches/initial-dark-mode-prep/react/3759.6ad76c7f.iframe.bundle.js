"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3759],{"../web-components/dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-35ac5e03.js");__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");const Theme=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.themeChange=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"themeChange",7),this.checkThemeColorContrast=()=>{(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.J)()<_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.K&&(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.J)()>_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.W&&console.warn("The theme colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.")},this.setThemeColor=()=>{const colorRGBA=(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.color);if(colorRGBA){const{r,g,b,a}=colorRGBA,{style}=document.documentElement;style.setProperty("--ic-theme-primary-r",`${r}`),style.setProperty("--ic-theme-primary-g",`${g}`),style.setProperty("--ic-theme-primary-b",`${b}`),style.setProperty("--ic-theme-primary-a",`${a}`),this.checkThemeColorContrast(),this.themeChange.emit({mode:(0,_helpers_35ac5e03_js__WEBPACK_IMPORTED_MODULE_1__.d)(),color:colorRGBA})}},this.color=null,this.theme="light"}watchColorPropHandler(){this.setThemeColor()}componentWillLoad(){this.setThemeColor()}render(){const{theme}=this;return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-theme-${theme}`]:"auto"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}static get watchers(){return{color:["watchColorPropHandler"]}}};Theme.style=".ic-theme-light{--ic-color-primary-text:var(--ic-color-primary-text-light);--ic-color-inverse-text:var(--ic-color-inverse-text-light);--ic-color-secondary-text:var(--ic-color-secondary-text-light);--ic-color-tertiary-text:var(--ic-color-tertiary-text-light);--ic-color-white-text:var(--ic-color-inverse-text);--ic-typography-color:var(--ic-color-primary-text)}.ic-theme-dark{--ic-color-primary-text:var(--ic-color-primary-text-light);--ic-color-inverse-text:var(--ic-color-inverse-text-light);--ic-color-secondary-text:var(--ic-color-secondary-text-light);--ic-color-tertiary-text:var(--ic-color-tertiary-text-light);--ic-color-white-text:var(--ic-color-inverse-text);--ic-typography-color:var(--ic-color-primary-text)}"}}]);