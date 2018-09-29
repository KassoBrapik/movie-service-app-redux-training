import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Movie extends Component {
  static propTypes = {
    item: PropTypes.shape({
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string
    }).isRequired
  };
  //обрезание описания фильма в 120 символов с добавлением ...
  getOverview = overview => {
    if (overview.length > 60) {
      return `${overview.slice(0, 120)}...`;
    } else {
      return overview;
    }
  };

  render() {
    const { item = {} } = this.props; //item = {} default props_
    // console.log(this.props.item);

    return (
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-0 mb-xl-4 mb-lg-4 mb-md-4 mb-sm-0 mb-0">
              <img
                className="movie-img shadow-sm rounded-0 w-100"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 p-0 mb-4">
              <div className="card movie-card border-light shadow-sm rounded-0 h-100">
                <div className="card-body movie-body py-2">
                  <div className="movie-innerwrap">
                    <h5 className="card-title m-0">{item.title}</h5>
                    <p className="card-text font-weight-light">
                      Дата релиза: {item.release_date}
                    </p>
                    <p className="card-text font-italic">
                      Рейтинг: {item.vote_average}
                    </p>
                    <p className="card-text small">
                      {this.getOverview(item.overview)}
                    </p>
                  </div>
                  <div className="movie-innerwrap line-above-button">
                    <Link
                      className="movie-button py-3 m-0 p-0 border-0"
                      to={`/movie/${item.id}/${item.title}`}
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
