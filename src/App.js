import React from 'react';

import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';
import { StateProvider } from './Store';
import Profile from './Profile';

function App() {
    return (
        <StateProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Redirect to='/home' />} />
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/signup'>
                        <Signup />
                    </Route>
                    <Route path='/myProfile'>
                        <Profile />
                    </Route>
                </Switch>
            </BrowserRouter>
        </StateProvider>
    );
}

export default App;
