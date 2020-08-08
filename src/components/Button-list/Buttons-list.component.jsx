import React from 'react';

import './Buttons-list.style.css';

import { CustumButton } from '../Custum-button/custum-button.component';

export const ButtonsList = props => (
    <div className="btnList">
          {props.characters.map((character, index) => (
            <CustumButton 
                key={index+1}
                index={index}
                character={character}
                handleClick={props.handleClick}
            />
          ))}
    </div>
);