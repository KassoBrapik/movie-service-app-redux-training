import React, { Component } from "react";
import TotalPages from "./TotalPages";
import ButtonsPages from "./ButtonsPages";

export default class Pagination extends Component {
  render() {
    return (
      <div className="d-flex align-items-end mr-3">
        <div className="d-flex align-items-center">
          <TotalPages {...this.props} />
          <ButtonsPages {...this.props} />
        </div>
      </div>
    );
  }
}
