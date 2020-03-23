import React from 'react';
import './dialog.scss';
import DialogItem from '../../components/DialogItem/DialogItem';

const Dialog = () => (
    <div className="dialog">
        <DialogItem 
            className="dialog__item" />
        <DialogItem 
            className="dialog__item" 
            isMyMessage={true} />
        <DialogItem 
            className="dialog__item" />
        <DialogItem 
            className="dialog__item" 
            isMyMessage={true} />
        <DialogItem 
            className="dialog__item" />
    </div>
)

export default Dialog;