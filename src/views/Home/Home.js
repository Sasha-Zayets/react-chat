import React from 'react'
import './home.scss';
import logo from '../../static/icons/logo.svg';

const Home = () => (
    <div className="home-page">
        <h1 className="home-page__title">Welcome :)</h1>
        <div className="home-page__logo">
            <img 
                src={logo} 
                className="home-page__logo-image" 
                alt="logo" />
        </div>
    </div>
)

export default Home;