import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/styles.css";
import { createStore } from "redux";
const GET_MOVIES = "GET_MOVIES";

export const getMoviesAction = data => {
  return { type: GET_MOVIES, payload: data };
};

const initialState = {
  movies: [],
  isFetched: false
};
const reducer = (state, action) => {
  //   console.log("reducer", state, action);
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload, isFetched: true };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={store} />, rootElement);
