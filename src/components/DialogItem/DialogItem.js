import React from 'react'
import './dialog-item.scss';

const DialogItem = ({ className, isMyMessage }) => {
    const reverseClass = isMyMessage ? 'dialog-item--reverse': '';
    return (
        <div 
        className={`dialog-item 
            ${reverseClass} 
            ${className}`}>
            <div className="dialog-item__logo">
                <div className="dialog-item__logo-item">
                    S
                </div>
            </div>
            <div className="dialog-item__messages">
                <div className="dialog-item__message">
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона
                </div>
            </div>
            <div className="dialog-item__date">
                06:10
            </div>
        </div>
    )
}

export default DialogItem;