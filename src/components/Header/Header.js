import React from 'react'
import './header.scss';
import SpriteIcon from '../SpriteIcon/SpriteIcon';

const Header = () => {
    return (
        <div className="header">
            <a href="#" className="header__link-back">
                <SpriteIcon className="header__back-icon" name="back"/>
                Back
            </a>
            <div className="header__logo">
                <div className="header__logo-user">
                    S
                </div>
            </div>
        </div>
    )
};  

export default Header;