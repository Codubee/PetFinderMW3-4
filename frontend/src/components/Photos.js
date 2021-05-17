//card component for animal photos

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Row,Col
} from 'reactstrap';
import '../style/Photos.css'
function ViewPhotos(props){
console.log(props)
  return (
    <div>
      <Row>   
        <Col sm={{size:3,offset:4}}>  
        <Card className="text-center">
        <CardImg src= {props.img_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Animal Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Animal Description</CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>

    </div>
  );
}

export default ViewPhotos;