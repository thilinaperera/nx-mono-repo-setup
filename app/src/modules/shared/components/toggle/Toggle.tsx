import React, { FunctionComponent } from "react";
import "./toggle.sass";

interface Props {
  onChange?: (checked: boolean, name: string) => void;
  checked: boolean;
  name: string;
  label: string;
}

export const Toggle: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.currentTarget.checked, props.name);
  };
  return (
    <div data-testid="toggle-container" className="toggle-container">
      <span className="toggle-label">{props.label}</span>
      <div className="toggle">
        <input
          onChange={handleOnChange}
          checked={props.checked}
          type="checkbox"
          className="toggle__checkbox"
          name="toggleSwitch"
          id={`toggle__checkbox_${props.name}`}
        />
        <label
          className="toggle__inner-label"
          htmlFor={`toggle__checkbox_${props.name}`}
        >
          <div className="toggle__switch-inner">
            <div className="toggle__switch-bg toggle__switch-bg--active" />
            <div className="toggle__switch-bg toggle__switch-bg--inactive" />
          </div>
          <span className="toggle__switch-switch" />
        </label>
      </div>
    </div>
  );
};
