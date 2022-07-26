import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/discounts.css"


function Discounts(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return   <div className="slider-content p-m">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Slider {...settings}>
                <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>Very warm welcome to our precious customers. We the team of vnk express thank you for choosing our service and 
                                we will try our best to provide you the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="head">
                            <h1>Flat 15% <span className="small">off /-</span></h1>
                            <h5>On Return Tickets !</h5>
                        </div>
                        <div className="content">
                            <p>the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and the buses in our fleet
                                the best in class service in terms of comfort and safety for your trip. 
                                We have daily bus service and t</p>
                                <a href="" className="offerBtn bg-pink">Get It</a>
                        </div>
                    </div>
                </Slider>
            </div>
           
        </div>
    </div>
</div>

}

export default Discounts;