import React from 'react'
import "./Container2.css"
import BlackBike from "../../Images/blackBike.png"
import Fon from "../../Images/container2fon.png"
import Dable1 from "../../Images/dable1.png"
import Dable2 from "../../Images/dable2.png"



function Container2() {
    return (
        <div>
            <div className="container2">
                <div className="text_img">
                    <div className="left_container2">
                        <h3>New Rider</h3>
                        <h1>New Rider</h1>
                        <h1>Course</h1>
                        <h1>Overview</h1>
                        <button>view more</button>
                    </div>
                    <div className="right_container2">
                        <img src={BlackBike} width="500px" alt="" />
                    </div>
                </div>
                <p className='p1'>Never ridden before? Don't sweat it. The Harley-Davidson® Riding Academy New Rider Course is designed to get you comfortable on a bike</p>
                <p>and give you the skills you need to ride with confidence.Offered at select H-D® dealers, the New Rider Course provides you with expert</p>
                <p>guidance from H-D certified coaches.</p>

                <img className='fon' src={Fon} width="800px" alt="" />
            </div>
            <div className="photos">
                <img src={Dable1} alt="" />
                <div className="centre">
                    <h2>Need To Know</h2>
                    <button>view more</button>
                </div>
                <img src={Dable2} alt="" />
            </div>
        </div>
    )
}

export default Container2
