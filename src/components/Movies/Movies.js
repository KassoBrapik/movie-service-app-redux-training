import React, { Component } from "react";
import MovieList from "./MovieList/MovieList";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";

export default class Movies extends Component {
  state = {
    sort_by: "popularity.desc",
    primary_release_year: 2018,
    page: 1,
    total_pages: null
  };

  onChange = event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChangePageAndTotalPage = (page, total_pages) => {
    this.setState({
      page: page,
      total_pages: total_pages
    });
  };

  onChangePageNext = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  onChangePagePrev = () => {
    this.setState({
      page: this.state.page - 1
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between">
            <Filters {...this.state} onChange={this.onChange} />
            <Pagination
              {...this.state}
              onChangePageNext={this.onChangePageNext}
              onChangePagePrev={this.onChangePagePrev}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <MovieList
              {...this.state}
              store={this.props.store}
              onChangePageAndTotalPage={this.onChangePageAndTotalPage}
            />
          </div>
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-center">
              <Pagination
                {...this.state}
                onChangePageNext={this.onChangePageNext}
                onChangePagePrev={this.onChangePagePrev}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
