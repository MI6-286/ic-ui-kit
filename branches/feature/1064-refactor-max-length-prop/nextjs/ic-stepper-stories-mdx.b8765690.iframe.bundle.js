"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5697],{"../react/src/stories/ic-stepper.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompactButtons:()=>CompactButtons,__namedExportsOrder:()=>__namedExportsOrder,compactStepper:()=>compactStepper,compactStepperLight:()=>compactStepperLight,customCompactStepper:()=>customCompactStepper,customConnectorWidth:()=>customConnectorWidth,customStepper:()=>customStepper,default:()=>ic_stepper_stories,defaultArgs:()=>defaultArgs,fullWidthStepper:()=>fullWidthStepper,leftAlignedStepper:()=>leftAlignedStepper,light:()=>light,playground:()=>playground,withHiddenStepInformation:()=>withHiddenStepInformation,withoutHeadings:()=>withoutHeadings});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-stepper\n\nThis is a wrapper component to be placed around one or more ic-step components\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                   | Type                     | Default        |\n| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------- |\n| `aligned`        | `aligned`         | The alignment of the default stepper within its container.                                                                                                                                                                    | `"full-width" \\| "left"` | `"full-width"` |\n| `appearance`     | `appearance`      | The appearance of the stepper.                                                                                                                                                                                                | `"default" \\| "light"`   | `"default"`    |\n| `connectorWidth` | `connector-width` | The length of the connnector between each step in pixels. Minimum length is 100px.                                                                                                                                            | `number`                 | `100`          |\n| `hideStepInfo`   | `hide-step-info`  | If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper. | `boolean`                | `false`        |\n| `variant`        | `variant`         | The variant of the stepper.                                                                                                                                                                                                   | `"compact" \\| "default"` | `"default"`    |\n\n\n----------------------------------------------\n\n\n',ic_step_readme_namespaceObject='# ic-step\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute    | Description                                                                                                                                             | Type                                                 | Default     |\n| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |\n| `heading`    | `heading`    | The title of the step within the stepper.                                                                                                               | `string`                                             | `undefined` |\n| `status`     | `status`     | The status of the step. Use this prop to display a status message on the step if it is required or optional.                                            | `"optional" \\| "required"`                           | `undefined` |\n| `subheading` | `subheading` | Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status. | `string`                                             | `undefined` |\n| `type`       | `type`       | The state of the step within the stepper.                                                                                                               | `"active" \\| "completed" \\| "current" \\| "disabled"` | `"active"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-step --\x3e ic-loading-indicator\n  ic-step --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  style ic-step fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const defaultArgs={aligned:"full-width",connectorWidth:100,appearance:"default",variant:"default",hideStepInfo:!1,heading:"Editable step",type:"current",status:"optional",subheading:"Optional subtitle"},CompactButtons=()=>{const _components=Object.assign({div:"div"},(0,lib.RP)());return(0,jsx_runtime.jsxs)(_components.div,{children:[(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=steps.length-1;i>0;i--)"current"===steps[i].type&&(steps[i].type=compactStepTypes[i],steps[i-1].type="current",i--);"current"===steps[steps.length-2].type&&nextBtn.setAttribute("disabled","false"),"current"===steps[0].type&&backBtn.setAttribute("disabled","true")},children:"Back"}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-compact-stepper",onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=0;i<steps.length-1;i++)"current"===steps[i].type&&(steps[i].type=compactStepTypes[i],steps[i+1].type="current",i++);"current"===steps[1].type&&backBtn.setAttribute("disabled","false"),"current"===steps[steps.length-1].type&&nextBtn.setAttribute("disabled","true")},children:"Next"})]})};function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p",div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Stepper",component:components.Wx}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:ic_step_readme_namespaceObject}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width-stepper",children:"Full-width stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full-width stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned-stepper",children:"Left-aligned stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left-aligned stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-hidden-step-information",children:"With hidden step information"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With hidden step information",children:(0,jsx_runtime.jsxs)(components.Wx,{hideStepInfo:!0,children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-headings",children:"Without headings"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Without headings",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{type:"current"}),(0,jsx_runtime.jsx)(components.fm,{})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-stepper",children:"Custom stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"light",children:"Light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Light",children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34"},children:(0,jsx_runtime.jsxs)(components.Wx,{appearance:"light",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]})})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-connector-width",children:"Custom connector width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom connector width",children:(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",connectorWidth:"200",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact-stepper",children:"Compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Compact stepper",parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",status:"optional"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",status:"required"})]}),(0,jsx_runtime.jsx)(CompactButtons,{})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact-stepper-light",children:"Compact stepper light"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Compact stepper light",parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34"},children:(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",appearance:"light",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",status:"optional"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",status:"required"})]})}),(0,jsx_runtime.jsx)(CompactButtons,{})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-compact-stepper",children:"Custom compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Custom compact stepper",parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"custom-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fifth and final step",subheading:"Optional Subtitle",status:"optional",type:"completed"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-custom-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=customSteps.length-1;i>0;i--)"current"===customSteps[i].type&&(customSteps[i].type=customCompactStepTypes[i],customSteps[i-1].type="current",i--);"current"===customSteps[customSteps.length-2].type&&nextBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[0].type&&backBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-custom-compact-stepper",onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=0;i<customSteps.length-1;i++)"current"===customSteps[i].type&&(customSteps[i].type=customCompactStepTypes[i],customSteps[i+1].type="current",i++);"current"===customSteps[1].type&&backBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[customSteps.length-1].type&&nextBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Next"})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Playground",args:defaultArgs,argTypes:{aligned:{options:["left","full-width"],control:{type:"inline-radio"}},connectorWidth:{control:{type:"range",min:100,max:500,step:5},description:"Width of the connector, only available when IcStepper is left-aligned."},appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["default","compact"],control:{type:"inline-radio"}},heading:{control:"text"},type:{options:["active","completed","disabled"],control:{type:"inline-radio"}},status:{options:["optional","required"],control:{type:"inline-radio"}},subheading:{control:"text"}},children:args=>(0,jsx_runtime.jsxs)(_components.div,{style:{backgroundColor:"light"===args.appearance?"#585858":null,padding:"1rem"},children:[(0,jsx_runtime.jsxs)(components.Wx,{aligned:args.aligned,appearance:args.appearance,variant:args.variant,connectorWidth:args.connectorWidth,hideStepInfo:args.hideStepInfo,id:"compact"===args.variant?"standard-compact-stepper":"default-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:args.heading,subheading:args.subheading,type:args.type,status:args.status}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]}),"compact"===args.variant&&(0,jsx_runtime.jsx)(CompactButtons,{})]})})})]})}const fullWidthStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]});fullWidthStepper.storyName="Full-width stepper",fullWidthStepper.parameters={storySource:{source:'<IcStepper><IcStep heading="Create" type="completed" /><IcStep heading="Read" type="current" /><IcStep heading="Update" type="active" /><IcStep heading="Delete" type="disabled" /></IcStepper>'}};const leftAlignedStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]});leftAlignedStepper.storyName="Left-aligned stepper",leftAlignedStepper.parameters={storySource:{source:'<IcStepper aligned="left"><IcStep heading="Create" type="completed" /><IcStep heading="Read" type="current" /><IcStep heading="Update" type="active" /><IcStep heading="Delete" type="disabled" /></IcStepper>'}};const withHiddenStepInformation=()=>(0,jsx_runtime.jsxs)(components.Wx,{hideStepInfo:!0,children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]});withHiddenStepInformation.storyName="With hidden step information",withHiddenStepInformation.parameters={storySource:{source:'<IcStepper hideStepInfo><IcStep heading="Create" type="completed" /><IcStep heading="Read" type="current" /><IcStep heading="Update" type="active" /><IcStep heading="Delete" type="disabled" /></IcStepper>'}};const withoutHeadings=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{type:"current"}),(0,jsx_runtime.jsx)(components.fm,{})]});withoutHeadings.storyName="Without headings",withoutHeadings.parameters={storySource:{source:'<IcStepper><IcStep type="completed" /><IcStep type="completed" /><IcStep type="current" /><IcStep /></IcStepper>'}};const customStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})]});customStepper.storyName="Custom stepper",customStepper.parameters={storySource:{source:'<IcStepper><IcStep heading="First" /><IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" /><IcStep heading="Third" type="disabled" /><IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" /></IcStepper>'}};const light=()=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34"},children:(0,jsx_runtime.jsxs)(components.Wx,{appearance:"light",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]})});light.storyName="Light",light.parameters={storySource:{source:'<div style={{\n  backgroundColor: "#2c2f34"\n}}><IcStepper appearance="light"><IcStep heading="Create" type="completed" /><IcStep heading="Read" type="current" /><IcStep heading="Update" type="active" /><IcStep heading="Delete" type="disabled" /></IcStepper></div>'}};const customConnectorWidth=()=>(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",connectorWidth:"200",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"})]});customConnectorWidth.storyName="Custom connector width",customConnectorWidth.parameters={storySource:{source:'<IcStepper aligned="left" connectorWidth="200"><IcStep heading="First" /><IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" /><IcStep heading="Third" type="disabled" /><IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" /></IcStepper>'}};const compactStepper=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",status:"optional"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",status:"required"})]}),(0,jsx_runtime.jsx)(CompactButtons,{})]});compactStepper.storyName="Compact stepper",compactStepper.parameters={storySource:{source:'<IcStepper variant="compact" id="standard-compact-stepper"><IcStep heading="Create" /><IcStep heading="Read" type="current" /><IcStep heading="Update" status="optional" /><IcStep heading="Delete" status="required" /></IcStepper>\n<CompactButtons />'},loki:{skip:!0}};const compactStepperLight=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"#2c2f34"},children:(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",appearance:"light",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Read",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",status:"optional"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",status:"required"})]})}),(0,jsx_runtime.jsx)(CompactButtons,{})]});compactStepperLight.storyName="Compact stepper light",compactStepperLight.parameters={storySource:{source:'<div style={{\n  backgroundColor: "#2c2f34"\n}}><IcStepper variant="compact" id="standard-compact-stepper" appearance="light"><IcStep heading="Create" /><IcStep heading="Read" type="current" /><IcStep heading="Update" status="optional" /><IcStep heading="Delete" status="required" /></IcStepper></div>\n<CompactButtons />'},loki:{skip:!0}};const customCompactStepper=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"custom-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"First"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Second With a Very Long Title",subheading:"Optional subtitle that is long and should wrap",type:"current"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Third",type:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fourth title that is long and should wrap",subheading:"Optional Subtitle",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Fifth and final step",subheading:"Optional Subtitle",status:"optional",type:"completed"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-custom-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=customSteps.length-1;i>0;i--)"current"===customSteps[i].type&&(customSteps[i].type=customCompactStepTypes[i],customSteps[i-1].type="current",i--);"current"===customSteps[customSteps.length-2].type&&nextBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[0].type&&backBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-custom-compact-stepper",onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=0;i<customSteps.length-1;i++)"current"===customSteps[i].type&&(customSteps[i].type=customCompactStepTypes[i],customSteps[i+1].type="current",i++);"current"===customSteps[1].type&&backBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[customSteps.length-1].type&&nextBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Next"})})]});customCompactStepper.storyName="Custom compact stepper",customCompactStepper.parameters={storySource:{source:'<IcStepper variant="compact" id="custom-compact-stepper"><IcStep heading="First" /><IcStep heading="Second With a Very Long Title" subheading="Optional subtitle that is long and should wrap" type="current" /><IcStep heading="Third" type="disabled" /><IcStep heading="Fourth title that is long and should wrap" subheading="Optional Subtitle" type="completed" /><IcStep heading="Fifth and final step" subheading="Optional Subtitle" status="optional" type="completed" /></IcStepper>\n<IcButton class="back-btn-custom-compact-stepper" style={{\n  marginRight: "var(--ic-space-lg)"\n}} onClick={() => {\n  const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");\n  const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");\n  const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");\n  const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];\n  for (let i = customSteps.length - 1; i > 0; i--) {\n    if (customSteps[i].type === "current") {\n      customSteps[i].type = customCompactStepTypes[i];\n      customSteps[i - 1].type = "current";\n      i--;\n    }\n  }\n  if (customSteps[customSteps.length - 2].type === "current") {\n    nextBtnCustomCompactStepper.setAttribute("disabled", "false");\n  }\n  if (customSteps[0].type === "current") {\n    backBtnCustomCompactStepper.setAttribute("disabled", "true");\n  }\n}}><p>{"Back"}</p></IcButton>\n<IcButton class="next-btn-custom-compact-stepper" onClick={() => {\n  const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");\n  const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");\n  const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");\n  const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];\n  for (let i = 0; i < customSteps.length - 1; i++) {\n    if (customSteps[i].type === "current") {\n      customSteps[i].type = customCompactStepTypes[i];\n      customSteps[i + 1].type = "current";\n      i++;\n    }\n  }\n  if (customSteps[1].type === "current") {\n    backBtnCustomCompactStepper.setAttribute("disabled", "false");\n  }\n  if (customSteps[customSteps.length - 1].type === "current") {\n    nextBtnCustomCompactStepper.setAttribute("disabled", "true");\n  }\n}}><p>{"Next"}</p></IcButton>'},loki:{skip:!0}};const playground=args=>(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:"light"===args.appearance?"#585858":null,padding:"1rem"},children:[(0,jsx_runtime.jsxs)(components.Wx,{aligned:args.aligned,appearance:args.appearance,variant:args.variant,connectorWidth:args.connectorWidth,hideStepInfo:args.hideStepInfo,id:"compact"===args.variant?"standard-compact-stepper":"default-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{heading:"Create",type:"completed"}),(0,jsx_runtime.jsx)(components.fm,{heading:args.heading,subheading:args.subheading,type:args.type,status:args.status}),(0,jsx_runtime.jsx)(components.fm,{heading:"Update",type:"active"}),(0,jsx_runtime.jsx)(components.fm,{heading:"Delete",type:"disabled"})]}),"compact"===args.variant&&(0,jsx_runtime.jsx)(CompactButtons,{})]});playground.storyName="Playground",playground.argTypes={aligned:{options:["left","full-width"],control:{type:"inline-radio"}},connectorWidth:{control:{type:"range",min:100,max:500,step:5},description:"Width of the connector, only available when IcStepper is left-aligned."},appearance:{options:["default","light"],control:{type:"inline-radio"}},variant:{options:["default","compact"],control:{type:"inline-radio"}},heading:{control:"text"},type:{options:["active","completed","disabled"],control:{type:"inline-radio"}},status:{options:["optional","required"],control:{type:"inline-radio"}},subheading:{control:"text"}},playground.args=defaultArgs,playground.parameters={storySource:{source:'args => <div style={{\n  backgroundColor: args.appearance === "light" ? "#585858" : null,\n  padding: "1rem"\n}}>\n          <IcStepper aligned={args.aligned} appearance={args.appearance} variant={args.variant} connectorWidth={args.connectorWidth} hideStepInfo={args.hideStepInfo} id={args.variant === "compact" ? "standard-compact-stepper" : "default-stepper"}>\n            <IcStep heading="Create" type="completed" />\n            <IcStep heading={args.heading} subheading={args.subheading} type={args.type} status={args.status} />\n            <IcStep heading="Update" type="active" />\n            <IcStep heading="Delete" type="disabled" />\n          </IcStepper>\n          {args.variant === "compact" && <CompactButtons />}\n        </div>'}};const componentMeta={title:"Stepper",component:components.Wx,tags:["stories-mdx"],includeStories:["fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutHeadings","customStepper","light","customConnectorWidth","compactStepper","compactStepperLight","customCompactStepper","playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_stepper_stories=componentMeta,__namedExportsOrder=["defaultArgs","CompactButtons","fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutHeadings","customStepper","light","customConnectorWidth","compactStepper","compactStepperLight","customCompactStepper","playground"]}}]);