import React from 'react'
import './user-dialogue.scss';
import { Link } from 'react-router-dom';

const UserDialogue = () => (
    <Link to={`/dialog/1`} className="user-dialogue">
        <div className="user-dialogue__logo">
            <img 
                src="https://picsum.photos/536/354" 
                className="user-dialogue__logo-image"
                alt="" />
            <span className="user-dialogue__status"></span>
        </div>
        <h2 className="user-dialogue__name">Alex</h2>
    </Link>
);

export default UserDialogue;