import React, { Component } from "react";
import { API_KEY_3 } from "../../../utils";
import Movie from "./Movie";
import queryMethodString from "query-string";
import { getMoviesAction } from "../../../index";

export default class MovieList extends Component {
  getMovies = (sort_by, primary_release_year, page) => {
    const queryString = {
      api_key: API_KEY_3,
      language: "ru-RU",
      sort_by: sort_by,
      page: page,
      primary_release_year: primary_release_year
    };

    // const getQueryStringParams = object => {
    //   let string = "";
    //   for (let key in queryString) {
    //     // console.log(key);
    //     // console.log(queryString[key]);
    //     string = string + `&${key}=${queryString[key]}`;
    //   }
    //   return string.substring(1, string.length);
    // };

    // console.log(getQueryStringParams());
    // console.log(queryMethodString.stringify(queryString));

    // const link = `https://api.themoviedb.org/3/discover/movie?${getQueryStringParams()}.desc`;

    const link = `https://api.themoviedb.org/3/discover/movie?${queryMethodString.stringify(
      queryString
    )}`;

    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.props.onChangePageAndTotalPage(data.page, data.total_pages);
        // action for store
        this.props.store.dispatch(getMoviesAction(data.results));
        // this.setState({
        //   movies: data.results,
        //   isFetched: true
        // });
      });
  };

  componentDidMount() {
    const { sort_by, primary_release_year, page } = this.props;
    this.getMovies(sort_by, primary_release_year, page);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (
      this.props.sort_by !== nextProps.sort_by ||
      this.props.primary_release_year !== nextProps.primary_release_year
    ) {
      this.setState({
        isFetched: false
      });
      this.getMovies(
        nextProps.sort_by,
        nextProps.primary_release_year,
        1 //вкидываем 1ю страницу при изменении фильтров
      );
    }
    //Проверка номера страницы при обновлении
    if (this.props.page !== nextProps.page) {
      this.setState({
        isFetched: false
      });
      this.getMovies(
        nextProps.sort_by,
        nextProps.primary_release_year,
        nextProps.page
      );
    }
  }

  render() {
    // const { movies, isFetched } = this.state;
    // console.log(movies);

    const { movies, isFetched } = this.props.store.getState();
    console.log(movies, isFetched);
    return (
      <div className="container">
        <div className="row">
          {isFetched ? (
            movies.map(item => {
              return <Movie item={item} key={item.id} />;
            })
          ) : (
            <div>is loading.........</div>
          )}
        </div>
      </div>
    );
  }
}
