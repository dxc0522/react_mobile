import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import Edt from '../edt'
import './index'
class Person extends Component {
    constructor() {
        super()
        console.log(this)
    }
    toHome() {
        this.props.history.push('/')
    }
    toEdt() {
        this.props.history.push('/person/edt')
    }
    render() {
        return (
            <div>
                <h1>个人中心 </h1>
                <div onClick={this.toHome.bind(this)}>手动点击</div>
                <div onClick={this.toEdt.bind(this)}>去修改</div>
                {
                    this.props.list && (<ul>
                        {
                            this.props.list.map((item, index) => {
                                return (<li key={index}>
                                    {item}
                                </li>)
                            })
                        }
                    </ul>)
                }
                <Route path="/person/" exact component={Edt} />
            </div>
        )
    }
}
// 链接的规则，将store转换为props
const mapStateToProps = (state) => {
    // 映射的规则就是讲store中的数据state映射到组件的props中
    return {
        item: state.home.homeClick,
        list: state.home.homeList
    }
}
export default connect(mapStateToProps)(Person)