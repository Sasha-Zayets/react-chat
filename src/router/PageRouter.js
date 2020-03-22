import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Dialogue from '../views/Dialogue/Dialogue';
import Dialog from '../views/Dialog/Dialog';
import User from '../views/User/User';

const PageRouter = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dialog" exact component={Dialogue} />
        <Route path="/dialog/:id" component={Dialog} />
        <Route path="/user" component={User} />
    </Switch>
)

export default PageRouter;