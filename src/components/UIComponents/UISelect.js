import React, { Component } from "react";
import PropTypes from "prop-types";
import UILable from "./UILable";
import _ from "lodash";

export default class UISelect extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   options: PropTypes.array.isRequired
  // };

  // shouldComponentUpdate() {
  //   console.log("this.props", this.props);
  //   console.log("nextProps", nextProps);
  //   if (nextProps.value !== this.props.value) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // проверка глубокой вложенности
  shouldComponentUpdate(nextProps, nextState) {
    if (_.isEqual(nextProps, this.props)) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const {
      id,
      name,
      value,
      onChange,
      labelText,
      options,
      label,
      children
    } = this.props;
    return (
      <div className="d-flex flex-column mr-4">
        <UILable id="primary_release_year">{label}</UILable>
        <select
          id={id}
          className="form-control shadow-sm filters-select"
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </div>
    );
  }
}
