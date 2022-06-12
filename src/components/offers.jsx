import sliderImg from "../assets/images/competitor2.jpg";
import {useEffect} from 'react';

import axios from "axios";

function Offers(){



    return <div className="offer p-m">
    <div className="box">
        <div className="img">
            <img src={sliderImg} alt="some image" />
        </div>
        <div className="content">
            <p>Very warm welcome to our precious customers.
                We the team of vnk express thank you for choosing our service and we will try our best to
                provide you the best in
                class service in terms of comfort and safety for your trip. We have daily bus service and the
                buses in our fleet
            </p>
        </div>
    </div>
    <div className="box">
        <div className="img">
            <img src={sliderImg} alt="some image" />
        </div>
        <div className="content">
            <p>Very warm welcome to our precious customers.
                We the team of vnk express thank you for choosing our service and we will try our best to
                provide you the best in
                class service in terms of comfort and safety for your trip. We have daily bus service and the
                buses in our fleet
            </p>
        </div>
    </div>
    <div className="box">
        <div className="img">
            <img src={sliderImg} alt="some image" />
        </div>
        <div className="content">
            <p>Very warm welcome to our precious customers.
                We the team of vnk express thank you for choosing our service and we will try our best to
                provide you the best in
                class service in terms of comfort and safety for your trip. We have daily bus service and the
                buses in our fleet
            </p>
        </div>
    </div>
</div>
}

export default Offers;