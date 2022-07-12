import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../assets/images/logo.png';
import menuLogo from '../assets/images/logo.png';
import menuImg from '../assets/images/list.svg';
import '../styles/header.css';
import { FaHome, FaInfo, FaHeadphones } from 'react-icons/fa';
import closeMenu from '../assets/images/icons/close.png'

import { Link } from "react-router-dom";


function Header(){

    var [openSideMenu, setSideMenu] = useState(false);

    return (
        <header>
            <div className="container p-0">
            <div class="inner"> 
                <div class="logo">
                    {/* <a href="/"><img src={logo} alt="some image" /></a> */}
                </div>
                <div class="menu-symbol" onClick={()=>{setSideMenu(true)}}>
                {/* onclick="openNav()" */}
                    <img src={menuImg} alt="some image" />
                </div>
            </div>
            <div class="side_nav_clip" style={openSideMenu ? { 'clipPath': 'circle(1000px at 100% 0)' } : { 'clipPath': 'circle(0 at 100% 0)' }}>
                <nav class="side-nav">
                    <div class="poly"></div>
                    <div class="close" onClick={()=>{setSideMenu(false)}}>
                    {/* onclick="closeNav()" */}
                        {/* <h5>X</h5> */}
                        <img src={closeMenu} alt="close menu"></img>
                    </div>
                    <div class="logo">
                        {/* <img src={menuLogo} alt="some image" /> */}
                    </div>
                    <div class="list">
                        <ul>
                            <li><Link to="/"><FaHome/> Home</Link></li>
                            <li><Link to="/aboutus"><FaInfo/> About</Link></li>
                            <li><Link to="/"> Portfolio</Link></li>
                            <li><Link to="/tickets"> Tickets</Link></li>
                            <li><Link to="/"><FaHeadphones/> Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
       </header>

    
    )      
}


export default Header;