import RouterGuard from "./routerGuard";
import React from "react";
import { Route } from "react-router-dom";
const renderRoutesMap = routes =>
  routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        extra={route.extra}
        render={props => <RouterGuard {...route} {...props} />}
      />
    );
  });

export default renderRoutesMap;
