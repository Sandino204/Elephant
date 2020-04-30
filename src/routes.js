import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Start from './pages/start'
import Profile from './pages/profile'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route path="/profile" component={Profile} />
                <Redirect to="/" /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes