import React from 'react';
// import Module1 from './modules/mod1.jsx';
import './App.css';

import { createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './modules/about';
import BookTickets from "./modules/book_tickets";
import Practice, {PracticeFunction} from "./modules/practice";
import BusResults from "./modules/busResults.jsx";
import BookSeats from "./modules/bookSeats.jsx";
import Practice2 from './modules/practice2';

import LoadingScreen from '../src/components/loadingScreen';
var Home = React.lazy(() => import("./modules/home.jsx"));



export const MyContext = createContext({theme:'dark'});

function App() {
    // var myOwnContext = useContext(MyContext);
    // myOwnContext.theme = "light";
    return ( 
    <BrowserRouter>
        <React.Suspense fallback={<LoadingScreen/>}>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/aboutus" element={ <About/> } />
                <Route path="/tickets" element={ <BookTickets/> } />
                {/* <Route path="/practice" element={ <Practice name="Vinayak"/> } /> */}
                <Route path="/practice" element={ <PracticeFunction name="rushabh" /> } />
                <Route path="/results/:source/:destination/:date" element={ <BusResults/> } />
                <Route path="/practice2" element={ <Practice2/> } />
                <Route path="/book-seats" element={ <BookSeats/> } />
            </Routes>
        </React.Suspense>
    </BrowserRouter>
    );
}

export default App;