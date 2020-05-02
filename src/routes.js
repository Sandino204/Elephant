import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Start from './pages/start'
import Profile from './pages/profile'
import {DATA} from './JSON/data'

function Routes(){

    const profileWithId = ({match}) => {
        return(
            <Profile data={DATA.filter((pers) => pers.id === parseInt(match.params.persId, 10))[0]} />
        )
    }


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route path="/profile/:persId" component={profileWithId} />
                <Redirect to="/" /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes