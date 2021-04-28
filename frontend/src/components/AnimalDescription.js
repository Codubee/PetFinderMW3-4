import React from 'react';

function AnimalInfo(props) {
    return(
        <div>
            <p>Animal Name: {props.animals.name}</p>
            <p>Animal Type: {props.animals.type}</p>
            <p>Animal Sex: {props.animals.sex}</p>
            <p>Animal Shelter: {props.animals.shelter}</p>
            <a href={props.animals.adoption}>Adopt Me!</a>

        </div>
    )
}

export default AnimalInfo;