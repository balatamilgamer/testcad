import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../pages/Card";
import Api from "../pages/api";

const Routers = () => {
  return (
    <Switch>
      <Route path="/card" component={Card} />
      <Route path="/api" component={Api} />
    </Switch>
  );
};

export default Routers;
