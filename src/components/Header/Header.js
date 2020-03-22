import React from 'react'
import './header.scss';
import SpriteIcon from '../SpriteIcon/SpriteIcon';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const pathName = history.location.pathname;

    return (
        <div className="header">
            {   pathName !== '/' &&
                <span className="header__link-back" onClick={() => history.goBack()}>
                    <SpriteIcon className="header__back-icon" name="back"/>
                    Back
                </span>
            }
            <Link to="/user" className="header__logo">
                <div className="header__logo-user">
                    S
                </div>
            </Link>
        </div>
    )
};  

export default Header;