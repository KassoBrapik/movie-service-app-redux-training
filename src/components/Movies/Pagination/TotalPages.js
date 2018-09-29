import React, { Component } from "react";

export default class TotalPages extends Component {
  render() {
    const { page, total_pages } = this.props;
    return (
      <div className="d-flex mr-2">Page: {`${page} of ${total_pages}`}</div>
    );
  }
}
