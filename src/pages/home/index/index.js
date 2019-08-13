import React, { Component } from 'react'
import { connect } from 'react-redux'
import { action } from '../store'
import './index.scss'
import { Button, InputItem,Toast } from 'antd-mobile';
import axios from "@/api/server";
class Home extends Component {
    state = {
        inputVal: ""
    }
    toHome() {
        this.props.history.push('/person')
    }
    inputChange(e) {
        // let value = e.target.value;
        // console.log(e)
       
        this.setState({
            inputVal: e
        })
    }
    componentDidMount(){
        axios.get("/space/list/json").then(res=>{
            // console.log(res)
        },err=>{
            // console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h1>首页 </h1>
                <div onClick={this.toHome.bind(this)}>手动点击</div>
                <h2>{this.props.item}</h2>
                <Button onClick={
                    () => this.props.addItem(this.props.item + 1)
                }>点击增加 </Button>
                <InputItem
                    clear
                    placeholder="auto focus"
                    value={this.state.inputVal}
                    onChange={
                        this.inputChange.bind(this)
                    }
                >标题</InputItem>
                <Button onClick={
                    () => this.props.addList(this.state.inputVal,this)
                }>增加列表 </Button>
                {
                    this.props.list && (<ul className="item_box">
                        {
                            this.props.list.map((item, index) => {
                                return (<li key={index}>
                                    {item}
                                </li>)
                            })
                        }
                    </ul>)
                }
                <Button onClick={()=>this.props.history.push('/person')}>个人中心</Button>
            </div >
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
// store.dispatch,在该函数中调用，并且定义好方法，该方法会以props的方式传递过去，在jsx中之直接调用即可。并且可以直接调用dispatch方法去调用
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (e) => dispatch(action.changeItem(e)),
        addList: (data,that) => {
            if(!data){
                Toast.fail("请输入内容")
                return
            }
            that.setState({
                inputVal:""
            })
            dispatch(action.changeList(data))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)