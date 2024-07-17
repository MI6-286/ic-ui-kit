/*! For license information please see ic-skeleton-stories-mdx.f0c10bed.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[61],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,circle:()=>circle,default:()=>ic_skeleton_stories,defaultArgs:()=>defaultArgs,deprecatedDark:()=>deprecatedDark,example:()=>example,light:()=>light,playground:()=>playground,rectangle:()=>rectangle,text:()=>ic_skeleton_stories_text});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-skeleton\n\nWhen using the skeleton component, an aria-live level should be applied to the parent element of the skeleton and the element that it is\nrepresenting so that any changes, such as the real element replacing the skeleton placeholder, are announced to assistive technology like screen readers. The recommendation is to use aria-live="polite" over aria-live="recommended" unless changes are critically important. \n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                                                                                                               | Type                                | Default       |\n| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------- |\n| `appearance` | `appearance` | The appearance of the skeleton.                                                                                                           | `"default" \\| "light"`              | `"default"`   |\n| `light`      | `light`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `appearance` to "light" instead.<br/><br/> | `boolean`                           | `false`       |\n| `variant`    | `variant`    | The variant of the skeleton that will be displayed.                                                                                       | `"circle" \\| "rectangle" \\| "text"` | `"rectangle"` |\n\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={appearance:"default",variant:"rectangle"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",div:"div"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Skeleton",component:components.e6}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"rectangle",children:"Rectangle"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Rectangle",children:[(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Default"}),(0,jsx_runtime.jsx)(components.e6,{}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Inherited from child"}),(0,jsx_runtime.jsx)(components.e6,{children:(0,jsx_runtime.jsx)("div",{style:{height:"200px",width:"450px"},children:"Test text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Height and width set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{height:"200px",width:"200px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Height set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{height:"75px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Width set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{width:"450px"}})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"circle",children:"Circle"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Circle",children:(0,jsx_runtime.jsx)(components.e6,{variant:"circle"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text",children:"Text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Text",children:[(0,jsx_runtime.jsx)(components.yi,{variant:"h1",children:"h1"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h1",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h2",children:"h2"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h2",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h3",children:"h3"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h3",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"h4"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-large",children:"subtitle-large"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-large",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:"subtitle-small"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",children:"body"}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:"caption"}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"label",children:"label"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption-uppercase",children:"caption uppercase"}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption-uppercase",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"label-uppercase",children:"label uppercase"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example",children:"Example"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Example",children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Light",children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20",appearance:"light"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text",appearance:"light"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{appearance:"light"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---dark",children:"Deprecated - dark"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Deprecated - dark",children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20",dark:"true"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text",dark:"true"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{dark:"true"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{args:defaultArgs,parameters:{loki:{skip:!0}},argTypes:{appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(components.e6,{appearance:args.appearance,variant:args.variant,style:{height:"circle"==args.variant?"20px":"",width:"circle"==args.variant?"20px":""}})})})})]})}const rectangle=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Default"}),(0,jsx_runtime.jsx)(components.e6,{}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Inherited from child"}),(0,jsx_runtime.jsx)(components.e6,{children:(0,jsx_runtime.jsx)("div",{style:{height:"200px",width:"450px"},children:"Test text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Height and width set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{height:"200px",width:"200px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Height set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{height:"75px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"Width set with styles"}),(0,jsx_runtime.jsx)(components.e6,{style:{width:"450px"}})]});rectangle.storyName="Rectangle",rectangle.parameters={storySource:{source:'<IcTypography variant="h4">{"Default"}</IcTypography>\n<IcSkeleton />\n<IcTypography variant="h4">{"Inherited from child"}</IcTypography>\n<IcSkeleton><div style={{\n    height: "200px",\n    width: "450px"\n  }}>{"Test text"}</div></IcSkeleton>\n<IcTypography variant="h4">{"Height and width set with styles"}</IcTypography>\n<IcSkeleton style={{\n  height: "200px",\n  width: "200px"\n}} />\n<IcTypography variant="h4">{"Height set with styles"}</IcTypography>\n<IcSkeleton style={{\n  height: "75px"\n}} />\n<IcTypography variant="h4">{"Width set with styles"}</IcTypography>\n<IcSkeleton style={{\n  width: "450px"\n}} />'}};const circle=()=>(0,jsx_runtime.jsx)(components.e6,{variant:"circle"});circle.storyName="Circle",circle.parameters={storySource:{source:'<IcSkeleton variant="circle" />'}};const ic_skeleton_stories_text=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.yi,{variant:"h1",children:"h1"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h1",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h2",children:"h2"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h2",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h3",children:"h3"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h3",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:"h4"}),(0,jsx_runtime.jsx)(components.yi,{variant:"h4",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-large",children:"subtitle-large"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-large",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:"subtitle-small"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",children:"body"}),(0,jsx_runtime.jsx)(components.yi,{variant:"body",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:"caption"}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"label",children:"label"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption-uppercase",children:"caption uppercase"}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption-uppercase",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)(components.yi,{variant:"label-uppercase",children:"label uppercase"}),(0,jsx_runtime.jsx)(components.yi,{variant:"subtitle-small",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})})]});ic_skeleton_stories_text.storyName="Text",ic_skeleton_stories_text.parameters={storySource:{source:'<IcTypography variant="h1">{"h1"}</IcTypography>\n<IcTypography variant="h1"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h2">{"h2"}</IcTypography>\n<IcTypography variant="h2"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h3">{"h3"}</IcTypography>\n<IcTypography variant="h3"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="h4">{"h4"}</IcTypography>\n<IcTypography variant="h4"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="subtitle-large">{"subtitle-large"}</IcTypography>\n<IcTypography variant="subtitle-large"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="subtitle-small">{"subtitle-small"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="body">{"body"}</IcTypography>\n<IcTypography variant="body"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="caption">{"caption"}</IcTypography>\n<IcTypography variant="caption"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="label">{"label"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="caption-uppercase">{"caption uppercase"}</IcTypography>\n<IcTypography variant="caption-uppercase"><IcSkeleton variant="text" /></IcTypography>\n<IcTypography variant="label-uppercase">{"label uppercase"}</IcTypography>\n<IcTypography variant="subtitle-small"><IcSkeleton variant="text" /></IcTypography>'}};const example=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{})]});example.storyName="Example",example.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton />'}};const light=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20",appearance:"light"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text",appearance:"light"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{appearance:"light"})]});light.storyName="Light",light.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" appearance="light" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" appearance="light" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton appearance="light" />'}};const deprecatedDark=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.e6,{variant:"circle",height:"20",dark:"true"}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.yi,{variant:"caption",children:(0,jsx_runtime.jsx)(components.e6,{variant:"text",dark:"true"})}),(0,jsx_runtime.jsx)("div",{style:{height:"8px"}}),(0,jsx_runtime.jsx)(components.e6,{dark:"true"})]});deprecatedDark.storyName="Deprecated - dark",deprecatedDark.parameters={storySource:{source:'<IcSkeleton variant="circle" height="20" dark="true" />\n<div style={{\n  height: "8px"\n}} />\n<IcTypography variant="caption"><IcSkeleton variant="text" dark="true" /></IcTypography>\n<div style={{\n  height: "8px"\n}} />\n<IcSkeleton dark="true" />'}};const playground=args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(components.e6,{appearance:args.appearance,variant:args.variant,style:{height:"circle"==args.variant?"20px":"",width:"circle"==args.variant?"20px":""}})});playground.storyName="Playground",playground.argTypes={appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["rectangle","circle","text"],control:{type:"radio"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div>\n        <IcSkeleton appearance={args.appearance} variant={args.variant} style={{\n    height: args.variant == "circle" ? "20px" : "",\n    width: args.variant == "circle" ? "20px" : ""\n  }}></IcSkeleton>\n      </div>'},loki:{skip:!0}};const componentMeta={title:"Skeleton",component:components.e6,tags:["stories-mdx"],includeStories:["rectangle","circle","text","example","light","deprecatedDark","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_skeleton_stories=componentMeta,__namedExportsOrder=["defaultArgs","rectangle","circle","text","example","light","deprecatedDark","playground"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);