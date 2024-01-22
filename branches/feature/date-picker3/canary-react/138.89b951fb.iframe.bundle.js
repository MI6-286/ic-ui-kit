"use strict";(self.webpackChunk_ukic_canary_react=self.webpackChunk_ukic_canary_react||[]).push([[138],{"../canary-web-components/dist/esm/ic-stepper.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_stepper:()=>Stepper});__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_93509377_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../canary-web-components/dist/esm/index-93509377.js"),_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../canary-web-components/dist/esm/helpers-66ade63f.js");__webpack_require__("../canary-web-components/dist/esm/types-f21b86a9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var Stepper=function(){function Stepper(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Stepper),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.r)(this,hostRef),this.resizeObserver=null,this.getChildren=function(){_this.steps=Array.from(_this.el.querySelectorAll("ic-step")),_this.stepsWithStepTitles=Array.from(_this.el.querySelectorAll("ic-step[step-title]"))},this.checkStepTitles=function(){_this.stepsWithStepTitles.length<_this.steps.length&&_this.variantOverride&&"compact"===_this.variant&&(_this.noOfResizes=_this.noOfResizes+1,1===_this.noOfResizes&&console.error("The prop 'step-title' (web components) / 'stepTitle' (react) is required for all steps of the Stepper component (compact variant)"))},this.setStepTypes=function(){_this.getChildren(),_this.stepTypes=[];for(var i=0;i<_this.steps.length;i++)_this.stepTypes.push("active")},this.setStepperWidth=function(){_this.alignedFullWidth="default"===_this.variant&&"full-width"===_this.aligned;var lastStep=_this.steps[_this.steps.length-1];lastStep.style.maxWidth="none",_this.alignedFullWidth&&(_this.stepperWidth=_this.el.offsetWidth,lastStep.style.maxWidth=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)(_this.stepperWidth/_this.steps.length+"px"),_this.lastStepWidth=lastStep.offsetWidth)},this.initialiseStepStates=function(){_this.steps.forEach((function(step,index){step.variant=_this.variant,step.stepNum=index+1,step.lastStep=index===_this.steps.length-1,step.lastStepNum=_this.steps.length,"current"!==step.stepType?(step.current=!1,_this.stepTypes[index]=step.stepType):step.current=!0;var stepTitleArea=step.shadowRoot&&step.shadowRoot.querySelector(".step > .step-title-area");if(0==_this.stepsWithStepTitles.length&&_this.variantOverride&&("compact"===_this.variant&&(_this.autoSetStepTitles=!0,_this.autoSetStepTitles&&(step.stepTitle="Step "+step.stepNum,stepTitleArea&&stepTitleArea.querySelector(".step-title").setAttribute("aria-hidden","true"))),"default"===_this.variant&&(_this.autoSetStepTitles=!1,_this.autoSetStepTitles||(step.stepTitle=void 0,stepTitleArea&&stepTitleArea.querySelector(".step-title").removeAttribute("aria-hidden")))),"compact"===_this.variant&&(!0===step.current||"current"===step.stepType?(step.classList.remove("hide"),step.classList.add("show")):step.classList.contains("show")&&(step.classList.remove("show"),step.classList.add("hide")),step.lastStep?step.lastStep&&"completed"!==_this.stepTypes[index]?step.progress=95:step.progress=100:(step.nextStepTitle=_this.steps[index+1].stepTitle,step.progress=step.stepNum/_this.steps.length*100),_this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.remove("visually-hidden"),step.compactStepStyling=_this.stepTypes[index]),"default"===_this.variant){if(step.lastStep?step.lastStep&&(step.classList.add("last-step"),_this.alignedFullWidth?step.style.maxWidth=_this.lastStepWidth+"px":step.style.maxWidth=_this.connectorWidth>100?(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)(_this.connectorWidth+48+"px"):(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)("148px")):_this.alignedFullWidth&&(step.style.width=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)((_this.stepperWidth-_this.lastStepWidth)/(_this.steps.length-1)+"px"),step.style.minWidth=(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)("148px")),"left"===_this.aligned){step.style.width=_this.connectorWidth>100?(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)(_this.connectorWidth+48+"px"):(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)("148px");var stepConnect=step.shadowRoot.querySelector(".step > .step-top > .step-connect");stepConnect&&(stepConnect.style.width=_this.connectorWidth>100?(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)(_this.connectorWidth+"px"):(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.H)("100px"))}_this.hideStepInfo&&null!==stepTitleArea&&stepTitleArea.classList.add("visually-hidden")}}))},this.overrideVariant=function(){var minDefaultStepperWidth=148*_this.steps.length;"left"===_this.aligned&&_this.connectorWidth>100&&(minDefaultStepperWidth=(_this.connectorWidth+48)*_this.steps.length),_this.variantOverride&&(_this.el.clientWidth<minDefaultStepperWidth?(_this.variant="compact",_this.getChildren()):(_this.variant="default",_this.getChildren()))},this.resizeObserverCallback=function(){_this.getChildren(),_this.checkStepTitles(),_this.overrideVariant(),_this.setStepperWidth(),_this.initialiseStepStates()},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){_this.resizeObserverCallback()})),_this.resizeObserver.observe(_this.el)},this.alignedFullWidth=!0,this.autoSetStepTitles=!0,this.lastStepWidth=0,this.noOfResizes=0,this.stepperWidth=document.querySelector("ic-stepper").getBoundingClientRect().width,this.stepTypes=[],this.variantOverride="compact"!==this.variant,this.aligned="full-width",this.connectorWidth=100,this.hideStepInfo=!1,this.variant="default"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Stepper,[{key:"disconnectedCallback",value:function disconnectedCallback(){null!==this.resizeObserver&&this.resizeObserver.disconnect()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setStepTypes(),"compact"===this.variant&&(this.variantOverride=!1)}},{key:"componentWillRender",value:function componentWillRender(){this.initialiseStepStates()}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_66ade63f_js__WEBPACK_IMPORTED_MODULE_12__.f)(this.runResizeObserver)}},{key:"render",value:function render(){var _class;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.H,{class:(_class={},_class[""+this.variant]=!0,_class["aligned-left"]="default"===this.variant&&"left"===this.aligned,_class)},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("ul",{class:"step-item-list"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_11__.g)(this)}}]),Stepper}();Stepper.style=":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.default:not(.aligned-left)) .step-item-list{flex:auto}:host(.compact) ul ::slotted(ic-step){display:none}:host(.compact) ul ::slotted(ic-step.show){display:flex}:host(.compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}"}}]);