import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Default from '../components/layouts/Default/Default';
import Login from '../views/Login/Login';

const Router = () => (
    <Switch>
        <Route path="/" component={Default} />
    </Switch>
);

export default Router;