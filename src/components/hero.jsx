import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../styles/hero.css';

import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';


function Hero() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <div className="slider_container">
             <Slider {...settings}>
                <div className='slider'>
                    <img src={banner1} alt="banner" />
                </div>
                <div className='slider'>
                    <img src={banner2} alt="banner" />
                </div>
            </Slider>
        </div>
    )


    {/* <div class="hero">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
                <div class="hero-enq">
                    <h3 class="white t-center">Book Tickets Directly !</h3>
                    <form action="">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="number" name="contact" placeholder="Contact"/>
                        <input type="submit" class="bg-pink color-a" value="Enquire Now"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> */}


}

export default Hero;