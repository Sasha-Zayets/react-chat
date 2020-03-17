import React from 'react';
import './dialogue-list.scss';
import UserDialogue from '../UserDialogue/UserDialogue';

const DialogueList = () => (
    <div className="dialogue-list">
        <UserDialogue className="dialogue-list__item"/>
    </div>
);

export default DialogueList;