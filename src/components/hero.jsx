import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Hero(){
    return <div class="hero">
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
                        <input type="submit" class="bg-purple white" value="Enquire Now"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Hero;