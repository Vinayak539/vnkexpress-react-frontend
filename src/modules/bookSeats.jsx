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
  render(){
    return( 
        <div>
            <Header/>
        <div className="py-2">
            <div className="container py-2">
                <div className="layout_container">
                    <div className="single_layout">
                    <div className="seat_layout_left">
                        <div className="seats_row seater_row">
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                        </div>
                    </div>
                    <div className="seat_layout_right">
                        <div className="seats_row seater_row">
                            <div className="seat_pair driver_seat">
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                            <div className="seat_pair">
                                <input type="checkbox" className="seater"/>
                                <input type="checkbox" className="seater"/>
                            </div>
                        </div>
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