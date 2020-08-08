import React from 'react';
import './Card.style.css';

export const Card = props => (
    <div className="card-container">
        <img
             src={`https://robohash.org/${props.monster.id}?set=set${props.chosenCharacter.id}&size=180x180`}
             alt="{props.chosenCharacter.type}"
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);