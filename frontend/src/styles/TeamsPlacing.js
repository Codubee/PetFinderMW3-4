import React from 'react';
import TheTeams from '../components/TheTeam.js';
import{Grid, Row, Col} from 'react-bootsrap';

const TeamsPlacing = (props) => {
    return (
        <div>
            <Grid>
                Card
                <Row className="show-grid">
                    <Col md="4">
                        <TheTeams/>
                    </Col>

                </Row>
            </Grid>
        </div>
    )
}