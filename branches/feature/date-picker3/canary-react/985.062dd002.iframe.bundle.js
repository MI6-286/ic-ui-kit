"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[985],{"../canary-web-components/dist/esm/ic-checkbox-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox_group:()=>CheckboxGroup});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../canary-web-components/dist/esm/helpers-66ade63f.js");__webpack_require__("../canary-web-components/dist/esm/types-f21b86a9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var CheckboxGroup=function(){function CheckboxGroup(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CheckboxGroup),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.r)(this,hostRef),this.icChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.c)(this,"icChange",7),this.disabled=!1,this.helperText="",this.hideLabel=!1,this.label=void 0,this.name=void 0,this.required=!1,this.size="default",this.small=!1,this.validationStatus="",this.validationText=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CheckboxGroup,[{key:"handleChange",value:function handleChange(ev){"IC-TEXT-FIELD"===ev.target.tagName&&ev.stopImmediatePropagation()}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_17__.j)(this.disabled,this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){var _this=this;Array.from(this.el.querySelectorAll("ic-checkbox")).forEach((function(checkbox){checkbox.name||(checkbox.name=_this.name),checkbox.groupLabel=_this.label})),(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_17__.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Checkbox Group")}},{key:"selectHandler",value:function selectHandler(ev){var checkedOptions=Array.from(this.el.querySelectorAll("ic-checkbox")).filter((function(checkbox){return checkbox.checked&&!checkbox.disabled}));this.icChange.emit({value:checkedOptions.map((function(opt){return opt.value})),checkedOptions:checkedOptions.map((function(opt){var _a;return{checkbox:opt,textFieldValue:null===(_a=opt.querySelector("ic-text-field"))||void 0===_a?void 0:_a.value}})),selectedOption:ev.target})}},{key:"render",value:function render(){var _class,_class2,describedBy=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_17__.q)(this.name,""!==this.helperText,""!==this.validationStatus),hadValidationStatus=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_17__.s)(this.validationStatus,this.disabled);return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.H,{class:(_class={},_class.small=this.small,_class[""+this.size]=!0,_class)},("error"===this.validationStatus||this.required||this.hideLabel)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("span",{id:"screenReaderOnlyText",class:"screen-reader-only-text","aria-hidden":"true"},this.label," ","error"===this.validationStatus?"invalid data ":null," ",this.required?"required":null),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("fieldset",{id:this.name,"aria-labelledby":(("error"===this.validationStatus||this.required||this.hideLabel?"screenReaderOnlyText":"")+" "+describedBy).trim(),disabled:this.disabled},!this.hideLabel&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("legend",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("ic-input-label",{class:(_class2={},_class2[""+this.validationStatus]=!0,_class2),label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled,for:this.name})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("div",{class:"checkboxes-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("slot",null))),hadValidationStatus&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.h)("ic-input-validation",{for:this.name,ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_16__.g)(this)}}]),CheckboxGroup}();CheckboxGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}.checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxs))}:host(.small) .checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxxs))}.screen-reader-only-text{position:absolute;left:-9999px;background-color:#fff;color:#000;text-transform:none}'}}]);