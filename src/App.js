// import Module1 from './modules/mod1.jsx';
import Home from './modules/home.jsx';
import About from './modules/about';
import BookTickets from "./modules/book_tickets";
import Practice, {PracticeFunction} from "./modules/practice";
import BusResults from "./modules/busResults.jsx";
import BookSeats from "./modules/bookSeats.jsx";
import Practice2 from './modules/practice2';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/aboutus" element={ <About/> } />
            <Route path="/tickets" element={ <BookTickets/> } />
            <Route path="/practice" element={ <Practice name="Vinayak"/> } />
            {/* <Route path="/practice" element={ <PracticeFunction name="rushabh" /> } /> */}
            <Route path="/results/:source/:destination/:date" element={ <BusResults/> } />
            <Route path="/practice2" element={ <Practice2/> } />
            <Route path="/book-seats" element={ <BookSeats/> } />
        </Routes>
    </BrowserRouter>
    );
}

export default App;