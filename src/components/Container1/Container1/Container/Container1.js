import React from 'react'
import "./Container1.css"
import firstBike from "../../../../Images/5cf063b8f7c918e8deddfe8e9ad206e1.png"
import OrngeBike from "../../../../Images/orangebike.png"
import BlueBike from "../../../../Images/bluebike.png"

function Container1() {
    return (
        <div className="container">
            <span>IRON 883™</span>
            <h1>Raw, Blacked-Out,</h1>
            <h1>Stripped-Down</h1>
            <h1>Custom Style</h1>
            <img className='bigBike' src={firstBike} width="800px" alt="" />
            <div>
                <img src={OrngeBike} alt="" />
                <img src={BlueBike} alt="" />
            </div>
        </div>
    )
}

export default Container1
