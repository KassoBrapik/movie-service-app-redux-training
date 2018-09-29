import React, { Component } from "react";

export default class Genres extends Component {
  render() {
    return (
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </div>
    );
  }
}
