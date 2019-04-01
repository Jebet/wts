import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
