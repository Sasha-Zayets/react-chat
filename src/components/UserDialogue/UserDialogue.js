import React from 'react'
import './user-dialogue.scss';

const UserDialogue = () => (
    <div className="user-dialogue">
        <div className="user-dialogue__logo">
            <img 
                src="https://picsum.photos/536/354" 
                className="user-dialogue__logo-image"
                alt="" />
            <span className="user-dialogue__status"></span>
        </div>
        <h2 className="user-dialogue__name">Alex</h2>
    </div>
);

export default UserDialogue;