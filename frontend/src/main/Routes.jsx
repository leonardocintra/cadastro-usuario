import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import User from '../components/user/User'

export default props =>
    <Switch>
        <Route path='/users'>
            <User />
        </Route>
        <Route exact patch='/'>
            <Home />
        </Route>
        <Redirect from="*" to="/" />
    </Switch>