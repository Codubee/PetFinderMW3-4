import React from 'react'
import {Button,Container} from 'reactstrap'
import AnimalDescription from '../components/AnimalDescription'
import '../style/Match.css'

class Match extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        //Temp animal for now
        const animal_const = {name:"Spark",type:"Dog",sex:"Female",shelter:"APA",adoption_url:"https://google.com"}
        return(
            <Container className="text-center pt-lg">
                {/* Image component beneath this comment*/}
                <AnimalDescription animal={animal_const}/>
                <div className="pt-sm">
                    <Button color="success">Yes</Button>
                    <Button className="ml-sm" color="danger">No</Button>
                </div>
                {/* Results components will go below this comment */}
            </Container>
        )
    }
}

export default Match