/*! For license information please see ic-alert-stories-mdx.e17996a3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7561],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,customMessage:()=>customMessage,customMessageAndTitleAbove:()=>customMessageAndTitleAbove,default:()=>ic_alert_stories,defaultArgs:()=>defaultArgs,dismissible:()=>dismissible,dismissibleWithAction:()=>dismissibleWithAction,messageOnly:()=>messageOnly,playground:()=>playground,responsiveTitle:()=>responsiveTitle,titleAbove:()=>titleAbove,variants:()=>variants,withAction:()=>withAction});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-alert\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description                                                                                   | Type                                                       | Default     |\n| ------------- | ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `announced`   | `announced`   | If `true`, the alert will have the \'alert\' ARIA role and will be announced to screen readers. | `boolean`                                                  | `true`      |\n| `dismissible` | `dismissible` | If `true`, the alert will have a close icon at the end to dismiss it.                         | `boolean`                                                  | `false`     |\n| `heading`     | `heading`     | The optional title to display at the start of the alert.                                      | `string`                                                   | `""`        |\n| `message`     | `message`     | The main body message of the alert.                                                           | `string`                                                   | `undefined` |\n| `titleAbove`  | `title-above` | If `true`, the title and message will appear above and below instead of inline.               | `boolean`                                                  | `false`     |\n| `variant`     | `variant`     | The variant of the alert which will be rendered.                                              | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n\n\n## Events\n\n| Event       | Description                                   | Type                |\n| ----------- | --------------------------------------------- | ------------------- |\n| `icDismiss` | Is emitted when the user dismisses the alert. | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot        | Description                                    |\n| ----------- | ---------------------------------------------- |\n| `"action"`  | Content is placed to the right of the message. |\n| `"message"` | Content is placed to the right of the title.   |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-alert --\x3e ic-typography\n  ic-alert --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-alert fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={dismissible:!1,heading:"Heading",message:"Message",titleAbove:!1,variant:"neutral"};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Alert",component:components.d$}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Variants",children:[(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),(0,jsx_runtime.jsx)(components.d$,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),(0,jsx_runtime.jsx)(components.d$,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),(0,jsx_runtime.jsx)(components.d$,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),(0,jsx_runtime.jsx)(components.d$,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message-only",children:"Message only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Message only",children:(0,jsx_runtime.jsx)(components.d$,{message:"This alert is for displaying miscellaneous messages"})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dismissible",children:(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-action",children:"With action"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With action",children:(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",children:(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)(_components.p,{children:"Button"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible-with-action",children:"Dismissible with action"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dismissible with action",children:(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0,children:(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)(_components.p,{children:"Button"})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-above",children:"Title above"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Title above",children:(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-title",children:"Responsive title"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Responsive title",children:[(0,jsx_runtime.jsx)(components.d$,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),(0,jsx_runtime.jsx)(components.d$,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message",children:"Custom message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom message",children:(0,jsx_runtime.jsx)(components.d$,{heading:"This alert uses a custom message slot",children:(0,jsx_runtime.jsxs)("p",{slot:"message",children:[(0,jsx_runtime.jsx)(_components.p,{children:"This is some text and"}),(0,jsx_runtime.jsx)(components.gQ,{href:"/",inline:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"this is an inline link"})}),(0,jsx_runtime.jsx)(_components.p,{children:"within the text."})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message-and-title-above",children:"Custom message and title above"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom message and title above",children:(0,jsx_runtime.jsx)(components.d$,{heading:"Want to know more about our coffee?",titleAbove:!0,children:(0,jsx_runtime.jsx)("span",{slot:"message",style:{font:"var(--ic-font-body)"},children:(0,jsx_runtime.jsxs)(_components.p,{children:["Go to our ",(0,jsx_runtime.jsx)(components.gQ,{href:"/",children:"coffee page"})," to learn more."]})})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{args:defaultArgs,argTypes:{variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}}},name:"Playground",children:args=>(0,jsx_runtime.jsx)(components.d$,{dismissible:args.dismissible,variant:args.variant,heading:args.heading,message:args.message,titleAbove:args.titleAbove})})})]})}const variants=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages"}),(0,jsx_runtime.jsx)(components.d$,{variant:"info",heading:"Info",message:"This alert is for displaying information"}),(0,jsx_runtime.jsx)(components.d$,{variant:"error",heading:"Error",message:"This alert is for displaying errors"}),(0,jsx_runtime.jsx)(components.d$,{variant:"warning",heading:"Warning",message:"This alert is for displaying warnings"}),(0,jsx_runtime.jsx)(components.d$,{variant:"success",heading:"Success",message:"This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn't overflow"})]});variants.storyName="Variants",variants.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" />\n<IcAlert variant="info" heading="Info" message="This alert is for displaying information" />\n<IcAlert variant="error" heading="Error" message="This alert is for displaying errors" />\n<IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings" />\n<IcAlert variant="success" heading="Success" message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple lines so the alert should expand as well to make sure it doesn\'t overflow" />'}};const messageOnly=()=>(0,jsx_runtime.jsx)(components.d$,{message:"This alert is for displaying miscellaneous messages"});messageOnly.storyName="Message only",messageOnly.parameters={storySource:{source:'<IcAlert message="This alert is for displaying miscellaneous messages" />'}};const dismissible=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0});dismissible.storyName="Dismissible",dismissible.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible />'}};const withAction=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",children:(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)("p",{children:"Button"})})});withAction.storyName="With action",withAction.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages"><IcButton slot="action" variant="secondary"><p>{"Button"}</p></IcButton></IcAlert>'}};const dismissibleWithAction=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",dismissible:!0,children:(0,jsx_runtime.jsx)(components.$Z,{slot:"action",variant:"secondary",children:(0,jsx_runtime.jsx)("p",{children:"Button"})})});dismissibleWithAction.storyName="Dismissible with action",dismissibleWithAction.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" dismissible><IcButton slot="action" variant="secondary"><p>{"Button"}</p></IcButton></IcAlert>'}};const titleAbove=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"Neutral",message:"This alert is for displaying miscellaneous messages",titleAbove:!0});titleAbove.storyName="Title above",titleAbove.parameters={storySource:{source:'<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages" titleAbove />'}};const responsiveTitle=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.d$,{heading:"This title is very long so should force the alert to add 'title-above'",message:"This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"}),(0,jsx_runtime.jsx)(components.d$,{variant:"success",heading:"Shorter title",message:"Neither of these has 'title-above' set to true"})]});responsiveTitle.storyName="Responsive title",responsiveTitle.parameters={storySource:{source:'<IcAlert heading="This title is very long so should force the alert to add \'title-above\'" message="This alert does not have \'title-above\' added as a prop but it is forced to add it due to the length of the title" />\n<IcAlert variant="success" heading="Shorter title" message="Neither of these has \'title-above\' set to true" />'}};const customMessage=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"This alert uses a custom message slot",children:(0,jsx_runtime.jsxs)("p",{slot:"message",children:[(0,jsx_runtime.jsx)("p",{children:"This is some text and"}),(0,jsx_runtime.jsx)(components.gQ,{href:"/",inline:!0,children:(0,jsx_runtime.jsx)("p",{children:"this is an inline link"})}),(0,jsx_runtime.jsx)("p",{children:"within the text."})]})});customMessage.storyName="Custom message",customMessage.parameters={storySource:{source:'<IcAlert heading="This alert uses a custom message slot"><p slot="message"><p>{"This is some text and"}</p><IcLink href="/" inline><p>{"this is an inline link"}</p></IcLink><p>{"within the text."}</p></p></IcAlert>'}};const customMessageAndTitleAbove=()=>(0,jsx_runtime.jsx)(components.d$,{heading:"Want to know more about our coffee?",titleAbove:!0,children:(0,jsx_runtime.jsx)("span",{slot:"message",style:{font:"var(--ic-font-body)"},children:(0,jsx_runtime.jsxs)("p",{children:["Go to our ",(0,jsx_runtime.jsx)(components.gQ,{href:"/",children:"coffee page"})," to learn more."]})})});customMessageAndTitleAbove.storyName="Custom message and title above",customMessageAndTitleAbove.parameters={storySource:{source:'<IcAlert heading="Want to know more about our coffee?" titleAbove><span slot="message" style={{\n    font: "var(--ic-font-body)"\n  }}><p>{"Go to our "}<IcLink href="/">{"coffee page"}</IcLink>{" to learn more."}</p></span></IcAlert>'}};const playground=args=>(0,jsx_runtime.jsx)(components.d$,{dismissible:args.dismissible,variant:args.variant,heading:args.heading,message:args.message,titleAbove:args.titleAbove});playground.storyName="Playground",playground.argTypes={variant:{options:["neutral","info","warning","error","success"],control:{type:"select"}}},playground.args=defaultArgs,playground.parameters={storySource:{source:"args => <IcAlert dismissible={args.dismissible} variant={args.variant} heading={args.heading} message={args.message} titleAbove={args.titleAbove}>\n      </IcAlert>"}};const componentMeta={title:"Alert",component:components.d$,tags:["stories-mdx"],includeStories:["variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_alert_stories=componentMeta,__namedExportsOrder=["defaultArgs","variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","playground"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);