import React from 'react'
import './navigation.scss';
import { NavLink } from 'react-router-dom';
import SpriteIcon from '.././SpriteIcon/SpriteIcon';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink 
                to="/" 
                exact
                className="navigation__link"
                activeClassName="navigation__link--active">
                    <SpriteIcon name="home" className="navigation__icon" />
            </NavLink>
            <NavLink 
                to="/dialog" 
                className="navigation__link"
                activeClassName="navigation__link--active">
                    <SpriteIcon name="comment" className="navigation__icon" />
            </NavLink>
            <NavLink 
                to="/login" 
                className="navigation__link"
                activeClassName="navigation__link--active">
                    <SpriteIcon name="contact" className="navigation__icon" />
            </NavLink>
        </div>
    )
}

export default Navigation;