import React, { useState } from "react";
import Battery20Icon from "@material-ui/icons/Battery20";
import Battery30Icon from "@material-ui/icons/Battery30";
import Battery50Icon from "@material-ui/icons/Battery50";
import Battery60Icon from "@material-ui/icons/Battery60";
import Battery90Icon from "@material-ui/icons/Battery90";
import BatteryAlertIcon from "@material-ui/icons/BatteryAlert";
import { Icon } from "@material-ui/core";
import "../styles/input.css";

const Input = ({
  disabled,
  size,
  error,
  helperText,
  text,
  startIcon,
  endIcon,
  fullWidth,
  row,
}) => {
  const [textValue, setTextValue] = useState(text);
  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const icons = {
    battery_20: Battery20Icon,
    battery_30: Battery30Icon,
    battery_50: Battery50Icon,
    battery_60: Battery60Icon,
    battery_90: Battery90Icon,
    battery_alert: BatteryAlertIcon,
  };

  const classStyle = error ? "error" : "default";
  const disable = "disabled";
  let value = "Default";

  if (startIcon && endIcon === undefined) {
    value = (
      <div className="start-icon">
        <Icon component={icons[startIcon]}></Icon>
      </div>
    );
  } else if (endIcon && startIcon === undefined) {
    value = (
      <div className="end-icon">
        <Icon component={icons[endIcon]}></Icon>
      </div>
    );
  } else {
    value = <></>;
  }

  return (
    <div className="container">
      <div
        className={`${disabled ? disable : classStyle} input-group ${
          fullWidth ? "fullWidth" : ""
        }`}
      >
        {" "}
        {value}
        {row !== undefined ? (
          <textarea
            name="textarea"
            className={!fullWidth ? size : "fullInput"}
            disabled={disabled}
            placeholder="Placeholder"
            rows={row}
            onChange={(e) => {
              handleChange(e);
            }}
            value={textValue}
          />
        ) : (
          <input
            className={!fullWidth ? size : "fullInput"}
            disabled={disabled}
            placeholder="Placeholder"
            value={textValue}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        )}
      </div>
      {helperText !== undefined ? (
        <p className={!disabled ? `p-${classStyle}` : null}>{helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
