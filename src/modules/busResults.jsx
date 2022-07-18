import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/busResults.css';
import busIcon from "../assets/images/icons/bus.png"
import { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

import { FaStar, FaPlug, FaMusic, FaCertificate } from 'react-icons/fa';
import axios from "axios";

export default function BusResults() {

    const { source, destination, date } = useParams();
    console.log("here are the params", source, destination, date);

    

    // axios.get("https://secret-shelf-13291.herokuapp.com/journey-details/?source&destination&date")
    //     .then((response) => console.log(response.data));



        var promise = new Promise((resolve, reject)=>{
            var result;
            setTimeout(()=>{
                axios.get("https://api2.binance.com/api/v3/ticker/24hr")
                .then((response) =>{
                    if(response.data){
                        resolve("resolved");
                    }else{
                        reject("There is an error");
                    }
                    // console.log("Here is the api response inside promise", response.data);
                    // result = response.data;
                    
                }) 
            }, 1000)
        });

        async function showRsults(){
            var temp;
            // promise.then((result)=>{
            //     temp = result;
            //     console.log("here is the val of temp", temp);
            // })
            promise
            .then((resolved)=>{
                console.log("Promise resolved", resolved);
            })
            .catch((rejected)=>{
                console.log("The promise is rejected", rejected);
            })
            .finally(()=>{
                console.log("promise settled");
            });
            // setTimeout(()=>{
            //     console.log("here is the val of temp after 1 sec", temp);
            // }, 1000);
        }

        showRsults();



    return <div>
        <Header />
        <div className="results_container">
            <div className="container">
                <div className='single_result'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right_box">
                                <img src={busIcon} className="bus_icon" alt="bus icon" />
                                <div className="text">
                                    <div className="text1">
                                        <h6 className="mb-0">vnk express</h6>
                                        <p className='mb-0 color-c f-14'>2+2 semi sleeper</p>
                                        <p className='mb-0 color-c f-12'>comfort coach</p>
                                    </div>
                                    <div className="text2">
                                        <h6 className="mb-0">5.00pm - 6.00am</h6>
                                        <p className="mb-0 color-c f-14">14 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left_box">
                                <div className="price">
                                    <h5 className="mb-0 color-f">INR 1500</h5>
                                </div>
                                <div className="other_info">
                                    <span><FaPlug /> charging available</span>
                                    <span><FaMusic /> entertainment</span>
                                    <span><FaCertificate /> safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="rating"><FaStar /> 4</span>
                </div>
                <div className='single_result'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right_box">
                                <img src={busIcon} className="bus_icon" alt="bus icon" />
                                <div className="text">
                                    <div className="text1">
                                        <h6 className="mb-0">vnk express</h6>
                                        <p className='mb-0 color-c f-14'>2+2 semi sleeper</p>
                                        <p className='mb-0 color-c f-12'>comfort coach</p>
                                    </div>
                                    <div className="text2">
                                        <h6 className="mb-0">5.00pm - 6.00am</h6>
                                        <p className="mb-0 color-c f-14">14 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left_box">
                                <div className="price">
                                    <h5 className="mb-0 color-f">INR 1500</h5>
                                </div>
                                <div className="other_info">
                                    <span><FaPlug /> charging available</span>
                                    <span><FaMusic /> entertainment</span>
                                    <span><FaCertificate /> safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="rating"><FaStar /> 4</span>
                </div>
                <div className='single_result'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right_box">
                                <img src={busIcon} className="bus_icon" alt="bus icon" />
                                <div className="text">
                                    <div className="text1">
                                        <h6 className="mb-0">vnk express</h6>
                                        <p className='mb-0 color-c f-14'>2+2 semi sleeper</p>
                                        <p className='mb-0 color-c f-12'>comfort coach</p>
                                    </div>
                                    <div className="text2">
                                        <h6 className="mb-0">5.00pm - 6.00am</h6>
                                        <p className="mb-0 color-c f-14">14 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left_box">
                                <div className="price">
                                    <h5 className="mb-0 color-f">INR 1500</h5>
                                </div>
                                <div className="other_info">
                                    <span><FaPlug /> charging available</span>
                                    <span><FaMusic /> entertainment</span>
                                    <span><FaCertificate /> safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="rating"><FaStar /> 4</span>
                </div>
                <div className='single_result'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right_box">
                                <img src={busIcon} className="bus_icon" alt="bus icon" />
                                <div className="text">
                                    <div className="text1">
                                        <h6 className="mb-0">vnk express</h6>
                                        <p className='mb-0 color-c f-14'>2+2 semi sleeper</p>
                                        <p className='mb-0 color-c f-12'>comfort coach</p>
                                    </div>
                                    <div className="text2">
                                        <h6 className="mb-0">5.00pm - 6.00am</h6>
                                        <p className="mb-0 color-c f-14">14 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left_box">
                                <div className="price">
                                    <h5 className="mb-0 color-f">INR 1500</h5>
                                </div>
                                <div className="other_info">
                                    <span><FaPlug /> charging available</span>
                                    <span><FaMusic /> entertainment</span>
                                    <span><FaCertificate /> safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="rating"><FaStar /> 4</span>
                </div>
                <div className='single_result'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right_box">
                                <img src={busIcon} className="bus_icon" alt="bus icon" />
                                <div className="text">
                                    <div className="text1">
                                        <h6 className="mb-0">vnk express</h6>
                                        <p className='mb-0 color-c f-14'>2+2 semi sleeper</p>
                                        <p className='mb-0 color-c f-12'>comfort coach</p>
                                    </div>
                                    <div className="text2">
                                        <h6 className="mb-0">5.00pm - 6.00am</h6>
                                        <p className="mb-0 color-c f-14">14 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left_box">
                                <div className="price">
                                    <h5 className="mb-0 color-f">INR 1500</h5>
                                </div>
                                <div className="other_info">
                                    <span><FaPlug /> charging available</span>
                                    <span><FaMusic /> entertainment</span>
                                    <span><FaCertificate /> safety features</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="rating"><FaStar /> 4</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
