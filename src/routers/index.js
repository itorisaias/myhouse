import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/Home";
import Search from "../views/Search";
import Admin from "../views/Admin";
import Login from "../views/Login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
