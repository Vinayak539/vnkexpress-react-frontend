import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import facebook from "../assets/images/social/facebook.png";
import instagram from  "../assets/images/social/instagram.png";
import linkedin from "../assets/images/social/linkedin.png";
import twitter from "../assets/images/social/twitter.png"; 
import whatsapp from "../assets/images/social//whatsapp.png";
import youtube from "../assets/images/social/youtube.png"; 


function Footer(){
    return <div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="t-center white">Copyright &copy; 2021. vnk express Pvt. Ltd.</p>
            </div>
            <div class="social-links">
                <a href="#"><img alt="some image" src={facebook} /></a>
                <a href="#"><img alt="some image" src={instagram} /></a>
                <a href="#"><img alt="some image" src={linkedin} /></a>
                <a href="#"><img alt="some image" src={twitter} /></a>
                <a href="#"><img alt="some image" src={whatsapp} /></a>
                <a href="#"><img alt="some image" src={youtube} /></a>
            </div>
        </div>
    </div>
</div>
}

export default Footer