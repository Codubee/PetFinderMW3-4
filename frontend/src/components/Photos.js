//card component for animal photos

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function ViewPhotos(props){
console.log(props)
  return (
    <div>
      <Card>

        <CardImg className= 'animal-pic' src= {props.img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Animal Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Animal Description</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default ViewPhotos;