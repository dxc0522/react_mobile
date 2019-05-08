import React, { Component } from 'react'
import './index'
export default class Edt extends Component {
    constructor() {
        super()
        console.log(this)
    }
    toHome() {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>修改个人信息</h1>
                <div onClick={this.toHome.bind(this)}>手动点击</div>
            </div>
        )
    }
}