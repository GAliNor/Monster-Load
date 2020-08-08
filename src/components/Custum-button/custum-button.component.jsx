import React from 'react';

import './custum-button.style.css';

export const CustumButton =  props => (
    <input 
        type="button"
        className="btn"
        id={props.index+1}
        value={props.character}
        onClick={props.handleClick}
    />
);