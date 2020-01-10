import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import Step1 from "./Components/Wizard/Step1";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} path="/wizard" />
    <Route component={Step1} path="/wizard/step1" />
  </Switch>
);
