import React from 'react'
import "./Container4.css"
import Fpp from "../../Images/lico1.png"
import Motor from "../../Images/motor.png"
import Sedlo from "../../Images/sedlo.png"

function Container4() {
    return (

        <div className="container4">
            <div className="left_container4">
                <img src={Fpp} width="700px" alt="" />
            </div>
            <div className="right_container4">
                <div className="right_text">
                    <h1>Introducing The All-</h1>
                    <h1>New Fxdr  114</h1>
                    <p>Fast on the straights, agile in the turns. Take a ride. It will blow</p>
                    <p>you away.</p>
                    <button>read more</button>
                </div>
                <div className="motors">
                    <img src={Sedlo} width="350px" alt="" />
                    <img src={Motor} width="350px" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Container4
