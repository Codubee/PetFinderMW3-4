import React from 'react'
import {Button,Container} from 'reactstrap'
import Photos from '../components/Photos';
import AnimalDescription from '../components/AnimalDescription'
import '../style/Match.css'

class Match extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        //Temp animal for now
        const animal_const = {name:"Spark",type:"Dog",sex:"Female",shelter:"APA",adoption_url:"https://google.com"}
        const src="https://www.austinpetsalive.org/assets/animals/_largeThumb/20200412072011.jpeg"
        return(
            <Container className="text-center pt-lg">
                {/* Image component beneath this comment*/}
                <Photos img_url= {src} />
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