import React from 'react'
import {Button} from 'reactstrap'

class Match extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                {/* Image component beneath this comment*/}
                <Button color="success">Yes</Button>
                <Button color="danger">No</Button>
                {/* Results components will go below this comment */}
            </div>
        )
    }
    
}

export default Match