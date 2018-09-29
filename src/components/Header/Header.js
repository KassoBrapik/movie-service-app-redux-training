import React, { Component } from "react";
import Login from "./Login/Login";
import HeaderLink from "./HeaderLink";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark mb-2">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <HeaderLink to="/" className="nav-link">
                Мувисы
              </HeaderLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item active">
              {this.props.user ? (
                <img
                  src={`https://secure.gravatar.com/avatar/${
                    this.props.user.avatar.gravatar.hash
                  }.jpg?s=64"`}
                  alt=""
                  width="45px"
                  height="45px"
                />
              ) : (
                <Login updateUser={this.props.updateUser} />
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
