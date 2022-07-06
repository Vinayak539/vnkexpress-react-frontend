import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/busResults.css';
import busIcon from "../assets/images/icons/bus.png"
import { useEffect } from 'react';
import { useHistory,useParams } from "react-router-dom";

import { FaStar } from 'react-icons/fa';
import axios from "axios";

export default function BusResults(){ 

    const {source, destination, date} = useParams();
    console.log("here are the params", source, destination, date);

    axios.get("https://secret-shelf-13291.herokuapp.com/?source&destination&date")
        .then((response) => console.log(response.data));
        
    return <div>
        <Header/>
        <div className="results_container">
        <div className="container">
            <div className='single_result'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="right_box">
                            <img src={busIcon} className="bus_icon"  alt="bus icon"/>
                            <div className="text">
                                <h4 class="mb-0">2+2 semi sleeper</h4>
                                <p class="mb-0">5.00 pm - 6.00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left_box">
                            <h4 class="mb-0">INR 1500</h4>
                            <span className="rating"><FaStar/> 4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single_result'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="right_box">
                            <img src={busIcon} className="bus_icon"  alt="bus icon"/>
                            <div className="text">
                                <h4 class="mb-0">2+2 semi sleeper</h4>
                                <p class="mb-0">5.00 pm - 6.00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left_box">
                            <h4 class="mb-0">INR 1500</h4>
                            <span className="rating"><FaStar/> 4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single_result'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="right_box">
                            <img src={busIcon} className="bus_icon"  alt="bus icon"/>
                            <div className="text">
                                <h4 class="mb-0">2+2 semi sleeper</h4>
                                <p class="mb-0">5.00 pm - 6.00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left_box">
                            <h4 class="mb-0">INR 1500</h4>
                            <span className="rating"><FaStar/> 4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single_result'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="right_box">
                            <img src={busIcon} className="bus_icon"  alt="bus icon"/>
                            <div className="text">
                                <h4 class="mb-0">2+2 semi sleeper</h4>
                                <p class="mb-0">5.00 pm - 6.00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left_box">
                            <h4 class="mb-0">INR 1500</h4>
                            <span className="rating"><i className="fa fa-solid fa-star"></i> 4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='single_result'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="right_box">
                            <img src={busIcon} className="bus_icon"  alt="bus icon"/>
                            <div className="text">
                                <h4 class="mb-0">2+2 semi sleeper</h4>
                                <p class="mb-0">5.00 pm - 6.00 am</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left_box">
                            <h4 class="mb-0">INR 1500</h4>
                            <span className="rating"><FaStar/> 4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
}
    