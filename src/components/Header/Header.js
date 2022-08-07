import React from 'react';
import { Link } from "react-scroll"
import menu from "../images/menu.svg";
import "./Header.css";

function Header(){

    const navbaropen =()=>{
        var open=document.getElementById("navBar").classList.toggle("options");
    }
    return(
        <div className="header">
                    <span className="icon">SR</span>
            <nav id='navBar'>
                <ul>
                    <Link 
                        activeClass='active'
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="header-link">
                        Home
                    </Link>
                </ul>
                <ul>
                    <Link 
                        activeClass='active'
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="header-link">
                        About
                    </Link>
                </ul>
                <ul>
                    <Link 
                        activeClass='active'
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="header-link">
                        Skills  
                    </Link>
                </ul>
                <ul>
                    <Link
                        activeClass='active'
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="header-link">
                        Projects
                    </Link>
                </ul>
                <ul>
                    <Link
                        activeClass='active'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="header-link">
                        Contact
                    </Link>
                </ul>
            </nav>
            <img src={menu} className="menu" onClick={navbaropen}/>
        </div>
    )
}



export default Header;