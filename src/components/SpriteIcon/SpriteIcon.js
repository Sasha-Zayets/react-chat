import React from 'react'
import sprite from '../../static/icons/sprite.svg';

const SpriteIcon = ({ name, className }) => (
    <svg className={className}>
        <use href={`${sprite}#${name}`}></use>
    </svg>
);

export default SpriteIcon;