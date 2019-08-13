import React, { Component } from "react";
import { Button } from "antd-mobile";
import "./index";
export default class Edt extends Component {
  constructor() {
    super();
    // console.log(this);
  }
  toHome() {
    this.props.history.push("/home");
  }
  render() {
    return (
      <div>
        <h1>修改个人信息</h1>
        <Button onClick={this.toHome.bind(this)}>回首页</Button>
      </div>
    );
  }
}
