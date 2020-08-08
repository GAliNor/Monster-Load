import React, { Component } from 'react';
import './Card-list.style.css';
import { Card } from '../Card/Card.component';

export const CardList = props => (
    <div className="card-list">
        { props.monsters.map(monster => (
            <Card 
                key={monster.id} 
                monster={monster} 
                chosenCharacter={props.chosenCharacter}
            />
        ))}
    </div>
);