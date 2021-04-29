import React from 'react';

function AnimalInfo(props) {
    return(
        <div>
            <p>Animal Name: {props.animal.name}</p>
            <p>Animal Type: {props.animal.type}</p>
            <p>Animal Sex: {props.animal.sex}</p>
            <p>Animal Shelter: {props.animal.shelter}</p>
            <a href={props.animal.adoption_url} target="_blank">Adopt Me!</a>
        </div>
    )
}

export default AnimalInfo;