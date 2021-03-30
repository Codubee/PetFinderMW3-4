import React from 'react';
import { Media } from 'reactstrap';
import '../style/Tools.css';


const Tools = () => {
    return (
        <div className="tools-div">
            <h1>Tools</h1>
            <h4>Here are all the tools that we used to develop our app</h4>

            {/* The logos have their own inline styling since the images were of different sizes 
                Because of that, a consistent style guide would make formatting them properly
                difficult */}

            {/* AWS */}
            <div className="tools-div" >
                <Media>
                    <Media href="https://aws.amazon.com/" target="_blank">
                        <img style={{ height: 30, marginRight: 20, marginLeft: 15, marginTop: 15 }} src="/Tools-img/AWS-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">Amazon Web Services (AWS)</h5>
                        Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs.
                    </Media>
                </Media>
            </div>



            {/* Heroku */}
            <div className="tools-div">
                <Media>
                    <Media href="https://www.heroku.com/" target="_blank">
                        <img style={{ height: 60, marginRight: 30, marginLeft: 15 }} src="/Tools-img/Heroku-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">Heroku</h5>
                            Heroku is a cloud platform as a service supporting several programming languages.
                    </Media>
                </Media>
            </div>


            {/* Jira */}
            <div className="tools-div">
                <Media>
                    <Media href="https://www.atlassian.com/software/jira" target="_blank">
                        <img style={{ height: 50, marginRight: 23, marginLeft: 10, marginTop: 17 }} src="/Tools-img/Jira-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">Jira</h5>
                            Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile <br />project management.
                    </Media>
                </Media>
            </div>


            {/* Node JS */}
            <div className="tools-div">
                <Media>
                    <Media href="https://nodejs.org/en/" target="_blank">
                        <img style={{ height: 40, marginRight: 15, marginTop: 20 }} src="/Tools-img/NodeJS-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">Node JS</h5>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine <br />and executes JavaScript code outside a web browser.
                    </Media>
                </Media>
            </div>


            {/* Postman */}
            <div className="tools-div">
                <Media>
                    <Media href="https://postman.com" target="_blank">
                        <img style={{ height: 50, marginRight: 20, marginTop: 5 }} src="/Tools-img/Postman-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">Postman API</h5>
                        Postman is a popular API client that makes it easy for developers to create, share, test and document APIs.
                    </Media>
                </Media>
            </div>


            {/* React */}
            <div className="tools-div">
                <Media>
                    <Media href="https://reactjs.org/" target="_blank">
                        <img style={{ height: 50, marginRight: 22, marginTop: 10 }} src="/Tools-img/React-logo.png" />
                    </Media>
                    <Media body>
                        <h5 className="tools-header">React</h5>
                        React is an open-source, front end, JavaScript library for building user interfaces or UI components.
                        <br />It is maintained by Facebook and a community of individual developers and companies.
                    </Media>
                </Media>
            </div>


        </div>
    );
};

export default Tools;