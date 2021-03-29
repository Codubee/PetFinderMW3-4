import React from 'react';
import {Media} from 'reactstrap';


const Tools = () => {
    return(
        <div style={{margin: 30 }} >
            <h2>Tools</h2>
            <p>Here are all the tools that we used to develop this project: </p>
            
            {/* AWS */}
            <div style={{marginBottom:15}}>
                <Media>
                    <Media href="https://aws.amazon.com/">
                        <img style={{height: 30, marginRight: 15, marginLeft:15, marginTop:15}} src = "/Tools-img/AWS-logo.png"/>
                    </Media>
                    <Media body>
                        <h5 style={{fontWeight: 700}}>Amazon Web Services (AWS)</h5>
                        Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs.
                    </Media>
                </Media>  
            </div>
            
            

            {/* Heroku */}
            <div style={{marginBottom:10}}>
                <Media>
                    <Media href="https://www.heroku.com/">
                        <img style={{height: 60, marginRight: 25, marginLeft:15 }} src = "/Tools-img/Heroku-logo.png"/>
                    </Media>
                    <Media body>
                            <h5 style={{fontWeight: 700}}>Heroku</h5>
                            Heroku is a cloud platform as a service supporting several programming languages.
                    </Media>
                </Media>
            </div>
            

            {/* Jira */}
            <div style={{marginBottom:15}}>
                <Media>
                    <Media href="https://www.atlassian.com/software/jira">
                        <img style={{height: 50, marginRight:23, marginLeft:10, marginTop:17}} src = "/Tools-img/Jira-logo.png"/>
                    </Media>
                    <Media body>
                            <h5 style={{fontWeight: 700}}>Jira</h5>
                            Jira is a proprietary issue tracking product developed by Atlassian <br/>that allows bug tracking and agile project management.
                    </Media>
                </Media>
            </div>
            

            {/* Node JS */}
            <div style={{marginBottom:15}}>
                <Media>
                    <Media href="https://nodejs.org/en/">
                        <img style={{height: 40, marginRight: 15, marginTop: 20 }} src = "/Tools-img/NodeJS-logo.png"/>
                    </Media>
                    <Media body>
                        <h5 style={{fontWeight: 700}}>Node JS</h5>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment <br/>that runs on the V8 engine and executes JavaScript code outside a web browser.
                    </Media>
                </Media>
            </div>
            

            {/* Postman */}
            <div style={{marginBottom:15}}>
                <Media>
                    <Media href="https://postman.com">
                        <img style={{height: 50, marginRight: 20, marginTop: 5 }} src = "/Tools-img/Postman-logo.png"/>
                    </Media>
                    <Media body>
                        <h5 style={{fontWeight: 700}}>Postman API</h5>
                        Postman is a popular API client that makes it easy for developers to create, share, test and document APIs.
                    </Media>
                </Media>
            </div>
            
            
            {/* React */}
            <Media>
                <Media href="https://reactjs.org/">
                    <img style={{height: 50, marginRight: 22, marginTop:5 }} src = "/Tools-img/React-logo.png"/>
                </Media>
                <Media body>
                    <h5 style={{fontWeight: 700}}>React</h5>
                    React is an open-source, front end, JavaScript library for building user interfaces or UI components.
                    <br/>It is maintained by Facebook and a community of individual developers and companies.
                </Media>
            </Media>
        </div>
    );
};

export default Tools;