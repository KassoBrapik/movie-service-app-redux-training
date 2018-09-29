import React, { Component } from "react";
import Login from "./Login/Login";
import { NavLink } from "react-router-dom";

export default class HeaderLink extends Component {
  render() {
    return (
      <NavLink activeStyle={{ color: "red" }} {...this.props}>
        {this.props.children}
      </NavLink>
    );
  }
}
