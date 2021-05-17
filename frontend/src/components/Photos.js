//card component for animal photos

import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import '../style/Photos.css'

function ViewPhotos(props) {
  return (

      <Card className="center-div">
        <CardImg src={props.img_url} alt="Card image cap" />
      </Card>
  );
}

export default ViewPhotos;