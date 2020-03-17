import React from 'react'
import './default.scss';
import Header from '../../Header/Header';
import DialogueList from '../../DialogueList/DialogueList';

const Default = () => (
    <div className="default-layout">
        <Header />
        <div className="default-layout__wrapper">
            <DialogueList />
        </div>
        <div className="sidebar"></div>
    </div>
);

export default Default;