"use strict";(self.webpackChunk_ukic_nextjs=self.webpackChunk_ukic_nextjs||[]).push([[5697],{"../react/src/stories/ic-stepper.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,compactStepper:()=>compactStepper,customCompactStepper:()=>customCompactStepper,customConnectorWidth:()=>customConnectorWidth,customStepper:()=>customStepper,default:()=>ic_stepper_stories,fullWidthStepper:()=>fullWidthStepper,leftAlignedStepper:()=>leftAlignedStepper,withHiddenStepInformation:()=>withHiddenStepInformation,withoutStepTitles:()=>withoutStepTitles});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../react/node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("../react/src/components.ts");const readme_namespaceObject='# ic-stepper\n\nThis is a wrapper component to be placed around one or more ic-step components\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute         | Description                                                                                                                                                                                                                   | Type                     | Default        |\n| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------- |\n| `aligned`        | `aligned`         | The alignment of the default stepper within its container.                                                                                                                                                                    | `"full-width" \\| "left"` | `"full-width"` |\n| `connectorWidth` | `connector-width` | The length of the connnector between each step in pixels. Minimum length is 100px.                                                                                                                                            | `number`                 | `100`          |\n| `hideStepInfo`   | `hide-step-info`  | If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper. | `boolean`                | `false`        |\n| `variant`        | `variant`         | The variant of the stepper.                                                                                                                                                                                                   | `"compact" \\| "default"` | `"default"`    |\n\n\n----------------------------------------------\n\n\n',ic_step_readme_namespaceObject='# ic-step\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property       | Attribute       | Description                                                                                                                                             | Type                                                 | Default     |\n| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |\n| `stepStatus`   | `step-status`   | The status of the step. Use this prop to display a status message on the step if it is required or optional.                                            | `"optional" \\| "required"`                           | `undefined` |\n| `stepSubtitle` | `step-subtitle` | Additional information about the step. Use this prop to override the default step status messaging displayed when selecting a step type or step status. | `string`                                             | `undefined` |\n| `stepTitle`    | `step-title`    | The title of the step within the stepper.                                                                                                               | `string`                                             | `undefined` |\n| `stepType`     | `step-type`     | The state of the step within the stepper.                                                                                                               | `"active" \\| "completed" \\| "current" \\| "disabled"` | `"active"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-loading-indicator](../ic-loading-indicator)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-step --\x3e ic-loading-indicator\n  ic-step --\x3e ic-typography\n  ic-loading-indicator --\x3e ic-typography\n  style ic-step fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Stepper",component:components.Wx}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:ic_step_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"full-width-stepper",children:"Full-width stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Full-width stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-aligned-stepper",children:"Left-aligned stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Left-aligned stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-hidden-step-information",children:"With hidden step information"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"With hidden step information",children:(0,jsx_runtime.jsxs)(components.Wx,{hideStepInfo:!0,children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"without-step-titles",children:"Without step titles"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Without step titles",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-stepper",children:"Custom stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom stepper",children:(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-connector-width",children:"Custom connector width"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Custom connector width",children:(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",connectorWidth:"200",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact-stepper",children:"Compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Compact stepper",parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepStatus:"optional"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepStatus:"required"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=steps.length-1;i>0;i--)"current"===steps[i].stepType&&(steps[i].stepType=compactStepTypes[i],steps[i-1].stepType="current",i--);"current"===steps[steps.length-2].stepType&&nextBtn.setAttribute("disabled","false"),"current"===steps[0].stepType&&backBtn.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-compact-stepper",onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=0;i<steps.length-1;i++)"current"===steps[i].stepType&&(steps[i].stepType=compactStepTypes[i],steps[i+1].stepType="current",i++);"current"===steps[1].stepType&&backBtn.setAttribute("disabled","false"),"current"===steps[steps.length-1].stepType&&nextBtn.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Next"})})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-compact-stepper",children:"Custom compact stepper"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsxs)(dist.gG,{name:"Custom compact stepper",parameters:{loki:{skip:!0}},children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"custom-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fifth and final step",stepSubtitle:"Optional Subtitle",stepStatus:"optional",stepType:"completed"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-custom-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=customSteps.length-1;i>0;i--)"current"===customSteps[i].stepType&&(customSteps[i].stepType=customCompactStepTypes[i],customSteps[i-1].stepType="current",i--);"current"===customSteps[customSteps.length-2].stepType&&nextBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[0].stepType&&backBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-custom-compact-stepper",onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=0;i<customSteps.length-1;i++)"current"===customSteps[i].stepType&&(customSteps[i].stepType=customCompactStepTypes[i],customSteps[i+1].stepType="current",i++);"current"===customSteps[1].stepType&&backBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[customSteps.length-1].stepType&&nextBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)(_components.p,{children:"Next"})})]})})]})}const fullWidthStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]});fullWidthStepper.storyName="Full-width stepper",fullWidthStepper.parameters={storySource:{source:'<IcStepper><IcStep stepTitle="Create" stepType="completed" /><IcStep stepTitle="Read" stepType="current" /><IcStep stepTitle="Update" stepType="active" /><IcStep stepTitle="Delete" stepType="disabled" /></IcStepper>'}};const leftAlignedStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]});leftAlignedStepper.storyName="Left-aligned stepper",leftAlignedStepper.parameters={storySource:{source:'<IcStepper aligned="left"><IcStep stepTitle="Create" stepType="completed" /><IcStep stepTitle="Read" stepType="current" /><IcStep stepTitle="Update" stepType="active" /><IcStep stepTitle="Delete" stepType="disabled" /></IcStepper>'}};const withHiddenStepInformation=()=>(0,jsx_runtime.jsxs)(components.Wx,{hideStepInfo:!0,children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepType:"active"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepType:"disabled"})]});withHiddenStepInformation.storyName="With hidden step information",withHiddenStepInformation.parameters={storySource:{source:'<IcStepper hideStepInfo><IcStep stepTitle="Create" stepType="completed" /><IcStep stepTitle="Read" stepType="current" /><IcStep stepTitle="Update" stepType="active" /><IcStep stepTitle="Delete" stepType="disabled" /></IcStepper>'}};const withoutStepTitles=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{})]});withoutStepTitles.storyName="Without step titles",withoutStepTitles.parameters={storySource:{source:'<IcStepper><IcStep stepType="completed" /><IcStep stepType="completed" /><IcStep stepType="current" /><IcStep /></IcStepper>'}};const customStepper=()=>(0,jsx_runtime.jsxs)(components.Wx,{children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"})]});customStepper.storyName="Custom stepper",customStepper.parameters={storySource:{source:'<IcStepper><IcStep stepTitle="First" /><IcStep stepTitle="Second With a Very Long Title" stepSubtitle="Optional subtitle that is long and should wrap" stepType="current" /><IcStep stepTitle="Third" stepType="disabled" /><IcStep stepTitle="Fourth title that is long and should wrap" stepSubtitle="Optional Subtitle" stepType="completed" /></IcStepper>'}};const customConnectorWidth=()=>(0,jsx_runtime.jsxs)(components.Wx,{aligned:"left",connectorWidth:"200",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"})]});customConnectorWidth.storyName="Custom connector width",customConnectorWidth.parameters={storySource:{source:'<IcStepper aligned="left" connectorWidth="200"><IcStep stepTitle="First" /><IcStep stepTitle="Second With a Very Long Title" stepSubtitle="Optional subtitle that is long and should wrap" stepType="current" /><IcStep stepTitle="Third" stepType="disabled" /><IcStep stepTitle="Fourth title that is long and should wrap" stepSubtitle="Optional Subtitle" stepType="completed" /></IcStepper>'}};const compactStepper=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"standard-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Create"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Read",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Update",stepStatus:"optional"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Delete",stepStatus:"required"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=steps.length-1;i>0;i--)"current"===steps[i].stepType&&(steps[i].stepType=compactStepTypes[i],steps[i-1].stepType="current",i--);"current"===steps[steps.length-2].stepType&&nextBtn.setAttribute("disabled","false"),"current"===steps[0].stepType&&backBtn.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-compact-stepper",onClick:()=>{const backBtn=document.querySelector(".back-btn-compact-stepper"),nextBtn=document.querySelector(".next-btn-compact-stepper"),steps=document.querySelectorAll("#standard-compact-stepper > ic-step"),compactStepTypes=["active","completed","disabled","completed"];for(let i=0;i<steps.length-1;i++)"current"===steps[i].stepType&&(steps[i].stepType=compactStepTypes[i],steps[i+1].stepType="current",i++);"current"===steps[1].stepType&&backBtn.setAttribute("disabled","false"),"current"===steps[steps.length-1].stepType&&nextBtn.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Next"})})]});compactStepper.storyName="Compact stepper",compactStepper.parameters={storySource:{source:'<IcStepper variant="compact" id="standard-compact-stepper"><IcStep stepTitle="Create" /><IcStep stepTitle="Read" stepType="current" /><IcStep stepTitle="Update" stepStatus="optional" /><IcStep stepTitle="Delete" stepStatus="required" /></IcStepper>\n<IcButton class="back-btn-compact-stepper" style={{\n  marginRight: "var(--ic-space-lg)"\n}} onClick={() => {\n  const backBtn = document.querySelector(".back-btn-compact-stepper");\n  const nextBtn = document.querySelector(".next-btn-compact-stepper");\n  const steps = document.querySelectorAll("#standard-compact-stepper > ic-step");\n  const compactStepTypes = ["active", "completed", "disabled", "completed"];\n  for (let i = steps.length - 1; i > 0; i--) {\n    if (steps[i].stepType === "current") {\n      steps[i].stepType = compactStepTypes[i];\n      steps[i - 1].stepType = "current";\n      i--;\n    }\n  }\n  if (steps[steps.length - 2].stepType === "current") {\n    nextBtn.setAttribute("disabled", "false");\n  }\n  if (steps[0].stepType === "current") {\n    backBtn.setAttribute("disabled", "true");\n  }\n}}><p>{"Back"}</p></IcButton>\n<IcButton class="next-btn-compact-stepper" onClick={() => {\n  const backBtn = document.querySelector(".back-btn-compact-stepper");\n  const nextBtn = document.querySelector(".next-btn-compact-stepper");\n  const steps = document.querySelectorAll("#standard-compact-stepper > ic-step");\n  const compactStepTypes = ["active", "completed", "disabled", "completed"];\n  for (let i = 0; i < steps.length - 1; i++) {\n    if (steps[i].stepType === "current") {\n      steps[i].stepType = compactStepTypes[i];\n      steps[i + 1].stepType = "current";\n      i++;\n    }\n  }\n  if (steps[1].stepType === "current") {\n    backBtn.setAttribute("disabled", "false");\n  }\n  if (steps[steps.length - 1].stepType === "current") {\n    nextBtn.setAttribute("disabled", "true");\n  }\n}}><p>{"Next"}</p></IcButton>'},loki:{skip:!0}};const customCompactStepper=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(components.Wx,{variant:"compact",id:"custom-compact-stepper",children:[(0,jsx_runtime.jsx)(components.fm,{stepTitle:"First"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Second With a Very Long Title",stepSubtitle:"Optional subtitle that is long and should wrap",stepType:"current"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Third",stepType:"disabled"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fourth title that is long and should wrap",stepSubtitle:"Optional Subtitle",stepType:"completed"}),(0,jsx_runtime.jsx)(components.fm,{stepTitle:"Fifth and final step",stepSubtitle:"Optional Subtitle",stepStatus:"optional",stepType:"completed"})]}),(0,jsx_runtime.jsx)(components.nP,{class:"back-btn-custom-compact-stepper",style:{marginRight:"var(--ic-space-lg)"},onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=customSteps.length-1;i>0;i--)"current"===customSteps[i].stepType&&(customSteps[i].stepType=customCompactStepTypes[i],customSteps[i-1].stepType="current",i--);"current"===customSteps[customSteps.length-2].stepType&&nextBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[0].stepType&&backBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Back"})}),(0,jsx_runtime.jsx)(components.nP,{class:"next-btn-custom-compact-stepper",onClick:()=>{const backBtnCustomCompactStepper=document.querySelector(".back-btn-custom-compact-stepper"),nextBtnCustomCompactStepper=document.querySelector(".next-btn-custom-compact-stepper"),customSteps=document.querySelectorAll("#custom-compact-stepper > ic-step"),customCompactStepTypes=["active","completed","disabled","completed","disabled"];for(let i=0;i<customSteps.length-1;i++)"current"===customSteps[i].stepType&&(customSteps[i].stepType=customCompactStepTypes[i],customSteps[i+1].stepType="current",i++);"current"===customSteps[1].stepType&&backBtnCustomCompactStepper.setAttribute("disabled","false"),"current"===customSteps[customSteps.length-1].stepType&&nextBtnCustomCompactStepper.setAttribute("disabled","true")},children:(0,jsx_runtime.jsx)("p",{children:"Next"})})]});customCompactStepper.storyName="Custom compact stepper",customCompactStepper.parameters={storySource:{source:'<IcStepper variant="compact" id="custom-compact-stepper"><IcStep stepTitle="First" /><IcStep stepTitle="Second With a Very Long Title" stepSubtitle="Optional subtitle that is long and should wrap" stepType="current" /><IcStep stepTitle="Third" stepType="disabled" /><IcStep stepTitle="Fourth title that is long and should wrap" stepSubtitle="Optional Subtitle" stepType="completed" /><IcStep stepTitle="Fifth and final step" stepSubtitle="Optional Subtitle" stepStatus="optional" stepType="completed" /></IcStepper>\n<IcButton class="back-btn-custom-compact-stepper" style={{\n  marginRight: "var(--ic-space-lg)"\n}} onClick={() => {\n  const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");\n  const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");\n  const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");\n  const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];\n  for (let i = customSteps.length - 1; i > 0; i--) {\n    if (customSteps[i].stepType === "current") {\n      customSteps[i].stepType = customCompactStepTypes[i];\n      customSteps[i - 1].stepType = "current";\n      i--;\n    }\n  }\n  if (customSteps[customSteps.length - 2].stepType === "current") {\n    nextBtnCustomCompactStepper.setAttribute("disabled", "false");\n  }\n  if (customSteps[0].stepType === "current") {\n    backBtnCustomCompactStepper.setAttribute("disabled", "true");\n  }\n}}><p>{"Back"}</p></IcButton>\n<IcButton class="next-btn-custom-compact-stepper" onClick={() => {\n  const backBtnCustomCompactStepper = document.querySelector(".back-btn-custom-compact-stepper");\n  const nextBtnCustomCompactStepper = document.querySelector(".next-btn-custom-compact-stepper");\n  const customSteps = document.querySelectorAll("#custom-compact-stepper > ic-step");\n  const customCompactStepTypes = ["active", "completed", "disabled", "completed", "disabled"];\n  for (let i = 0; i < customSteps.length - 1; i++) {\n    if (customSteps[i].stepType === "current") {\n      customSteps[i].stepType = customCompactStepTypes[i];\n      customSteps[i + 1].stepType = "current";\n      i++;\n    }\n  }\n  if (customSteps[1].stepType === "current") {\n    backBtnCustomCompactStepper.setAttribute("disabled", "false");\n  }\n  if (customSteps[customSteps.length - 1].stepType === "current") {\n    nextBtnCustomCompactStepper.setAttribute("disabled", "true");\n  }\n}}><p>{"Next"}</p></IcButton>'},loki:{skip:!0}};const componentMeta={title:"Stepper",component:components.Wx,tags:["stories-mdx"],includeStories:["fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutStepTitles","customStepper","customConnectorWidth","compactStepper","customCompactStepper"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_stepper_stories=componentMeta,__namedExportsOrder=["fullWidthStepper","leftAlignedStepper","withHiddenStepInformation","withoutStepTitles","customStepper","customConnectorWidth","compactStepper","customCompactStepper"]}}]);