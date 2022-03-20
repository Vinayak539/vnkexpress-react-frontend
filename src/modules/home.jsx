import Header from '../components/header';
import Hero from '../components/hero';
import Offers from '../components/offers';
import Discounts from '../components/discounts';
import Footer from '../components/footer';
import Banner from '../components/banner';

function Home(){
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