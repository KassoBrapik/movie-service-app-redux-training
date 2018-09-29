import React, { Component } from "react";
import classNames from "classnames";

export default class FormField extends Component {
  render() {
    const {
      type,
      id,
      labelText,
      placeholder,
      name,
      value,
      onChange,
      errors
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={id}>{labelText}</label>
        <input
          type={type}
          className={classNames("form-control modal-form_input", {
            invalid: errors
          })}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {errors ? <div className="invalid-feedback">{errors}</div> : null}
      </div>
    );
  }
}
