import React, { Component } from "react";

export default class UILable extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("this.props", this.props);
  //   // console.log("nextProps", nextProps);
  //   if (nextProps.id !== this.props.id) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    // console.log(this.props.label);
    const { id, children } = this.props;

    return <label htmlFor={id}>{children()}</label>;
  }
}
