import React, { Component } from "react";

export default class SortBy extends Component {
  render() {
    const { sort_by, onChange } = this.props;
    return (
      <div>
        <div className="d-flex flex-column mr-4">
          <label htmlFor="sort_by">Сортировать по</label>
          <select
            className="form-control shadow-sm filters-select"
            value={sort_by}
            onChange={onChange}
            name="sort_by"
            id="sort_by"
          >
            <option value="popularity.desc">Популярные по убыванию</option>
            <option value="popularity.asc">Популярные по возростанию</option>
            <option value="vote_average.desc">Рейтинг по убыванию</option>
            <option value="vote_average.asc">Рейтинг по возростанию</option>
          </select>
        </div>
      </div>
    );
  }
}
