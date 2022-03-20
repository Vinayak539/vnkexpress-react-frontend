import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FaHome, FaInfo, FaHeadphones } from 'react-icons/fa';


function Nav(){
    return
    
    <nav class="side-nav">
    <div class="poly"></div>
    <div class="close">
    {/* onclick="closeNav()" */}
        <h5>X</h5>
    </div>
    <div class="logo">
        <img src="../assets/images/vnk express (pink).png" alt="some image" />
    </div>
    <div class="list">
        <ul>
            <li><a href="/"><FaHome/> Home</a></li>
            <li><a href="/"><FaInfo/> About</a></li>
            <li><a href="/"> Portfolio</a></li>
            <li><a href="/"> Tickets</a></li>
            <li><a href="/"><FaHeadphones/> Contact</a></li>
        </ul>
    </div>
</nav>
}

export default Nav