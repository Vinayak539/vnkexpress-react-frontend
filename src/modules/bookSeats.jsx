import { useState, useEffect } from 'react';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/bookSeats.css';
import reactSelect from 'react-select';

export default class BookSeats extends React.Component{
    constructor(){
        super();
        this.state = {stateVal: 1}
    }
  render(){
    return( 
        <div>
        <Header/>
            <div className="py-2">
                <div className="container py-2">
                    <div className="pactice my-5 py-5">
                        <p>Counter Value is {this.state.stateVal}</p>
                        <button onClick={()=>{this.setState(this.state.stateVal=3)}}>Here</button>
                    </div>
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="layout_container">
                            <div className="single_layout">
                            <div className="seat_layout_left">
                                <div className="seats_row seater_row">
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="seat_layout_right">
                                <div className="seats_row seater_row">
                                    <div className="seat_pair driver_seat">
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                    <div className="seat_pair">
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    <div className="single_seat">
                                        <input type="checkbox" className="seater"/>
                                        <label></label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="text_info py-2">
                            <h3 className="mb-0">Mumbai to Hyderabad</h3>
                            <h4>6.00pm to 8.00am</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
  }
}