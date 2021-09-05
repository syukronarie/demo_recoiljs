import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "../Container/Home";
import TextCounter from "../TextCounter";

const RouterApp: React.FC = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/text-counter">
          <TextCounter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export { RouterApp };
