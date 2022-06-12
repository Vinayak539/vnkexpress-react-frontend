import Header from '../components/header';
import Hero from '../components/hero';
import Offers from '../components/offers';
import Discounts from '../components/discounts';
import Footer from '../components/footer';
import Banner from '../components/banner';

import {useEffect} from 'react';
import axios from "axios";

function Home(){
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => console.log(response.data));
        }, []);

    return <div className="home">
            <Header/>
            <Hero/>
            <Banner/>
            <Offers/>
            <Discounts/>
            <Footer/>
           </div>
}

export default Home;