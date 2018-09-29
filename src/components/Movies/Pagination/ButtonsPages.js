import React, { Component } from "react";

export default class ButtonsPages extends Component {
  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.props.onChangePagePrev}
          style={{ width: "90px" }}
          disabled={this.props.page === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={this.props.onChangePageNext}
          style={{ width: "90px" }}
        >
          Next
        </button>
      </div>
    );
  }
}
