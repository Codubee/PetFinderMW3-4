import React from 'react';
import '../styles/TeamStyle.css';
import img1 from '../assets/images/Bo_Mendez.jpg';
import img2 from '../assets/images/Chelsea_Heredia.jpg';
import img3 from '../assets/images/Tritian_Monis.png';
import img4 from '../assets/images/Roshin_Lal.jpg';
import img5 from '../assets/images/placement.png';
import {
  Card, CardImg, CardTitle, CardText, CardBody, Row
} from 'reactstrap';
const TheTeam = (props) => {
  return (
      <Row className="justify-content-sm-center">
      <Card>
        <CardImg variant="top" src={img1} alt="Bo Mendez" />
        <CardBody>
          <CardTitle tag="h6">Bo Mendez</CardTitle>
          <CardText tag="h6">Major: Computer Science</CardText>
          <CardText tag="h6">School: Northeastern University</CardText>
          <CardText tag="h6">Year: 1st Year Master's student</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg src={img2} alt="Chelsea Heredia" />
        <CardBody>
          <CardTitle tag="h6">Chelsea Heredia</CardTitle>
          <CardText tag="h6">Major: Computer Science</CardText>
          <CardText tag="h6">School: The University of Texas at Dallas</CardText>
          <CardText tag="h6">Year: Freshman (2020-2024)</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={img3} alt="Tritian Monis" />
        <CardBody>
          <CardTitle tag="h6">Tritian Monis</CardTitle>
          <CardText tag="h6">Major: Information Technology & Systems</CardText>
          <CardText tag="h6">School: The University of Texas at Dallas</CardText>
          <CardText tag="h6">Year: Junior (2018-2022)</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg src={img4} alt="Roshin Lal" />
        <CardBody>
          <CardTitle tag="h6">Roshin Lal</CardTitle>
          <CardText tag="h6">Major: Computer Engineering</CardText>
          <CardText tag="h6">School: Texas A&M University</CardText>
          <CardText tag="h6">Year: Sophomore (2019-2023)</CardText>
        </CardBody>
      </Card>
      
      <Card>
        <CardImg src={img5} alt="Pending" />
        <CardBody>
          <CardTitle tag="h6">Anjelica Avorque</CardTitle>
          <CardText tag="h6">Major: Computer Science</CardText>
          <CardText tag="h6">School: The University of Texas at Dallas</CardText>
          <CardText tag="h6">Year: Junior (2018-2022)</CardText>
        </CardBody>
      </Card>
    </Row>
  );
};

export default TheTeam;