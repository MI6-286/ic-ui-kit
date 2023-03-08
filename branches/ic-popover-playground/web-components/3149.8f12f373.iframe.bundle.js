"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3149],{"./dist/esm/ic-breadcrumb-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb_group:()=>BreadcrumbGroup});__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm/index-90721b3c.js"),_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/esm/helpers-fce4e9ef.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var BreadcrumbGroup=function(){function BreadcrumbGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BreadcrumbGroup),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.r)(this,hostRef),this.ADD_CLASS_DELAY=50,this.setBackBreadcrumb=function(){_this.backBreadcrumbOnly&&_this.setBackBreadcrumbAttr()},this.setBackBreadcrumbAttr=function(){var lastParentBreadcrumb=_this.getLastParentBreadcrumb();lastParentBreadcrumb&&(lastParentBreadcrumb.classList.add("show"),lastParentBreadcrumb.setAttribute("show-back-icon","true"))},this.getLastParentBreadcrumb=function(){var allBreadcrumbs=Array.from(_this.el.querySelectorAll("ic-breadcrumb"));return 1===allBreadcrumbs.length?null:(_this.breadcrumbs=allBreadcrumbs.filter((function(breadcrumb){return!breadcrumb.getAttribute("current")})),_this.breadcrumb=_this.breadcrumbs[_this.breadcrumbs.length-1],_this.breadcrumb)},this.setDefaultBreadcrumbs=function(){Array.from(_this.el.querySelectorAll("ic-breadcrumb")).forEach((function(breadcrumb){breadcrumb.setAttribute("show-back-icon","false")}))},this.setCollapsed=function(){if(_this.collapsed){var allBreadcrumbs=Array.from(_this.el.querySelectorAll("ic-breadcrumb"));_this.collapsedBreadcrumbs=allBreadcrumbs.splice(1,allBreadcrumbs.length-2).filter((function(breadcrumb){return!breadcrumb.classList.contains("collapsed-breadcrumb-wrapper")})),_this.collapsedBreadcrumbs.forEach((function(breadcrumb){return breadcrumb.classList.add("hide")}));var firstBreadcrumb=allBreadcrumbs[0];firstBreadcrumb&&firstBreadcrumb.insertAdjacentElement("afterend",_this.collapsedBreadcrumbWrapper)}},this.renderCollapsedBreadcrumb=function(){_this.collapsedBreadcrumbWrapper=document.createElement("ic-breadcrumb"),_this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper");var collapsedBreadcrumbEl=document.createElement("button"),ariaLabel=document.createElement("span");ariaLabel.id="collapsed-button-label",ariaLabel.innerText="Collapsed breadcrumbs",ariaLabel.className="hide",collapsedBreadcrumbEl.setAttribute("aria-labelledby","collapsed-button-label");var ariaDescribed=document.createElement("span");return ariaDescribed.id="collapsed-button-described",ariaDescribed.innerText="Select to view collapsed breadcrumbs",ariaDescribed.className="hide",collapsedBreadcrumbEl.setAttribute("aria-describedby","collapsed-button-described"),collapsedBreadcrumbEl.id="collapsed-ellipsis",collapsedBreadcrumbEl.innerText="...",collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb"),collapsedBreadcrumbEl.addEventListener("click",(function(){_this.handleHiddenCollapsedBreadcrumbs(_this.collapsedBreadcrumbWrapper)})),_this.collapsedBreadcrumbWrapper.append(ariaDescribed),_this.collapsedBreadcrumbWrapper.append(ariaLabel),_this.collapsedBreadcrumbWrapper.append(collapsedBreadcrumbEl),_this.collapsedBreadcrumbWrapper},this.handleHiddenCollapsedBreadcrumbs=function(collapsedBreadcrumbWrapper){collapsedBreadcrumbWrapper.remove(),_this.collapsedBreadcrumbs.forEach((function(breadcrumb){breadcrumb.classList.add("visuallyhidden"),breadcrumb.classList.remove("hide"),setTimeout((function(){breadcrumb.classList.add("fade")}),_this.ADD_CLASS_DELAY),_this.removeVisuallyHiddenClass(breadcrumb)})),_this.expandedBreadcrumbs=!0},this.removeVisuallyHiddenClass=function(breadcrumb){breadcrumb.addEventListener("transitionend",(function(e){"opacity"===e.propertyName&&breadcrumb.classList.remove("visuallyhidden")}))},this.setLastParentCollapsedBackBreadcrumb=function(){var lastParentBreadcrumb=_this.getLastParentBreadcrumb();_this.setBackBreadcrumbAttr(),lastParentBreadcrumb.classList.remove("hide")},this.revertLastParentCollapsedBreadcrumb=function(){_this.getLastParentBreadcrumb().setAttribute("show-back-icon","false")},this.resizeObserver=null,this.resizeObserverCallback=function(currSize){currSize!==_this.deviceSize&&(_this.deviceSize=currSize,_this.deviceSize<=_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.D.S?(_this.el.setAttribute("back-breadcrumb-only","true"),_this.collapsed?_this.setLastParentCollapsedBackBreadcrumb():_this.setBackBreadcrumb()):(_this.el.setAttribute("back-breadcrumb-only","false"),_this.collapsed&&_this.breadcrumbs&&_this.breadcrumbs.length>2?(_this.revertLastParentCollapsedBreadcrumb(),_this.expandedBreadcrumbs?_this.setDefaultBreadcrumbs():_this.setCollapsed()):_this.setDefaultBreadcrumbs()))},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){var currSize=(0,_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.g)();_this.resizeObserverCallback(currSize)})),_this.resizeObserver.observe(_this.el)},this.backBreadcrumbOnly=!1,this.collapsed=!1,this.deviceSize=_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.D.XL,this.expandedBreadcrumbs=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(BreadcrumbGroup,[{key:"componentWillLoad",value:function componentWillLoad(){var allBreadcrumbs=Array.from(this.el.querySelectorAll("ic-breadcrumb"));this.backBreadcrumbOnly?this.setBackBreadcrumb():(0,_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.c)(this.runResizeObserver),this.collapsed&&(this.collapsedBreadcrumbWrapper=this.renderCollapsedBreadcrumb(),allBreadcrumbs.length>2&&((0,_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.g)()===_helpers_fce4e9ef_js__WEBPACK_IMPORTED_MODULE_15__.D.S?this.setLastParentCollapsedBackBreadcrumb():this.setCollapsed()))}},{key:"render",value:function render(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.H,{class:{back:this.backBreadcrumbOnly,collapsed:this.collapsed}},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.h)("nav",{"aria-label":"breadcrumbs"},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.h)("ol",null,(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_14__.g)(this)}}]),BreadcrumbGroup}();BreadcrumbGroup.style=":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.back) ol ::slotted(ic-breadcrumb){display:none}:host(.back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}"}}]);