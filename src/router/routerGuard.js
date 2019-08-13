import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import renderRoutesMap from "./renderRoutesMap";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ ...dispatch });

class RouterGuard extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let {
      history: { replace },
      authorization, //登录权限
      location
    } = this.props;
    if (authorization) replace("/person");
    if (location.pathname === "/") {
      replace("/home");
    }
    console.log("路由跳转前的拦截", this.props);
  }
  render() {
    let { component, routes = [] } = this.props;
    console.log("准备渲染compoent前", this.props);
    const LoadableComponent = Loadable({
      loader: () => import(`../pages/${component}/index`),
      loading: () => <span>11111</span>
    });
    return (
      <div>
        <LoadableComponent {...this.props} />
        {renderRoutesMap(routes)}
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouterGuard)
);
