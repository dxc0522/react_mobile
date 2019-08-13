import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd-mobile";
import Edt from "../edt";
import "./index";
class Person extends Component {
  constructor() {
    super();
  }
  toHome() {
    this.props.history.push("/home");
  }
  toEdt() {
    this.props.history.push("/edt");
  }
  render() {
    return (
      <div>
        <h1>个人中心 </h1>
        <Button onClick={this.toHome.bind(this)}>去首页</Button>
        <Button onClick={this.toEdt.bind(this)}>去修改</Button>
        {this.props.list && (
          <ul>
            {this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        )}
        <Route path="/person/" exact component={Edt} />
      </div>
    );
  }
}
// 链接的规则，将store转换为props
const mapStateToProps = state => {
  // 映射的规则就是讲store中的数据state映射到组件的props中
  return {
    item: state.home.homeClick,
    list: state.home.homeList
  };
};
export default connect(mapStateToProps)(Person);
