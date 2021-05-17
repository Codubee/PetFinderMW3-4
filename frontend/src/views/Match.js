import React from 'react'
import Photos from '../components/Photos';


function Match(){
    const src="https://www.austinpetsalive.org/assets/animals/_largeThumb/20200412072011.jpeg"
    return(
        <div>
            <Photos img_url= {src} />
        </div>
    )
}

export default Match;