import { Component, Host, Prop, h } from "@stencil/core";

import {
  getInputHelperTextID,
  onComponentRequiredPropUndefined,
} from "../../utils/helpers";

@Component({
  tag: "ic-input-label",
  styleUrl: "./ic-input-label.css",
})
export class InputLabel {
  /**
   * The appearance of the input label.
   */
  @Prop() appearance?: "dark" | "default" = "default";

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled: boolean = false;

  /**
   * The ID of the form element the label is bound to.
   */
  @Prop() for: string;

  /**
   * The helper text that will be displayed.
   */
  @Prop() helperText: string = "";

  /**
   * The text content of the label.
   */
  @Prop() label!: string;

  /**
   * If `true`, the readonly state will be set.
   */
  @Prop() readonly: boolean = false;

  /**
   * If `true`, the input label will require a value.
   */
  @Prop() required: boolean = false;

  /**
   * The status of the label - e.g. 'error'.
   */
  @Prop() status: "error" | "" = "";

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Input Label"
    );
  }

  render() {
    const {
      disabled,
      readonly,
      label,
      required,
      helperText,
      status,
      appearance,
    } = this;
    const labelText = required ? label + " *" : label;
    const labelContent = readonly ? (
      `${labelText}`
    ) : (
      <label htmlFor={this.for}>{labelText}</label>
    );

    const id = getInputHelperTextID(this.for);

    return (
      <Host
        class={{
          ["ic-input-label-disabled"]: disabled,
          ["ic-input-label-readonly"]: readonly,
          ["with-helper"]: helperText !== "",
        }}
      >
        <ic-typography
          variant="label"
          class={{
            ["readonly-label"]: readonly,
            ["error-label"]: status === "error" && !(readonly || disabled),
            ["dark"]: appearance === "dark",
          }}
        >
          {labelContent}
        </ic-typography>

        {helperText !== "" && (
          <ic-typography
            variant="caption"
            class={{
              ["helpertext"]: true,
              ["helpertext-normal"]: !disabled && !readonly,
              ["helpertext-readonly"]: readonly,
            }}
          >
            <span id={id}>{helperText}</span>
          </ic-typography>
        )}
      </Host>
    );
  }
}