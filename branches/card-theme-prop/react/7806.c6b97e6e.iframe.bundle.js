"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7806],{"../web-components/dist/esm/chevron-icon-589e3b46.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chevron});const Chevron='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"../web-components/dist/esm/ic-card-vertical.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_card_vertical:()=>CardVertical});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-1c9151ef.js"),_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/chevron-icon-589e3b46.js");const CardVertical=class{constructor(hostRef){(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hostMutationObserver=null,this.parentFocussed=()=>{this.isFocussed=!0},this.parentBlurred=()=>{this.isFocussed=!1},this.toggleExpanded=()=>{this.areaExpanded=!this.areaExpanded},this.hostMutationCallback=mutationList=>{mutationList.some((({type,addedNodes,removedNodes})=>"childList"===type&&(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.c)(addedNodes,removedNodes,["message","adornment","expanded-content","image-top","image-mid","icon","interaction-button","badge","interaction-controls"])))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},this.appearance="default",this.areaExpanded=!1,this.isFocussed=!1,this.parentEl=null,this.parentIsAnchorTag=!1,this.clickable=!1,this.disabled=!1,this.expandable=!1,this.fullWidth=!1,this.heading=void 0,this.href=void 0,this.hreflang="",this.message="",this.referrerpolicy=void 0,this.rel=void 0,this.subheading=void 0,this.target=void 0,this.theme="inherit"}disconnectedCallback(){var _a;this.parentIsAnchorTag&&(this.parentEl.removeEventListener("focus",this.parentFocussed),this.parentEl.removeEventListener("blur",this.parentBlurred)),null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}componentWillLoad(){this.parentEl=this.el.parentElement,"A"===this.parentEl.tagName&&(this.clickable=!0,this.parentIsAnchorTag=!0,this.parentEl.classList.add("ic-card-wrapper-link"),this.parentEl.addEventListener("focus",this.parentFocussed),this.parentEl.addEventListener("blur",this.parentBlurred)),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.disabled,this.el)}componentDidLoad(){!(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"heading")&&(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.heading,propName:"heading"}],"Card"),this.updateTheme(),this.hostMutationObserver=new MutationObserver(this.hostMutationCallback),this.hostMutationObserver.observe(this.el,{childList:!0})}handleHostClick(event){this.disabled&&event.stopImmediatePropagation()}themeChangeHandler(ev){this.updateTheme(ev.detail.mode)}async setFocus(){this.el.shadowRoot.querySelector("a")?this.el.shadowRoot.querySelector("a").focus():this.el.shadowRoot.querySelector("button")&&this.el.shadowRoot.querySelector("button").focus()}updateTheme(newTheme=null){const foregroundColor=(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.el,newTheme);foregroundColor!==_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.I.Default&&(this.appearance=foregroundColor)}render(){const{appearance,clickable,disabled,expandable,fullWidth,heading,isFocussed,message,href,hreflang,parentIsAnchorTag,referrerpolicy,rel,subheading,target,theme}=this,Component=parentIsAnchorTag||!clickable?"div":void 0===href?"button":"a",attrs="a"==Component&&{href,hrefLang:hreflang,referrerPolicy:referrerpolicy,rel,target};return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[`ic-theme-${theme}`]:"inherit"!==theme}},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(Component,Object.assign({class:{card:!0,clickable:clickable&&!disabled,disabled,fullwidth:fullWidth,focussed:isFocussed,dark:appearance===_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.I.Dark},tabindex:clickable&&!parentIsAnchorTag?0:null,"aria-disabled":disabled?"true":null,disabled:!!disabled||null},attrs),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image-top")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"image-top"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image-top"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-header"},(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"icon")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-title"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"heading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"h4"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,heading)))),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"interaction-button")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"interaction-button"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"interaction-button"}))),(subheading||(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"subheading"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subheading"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"subtitle-small"},subheading))),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"adornment")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"adornment"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"adornment"})),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"image-mid")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"image-mid"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"image-mid"})),(message||(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"message"))&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-message"},message&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},message),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"message")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"message"})),((0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"interaction-controls")||expandable)&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"interaction-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"interaction-controls"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"interaction-controls"})),expandable&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-tooltip",{id:"ic-tooltip-expand-button",label:"Toggle expandable area",silent:!0},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:{"toggle-button":!0,["toggle-button-"+(this.areaExpanded?"expanded":"closed")]:!0},"aria-label":"Toggle expandable area","aria-expanded":`${this.areaExpanded}`,"aria-controls":this.areaExpanded?"expanded-content-area":null,onClick:this.toggleExpanded,innerHTML:_chevron_icon_589e3b46_js__WEBPACK_IMPORTED_MODULE_2__.C}))),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"expanded-content")&&this.areaExpanded&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"expanded-content",id:"expanded-content-area"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expanded-content"})),(0,_helpers_1c9151ef_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"badge")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"badge"})))}get el(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};CardVertical.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-style: inherit;\n  vertical-align: baseline;\n}\n\n\n:host {\n  display: flex;\n}\n\na {\n  text-decoration: none !important;\n  color: var(--ic-card-vertical-card-text) !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  outline: var(--ic-hc-focus-outline);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  border: var(--ic-border-default);\n  border-radius: var(--ic-border-radius);\n  box-sizing: border-box;\n  padding: var(--ic-space-md);\n  text-align: left;\n  color: var(--ic-card-vertical-card-text);\n  transition: var(--ic-easing-transition-fast);\n  position: relative;\n  width: inherit;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100%;\n\n  &.dark {\n    border: var(--ic-border-width) solid var(--ic-border-neutral-dark-grey);\n  }\n  &.fullwidth {\n    width: 100%;\n  }\n  &.clickable {\n    &:hover {\n      background-color: var(--ic-card-vertical-focus-hover-bg);\n      border: var(--ic-border-hover);\n      cursor: pointer;\n    }\n    &.focussed,\n    &:focus {\n      background-color: var(--ic-card-vertical-focus-hover-bg);\n      box-shadow: var(--ic-border-focus);\n      outline: var(--ic-hc-focus-outline);\n      border: var(--ic-border-pressed);\n    }\n    &:active {\n      background-color: var(--ic-card-vertical-active-bg);\n      box-shadow: var(--ic-border-focus);\n\n      .card-title {\n        text-decoration: none;\n      }\n    }\n    .card-title {\n      --ic-typography-color: var(--ic-card-vertical-clickable-text);\n\n      color: var(--ic-card-vertical-clickable-text);\n      text-decoration: underline;\n      text-decoration-thickness: var(--ic-space-1px);\n    }\n  }\n  &.disabled {\n    border: var(--ic-border-disabled);\n\n    .card-message,\n    .subheading,\n    .card-title {\n      --ic-typography-color: var(--ic-card-vertical-disabled-text);\n    }\n    .card-title {\n      text-decoration: underline;\n      text-decoration-thickness: var(--ic-space-1px);\n      text-decoration-color: var(--ic-card-vertical-disabled-text);\n      color: var(--ic-card-vertical-disabled-text);\n    }\n    ::slotted(svg) {\n      fill: var(--ic-card-vertical-disabled-text);\n    }\n  }\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  padding-right: var(--ic-space-xs);\n}\n\n.card.clickable:hover .card-title,\n.card.clickable:focus .card-title,\n.card.clickable.focussed .card-title {\n  display: inline-block;\n  border-bottom: 0.25rem solid !important;\n  margin-bottom: -0.25rem !important;\n  text-decoration: none;\n}\n\n@supports (text-underline-offset: 25%) {\n  .card.clickable:hover .card-title,\n  .card.clickable:focus .card-title,\n  .card.clickable.focussed .card-title {\n    text-decoration-line: underline;\n    text-decoration-thickness: 25%;\n    text-underline-offset: 25%;\n    border-bottom: 0 !important;\n    margin-bottom: 0 !important;\n  }\n}\n\n.subheading {\n  margin-top: var(--ic-space-xxs);\n}\n\n.adornment {\n  margin-top: var(--ic-space-xxs);\n}\n\n.card-message {\n  margin-top: var(--ic-space-md);\n  align-items: left;\n}\n\n.interaction-button {\n  margin-left: auto;\n}\n\n.image-top {\n  margin-bottom: var(--ic-space-md);\n  display: flex;\n  justify-content: center;\n}\n\n.image-mid {\n  margin-top: var(--ic-space-md);\n  display: flex;\n  justify-content: center;\n}\n\n.interaction-area {\n  display: flex;\n  flex-grow: 1;\n  gap: var(--ic-space-md);\n  margin-top: var(--ic-space-md);\n  align-items: flex-end;\n}\n\n.interaction-controls {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--ic-space-sm);\n}\n\n.toggle-button {\n  color: var(--ic-card-vertical-toggle-button);\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: var(--ic-space-xs);\n  margin: var(--ic-space-1px) 0;\n  min-width: 0;\n  cursor: pointer;\n  transition: var(--ic-easing-transition-fast);\n  border-radius: var(--ic-border-radius);\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  border: none;\n  box-sizing: border-box;\n  white-space: nowrap;\n  vertical-align: middle;\n\n  &:hover {\n    background-color: var(--ic-card-vertical-focus-hover-bg);\n    color: var(--ic-card-vertical-focus-hover);\n  }\n  &:focus {\n    box-shadow: var(--ic-border-focus);\n  }\n  &:active:not(:focus) {\n    background-color: var(--ic-card-vertical-active-bg);\n    color: var(--ic-card-vertical-active);\n  }\n\n  svg {\n    pointer-events: none;\n    width: 100% !important;\n    height: 100% !important;\n    fill: currentcolor !important;\n  }\n}\n\n#ic-tooltip-expand-button {\n  margin-left: auto;\n  position: relative;\n}\n\n.toggle-button-closed svg {\n  transform: rotate(90deg);\n}\n\n.toggle-button-expanded svg {\n  transform: rotate(-90deg);\n}\n\n.expanded-content {\n  margin-top: var(--ic-space-md);\n}\n\n/** High Contrast **/\n@media (forced-colors: active) {\n  .card ::slotted(svg) {\n    fill: currentcolor;\n  }\n\n  .card.disabled ::slotted(svg) {\n    fill: GrayText !important;\n  }\n\n  .card.disabled {\n    border-color: GrayText !important;\n  }\n\n  .card.disabled .card-message,\n  .card.disabled .subheading,\n  .card.disabled .card-title {\n    color: GrayText;\n\n    --ic-typography-color: GrayText;\n  }\n}\n\n/* Add back in after storybook has the `color-scheme: light dark` code */\n\n/* @media (prefers-color-scheme: dark) and (not (forced-colors: active)) {\n  ::slotted([slot="icon"]) {\n    fill: var(--ic-architectural-white);\n  }\n} */\n'}}]);