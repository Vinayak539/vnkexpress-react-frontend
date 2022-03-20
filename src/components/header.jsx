import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../assets/images/vnk express (purple).png';
import menuLogo from '../assets/images/vnk express (pink).png';
import menuImg from '../assets/images/list.svg';
import '../styles/header.css';
import { FaHome, FaInfo, FaHeadphones } from 'react-icons/fa';


function Header(){

    var [openSideMenu, setSideMenu] = useState(false);

    return (
        <header>
            <div class="inner"> 
                <div class="logo">
                    <a href="/"><img src={logo} alt="some image" /></a>
                </div>
                <div class="menu-symbol" onClick={()=>{setSideMenu(true)}}>
                {/* onclick="openNav()" */}
                    <img src={menuImg} alt="some image" />
                </div>
            </div>
            <nav class="side-nav" style={openSideMenu ? { 'right': '0%' } : { 'right': '-100%' }}>
                <div class="poly"></div>
                <div class="close" onClick={()=>{setSideMenu(false)}}>
                {/* onclick="closeNav()" */}
                    <h5>X</h5>
                </div>
                <div class="logo">
                    <img src={menuLogo} alt="some image" />
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
       </header>

    
    )      
}


export default Header;