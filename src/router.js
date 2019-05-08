import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import home from './pages/home/index'
import person from './pages/person/index'


export default class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/person" component={person} />
                </Switch>
            </BrowserRouter>
        )
    }
}

