import React from 'react';
import Chelsea_pic from '../assets/images/Chelsea_Heredia.jpg';
import Tritian_pic from '../assets/images/Tritian_Monis.png';
import Roshin_pic from '../assets/images/Roshin_Lal.jpg';
import Anjelica_pic from '../assets/images/Anjelica_Avorque.jpg';
import Meet_Teams from '../assets/images/Meet_Teams.png';
import {
  Card, CardImg, CardTitle, CardText, CardLink, CardBody, Row,
} from 'reactstrap';
import '../style/TeamStyle.css';

function Team() {

  function teamInfo(pic, first, last, major, school, year, linkedIn, github) {
    this.pic = pic;
    this.first = first;
    this.last = last;
    this.major = major;
    this.school = school;
    this.year = year;
    this.linkedIn = linkedIn;
    this.github = github;
  }

  var teammates = [
    new teamInfo(Chelsea_pic, 'Chelsea', 'Heredia', 'Computer Science', 'University of Texas at Dallas', 'Freshman (2020-2024)', 'https://www.linkedin.com/in/chelsea-heredia/', 'https://github.com/chelseah02'),
    new teamInfo(Tritian_pic, 'Tritian', 'Monis', 'Information Technology & Systems', 'University of Texas at Dallas', 'Junior (2018-2022)', 'https://www.linkedin.com/in/tritian-monis/', 'https://github.com/tmonis'),
    new teamInfo(Roshin_pic, 'Roshin', 'Lal', 'Computer Engineering', 'Texas A&M University', 'Sophomore (2019-2023)', 'https://www.linkedin.com/in/roshin-lal/', 'https://github.com/Roshinl'),
    new teamInfo(Anjelica_pic, 'Anjelica', 'Avorque', 'Computer Science', 'University of Texas at Dallas', 'Junior (2018-2022)', 'https://www.linkedin.com/in/anjelica-avorque/', 'https://github.com/evanjelica')
  ]

  return (
    <div className='center'>
      <img className='team-welcome-title' src={Meet_Teams} alt="Meet the Team"/>
      <Row className="justify-content-sm-center">
        {
          teammates.map((teamMember, index) => ( // creates cards for each teammate by calling the teammate array
              <Card className='team-card' key={index}>
                <CardImg className='team-card-pic' src={teamMember.pic} />
                <CardBody className='team-card-body'>
                  <CardTitle className='team-card-title' tag="h6">{teamMember.first + " " + teamMember.last}</CardTitle>
                  <CardText className='team-card-text' tag="h6">{"Major: " + teamMember.major}</CardText>
                  <CardText className='team-card-text' tag="h6">{"School: " + teamMember.school}</CardText>
                  <CardText className='team-card-text' tag="h6">{"Year: " + teamMember.year}</CardText>
                  <CardLink className='team-card-linkedin' href={teamMember.linkedIn}>LinkedIn</CardLink>
                  <CardLink className='team-card-github' href={teamMember.github}>GitHub</CardLink>



                </CardBody>
              </Card>
          ))
        }


      </Row>
    </div>
  );
}

  export default Team;