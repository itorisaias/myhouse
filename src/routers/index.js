import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Lazy from "./Lazy";
import Template from "template";

const Home = Lazy(() => import("views/Home"));
const Search = Lazy(() => import("views/Search"));
const Admin = Lazy(() => import("views/Admin"));

function Routes() {
  return (
    <Router>
      <Switch>
        <Template>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/admin" component={Admin} />
        </Template>
      </Switch>
    </Router>
  );
}

export default Routes;
