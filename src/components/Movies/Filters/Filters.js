import React, { Component } from "react";
import SortBy from "./SortBy";
import PrimaryReleaseYear from "./PrimaryReleaseYear";

export default class Filters extends Component {
  render() {
    // console.log(this.props);
    return (
      <form className="d-inline-flex ml-3">
        <PrimaryReleaseYear {...this.props} />
        <SortBy {...this.props} />
      </form>
    );
  }
}
