import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../styles/book_tickets.css";
import Header from '../components/header';
import Footer from '../components/footer';

export default function BookTickets(){

    return (
        <div className='main'>
             <Header/>
            <section className="ticket_booking_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="search_buses_form">
                                <h3 class="page_head">Search your bus here !!</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form_grp">
                                        <label for="source">Enter Source</label>
                                        <input type="text" name="source" id="source" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form_grp">
                                        <label for="destination">Enter Destintion</label>
                                        <input type="text" name="destination" id="destination" />
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form_grp">
                                        <label for="date">Select Date</label>
                                        <input type="date" name="date" id="date" />
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        {/* <a href="localhost:8000/test" target="_blank">Here</a> */}
                                        <input type="submit" value="Search Buses" class="bg-purple submit_btn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}