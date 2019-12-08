import React, { Fragment } from 'react';

import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';

function App() {
    return (
        // <Fragment>
        //   <Home />
        // </Fragment>
        <BrowserRouter>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
