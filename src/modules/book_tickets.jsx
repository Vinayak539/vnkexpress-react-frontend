import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../styles/book_tickets.css";
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import axios from "axios";

import Select from 'react-select'

export default function BookTickets() {
    const [sourceErr, setSourceErr] = useState(false);
    const [destinationErr, setDestinationErr] = useState(false);
    const [dateErr, setDateErr] = useState(false);

    const [source, updateSource] = useState('');
    const [date, updateDate] = useState('');
    const [destination, updateDestination] = useState('');

    useEffect(() => {
        getSourceAndDestinationData();
    }, [])

    var sourceData = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    var destinationData = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    function getSourceAndDestinationData() {
        // const source =[];
        // const destination = [];
        axios.get("https://secret-shelf-13291.herokuapp.com/routes")
            .then((response) => {
                console.log("Here are the available routes", response.data)
                // sourceData = response.data.map((item)=>{
                //     return {
                //         value: item.source,
                //         label: item.source
                //     }
                // })
                // destinationData = response.data.map((item)=>{
                //     return {
                //         value: item.destination,
                //         label: item.destination
                //     }
                // })
            });
    }

    function searchBuses() {
        if (!source) {
            setSourceErr(true);
            // console.log("No source", sourceErr);
        }else{
            setSourceErr(false);
        }
        if (!destination) {
            setDestinationErr(true);
            // console.log("No soudestce", destinationErr);
        }else{
            setDestinationErr(false);
        }
        if (!date) {
            setDateErr(true);
            // console.log("No date", dateErr);
        }else{
            setDateErr(false);
        }
        if (!sourceErr && !destinationErr && !dateErr) {
            // console.log("satisfired",sourceErr, destinationErr, dateErr );
            window.location.href = "/results" + "/" + source + "/" + destination + "/" + date
        }
    }

    return (
        <div className='main'>
            <Header />
            <section className="ticket_booking_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="search_buses_form">
                                <h3 class="page_head">Search your bus here !</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label>Enter Source</label>
                                                <Select options={sourceData} onChange={($event) => { updateSource($event.value); console.log($event.value,sourceErr ) }} />
                                            </div>
                                            {sourceErr && <span class="text-danger">Please enter source</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label>Enter Destintion</label>
                                                <Select options={destinationData} onChange={($event) => { updateDestination($event.value); console.log($event.value) }} />
                                            </div>
                                            {destinationErr && <span class="text-danger">Please enter destination</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className='form_grp'>
                                            <div className="form_grp_inner">
                                                <label for="date">Select Date</label>
                                                <input type="date" name="date" id="date" onChange={($event) => { updateDate($event.target.value) }} />
                                            </div>
                                            {dateErr && <span class="text-danger">Please enter date</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <input type="submit" value="Search Buses" class="bg-purple submit_btn" onClick={() => { searchBuses() }} />
                                        {/* <Link to={"/results"+ "/"+source+"/"+destination+"/"+date} class="bg-purple submit_btn">Search Buses</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}