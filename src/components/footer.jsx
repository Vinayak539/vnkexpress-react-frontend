import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import facebook from "../assets/images/social/facebook.png";
import instagram from "../assets/images/social/instagram.png";
import linkedin from "../assets/images/social/linkedin.png";
import twitter from "../assets/images/social/twitter.png";
import whatsapp from "../assets/images/social//whatsapp.png";
import youtube from "../assets/images/social/youtube.png";
import { Link } from "react-router-link";


function Footer() {
    return <div class="footer">
        <div class="container">
            <div className="footer_links">
                <div className="row">
                    <div className="col-md-4 col-6">
                        <div>
                            <Link>Home</Link>
                            <Link>About</Link>
                            <Link>Tickets</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div>
                            <Link>Cancellation</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Refund Policy</Link>
                            <Link>Terms of service</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p className="mb-0 f-14 color-d social-links-head mt-md-0 mt-3"> Social Links</p>
                        <div class="social-links">
                            <a href="#"><img alt="some image" src={instagram} /></a>
                            <a href="#"><img alt="some image" src={linkedin} /></a>
                            <a href="#"><img alt="some image" src={twitter} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
                <p class="t-center color-a f-12">Copyright &copy; 2021. vnk express pvt. ltd.</p>
        </div>
    </div>
}

export default Footer