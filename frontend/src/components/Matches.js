import React from 'react';
import {Table} from 'reactstrap';

function Matches(){

    const matches = [
        {animalName: "", animalType: "", animalSex: "", shelterName: "", adoptionURL: ""}
    ]

    return(
        matches.map((matches,id) => (
            <div key={id}>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Sex</th>
                            <th>Shelter Name</th>
                            <th>Adoption URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{matches.animalName}</td>
                            <td>{matches.animalType}</td>
                            <td>{matches.animalSex}</td>
                            <td>{matches.shelterName}</td>
                            <td>{matches.adoptionURL}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>

        )
    )
        
    );
}

export default Matches;
