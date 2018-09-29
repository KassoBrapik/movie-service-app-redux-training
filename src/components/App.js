import React, { Component } from "react";
import Movies from "./Movies/Movies";
import Header from "./Header/Header";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

export default class App extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  };

  updateUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <Header updateUser={this.updateUser} {...this.state} />
            <Route
              exact
              path="/"
              render={props => <Movies {...props} store={this.props.store} />}
            />
            {/* <Route path="/movie/:id/:type" component={Movie} /> */}
            {/* <Route component={NotFound} /> */}
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}
