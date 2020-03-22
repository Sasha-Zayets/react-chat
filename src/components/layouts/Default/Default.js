import React from 'react'
import './default.scss';

import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import PageRouter from '../../../router/PageRouter';

const Default = () => (
    <div className="default-layout">
        <Header />
        <div className="default-layout__wrapper">
            <PageRouter />
        </div>
        <Navigation />
    </div>
);

export default Default;