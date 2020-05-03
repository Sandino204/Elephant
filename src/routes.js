import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Search from './pages/search'
import Profile from './pages/profile'
import {DATA} from './JSON/data'
import Register from './pages/Register'
import Home from './pages/home' 
import Login from './pages/login'
import MyProfile from './pages/myProfile'

function Routes(){

    const profileWithId = ({match}) => {
        return(
            <Profile data={DATA.filter((pers) => pers.id === parseInt(match.params.persId, 10))[0]} />
        )
    }

    const MyprofileWithId = ({match}) => {
        return(
            <MyProfile data={DATA.filter((pers) => pers.id === parseInt(match.params.myId, 10))[0]} />
        )
    }

   

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route path ="/profile/:persId" component={profileWithId} />
                <Route path = "/myProfile/:myId" component={MyprofileWithId} />
                <Route path ="/register" component={Register} />
                <Redirect to="/" /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes