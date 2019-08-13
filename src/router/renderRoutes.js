import React from "react";
import { BrowserRouter, Switch, HashRouter } from "react-router-dom";
import renderRoutesMap from "./renderRoutesMap";
import routerConfig from "./routerConfig";
// /**
//  * renderRoutes 渲染路由
//  * @param  {array}      routes              路由列表
//  * @param  {object}     extraProps  = {}    extra的属性
//  * @param  {object}     switchProps = {}    switch的属性
//  */
const renderRoutes = ({ routes, extraProps = {}, switchProps = {} }) => (
  <HashRouter>
    <Switch {...switchProps}>{renderRoutesMap(routes)}</Switch>
  </HashRouter>
);

// export default renderRoutes

//index.js
const router = () =>
  renderRoutes({
    routes: routerConfig
  });
export default router;
