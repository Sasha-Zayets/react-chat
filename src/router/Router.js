import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Default from '../components/layouts/Default/Default';

const Router = () => (
    <Switch>
        <Route path="/" exact component={Default} />
    </Switch>
);

export default Router;