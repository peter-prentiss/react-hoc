import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import requireAuth from './RequireAuthentication';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resources" component={requireAuth(Resources)} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}