import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Banner(){
    return  <div class="banner bg-purple">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="white t-center" style={{'marginBottom': '20px'}}>Greetings !!</h1>
                <p class="white">Very warm welcome to our precious customers.
                    We the team of vnk express thank you for choosing our service and we will try our best to
                    provide you the best in
                    class service in terms of comfort and safety for your trip.</p>
                    <p class="white"> We have daily bus service and
                    the buses in our fleet
                    include buses of brands Volvo, Bharatbenz, Scania,Leyland. We offer variety of options for
                    you such as Non AC
                    Sleeper/Seater, AC Seater/Sleeper, Volvo/Scania AC seater, and the best and most premium
                    option in the company
                    i.e. Volvo AC Sleeper.
                </p>
                <p class="white"> We hope we are able to provide the best user interface for our dear
                    users.
                    If any queries and recommendations for your help you can contact us!</p>
            </div>
        </div>
    </div>
</div>
}

export default Banner;