// This is where the explanation component will be created
import React from 'react';
function Explanation(){
    return(
        <div class = "jumbotron">
            <h1 class = "display-4">
                    Welcome!
            </h1>
            <p class = "lead">
                The furry friend finder is a solution to help shelter animals in Dallas get adopted. It matches a person looking for a pet with a pet that is at an animal shelter. Take a look at a picture and description of a pet. Hit yes to pick a friend and no to skip!
            </p>
            <hr class ="my-4"></hr>
            <p>
                This project was created during the Spring 2021 session of Codubee.
            </p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>     
    ) // end return
        
} // end function Explanation()

export default Explanation;