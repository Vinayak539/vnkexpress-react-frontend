import Header from '../components/header';
import Hero from '../components/hero';
import Offers from '../components/offers';
import Discounts from '../components/discounts';
import Footer from '../components/footer';
import Banner from '../components/banner';
import AnimatedCards from '../components/animatedCards'

import {useEffect} from 'react';
import axios from "axios";

function Home(){
    useEffect(() => {
        axios.get("https://secret-shelf-13291.herokuapp.com")
          .then((response) => console.log(response.data));
        }, []);

    return <div className="home">
            <Header/>
            <Hero/>
            <Banner/>
            <Offers/>
            <AnimatedCards/>
            {/* <Discounts/> */}
            <Footer/>
           </div>
}

export default Home;