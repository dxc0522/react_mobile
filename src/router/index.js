import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "../pages/home/index";
import person from "../pages/person/index";
import edt from "../pages/person/edt/index";

export default class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/person" component={person} />
          <Route path="/edt" component={edt} />
        </Switch>
      </BrowserRouter>
    );
  }
}
