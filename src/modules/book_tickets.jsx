import { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../styles/book_tickets.css";
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import axios from "axios";

import destinationImg from '../assets/images/icons/destination.png';

import Select from 'react-select'

export default function BookTickets() {
    const [sourceErr, setSourceErr] = useState(false);
    const [destinationErr, setDestinationErr] = useState(false);
    const [dateErr, setDateErr] = useState(false);

    const [sourceValue, updateSource] = useState('');
    const [dateValue, updateDate] = useState('');
    const [destinationValue, updateDestination] = useState('');

    useEffect(() => {
        getSourceAndDestinationData();
    }, [])

    var sourceData = [
        // { value: 'chocolate', label: 'Chocolate' },
        // { value: 'strawberry', label: 'Strawberry' },
        // { value: 'vanilla', label: 'Vanilla' }
    ]
    var destinationData = [
        // { value: 'chocolate', label: 'Chocolate' },
        // { value: 'strawberry', label: 'Strawberry' },
        // { value: 'vanilla', label: 'Vanilla' }
    ]

    var getSourceAndDestinationData = useCallback(()=> {
        // const source =[];
        // const destination = [];
        axios.get("http://localhost:5000/routes", {
            method: "GET",
            mode: "cors",
            headers: {
                // "Authorization": `Bearer: ${token}`,
                "Content-Type": "application/json"
            },
        }).then((response) => {
                // console.log("Here are the available routes", response.data)
                sourceData = response.data.map((item)=>{
                    return {
                        value: item.source,
                        label: item.source
                    }
                })
                destinationData = response.data.map((item)=>{
                    return {
                        value: item.destination,
                        label: item.destination
                    }
                })
                console.log("Here are the available routes", destinationData);
            });
    }, []);
   

    function searchBuses() {
        if (sourceValue!='' && destinationValue!='' && dateValue!='') {
            console.log("if cond satisfired",sourceValue, destinationValue, dateValue );
            window.location.href = "/results" + "/" + sourceValue + "/" + destinationValue + "/" + dateValue
        }else{
            if(sourceValue=='' || sourceValue==null){
                setSourceErr(true);
            }else{
                setSourceErr(false);
            }

            if(destinationValue=='' || destinationValue==null){
                setDestinationErr(true);
            }else{
                setDestinationErr(false);
            }

            if(dateValue=='' || dateValue==null){
                setDateErr(true);
            }else{
                setDateErr(false);
            }
        }
    }

    return (
        <div className='main'>
            <Header />
            <section className="ticket_booking_section min-h-70">
                <div className="container">
                    <div className="row form_row">
                        <div className="col-lg-6 col-md-8">
                            <div className="search_buses_form">
                                <h3 class="page_head">Search your bus here !</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label>Enter Source</label>
                                                <Select options={sourceData} onChange={($event) => { updateSource($event.value); console.log(sourceValue ) }} />
                                            </div>
                                            {sourceErr && <span class="text-danger">Please enter source</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label>Enter Destintion</label>
                                                <Select options={destinationData} onChange={($event) => { updateDestination($event.value); console.log(destinationValue) }} />
                                            </div>
                                            {destinationErr && <span class="text-danger">Please enter destination</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label for="date">Select Date</label>
                                                <input type="date" name="date" id="date" onChange={($event) => { updateDate($event.target.value); console.log(dateValue) }} />
                                            </div>
                                            {dateErr && <span class="text-danger">Please enter date</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <input type="submit" value="Search Buses" class="bg-pink submit_btn color-a" onClick={() => { searchBuses() }} />
                                        {/* <Link to={"/results"+ "/"+source+"/"+destination+"/"+date} class="bg-pink submit_btn">Search Buses</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <img src={destinationImg} className="destinationImage" alt="destination"  />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}