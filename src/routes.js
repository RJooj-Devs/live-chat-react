import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
// import Main from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Login}/>
                {/* <Route path = "/main" component = {Main}/> */}
            </Switch>
        </BrowserRouter>
    )
}