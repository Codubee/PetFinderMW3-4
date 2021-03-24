import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const TheTeam = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Team Member #1</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Team Member #2</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Team Member #3</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Team Member #4</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
        <CardBody>
          <CardTitle tag="h5">Team Member #5</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
        <CardBody>
          <CardTitle tag="h5">Team Member #6</CardTitle>
          <CardText>Major:</CardText>
          <CardText>School Name:</CardText>
          <CardText>Year:</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default TheTeam;