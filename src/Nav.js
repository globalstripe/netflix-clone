import React, {useState, useEffect} from 'react'
import {Route, Link } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow)
        }
    },[]
    
    );
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <Router>
            <a target="_blank" href="https://www.netflix.com" rel="noreferrer">
            <img 
            className="nav_logo"
            src="https://raw.githubusercontent.com/globalstripe/netflix-clone/main/src/ChrisFlix2.png"
            //src="https://raw.githubusercontent.com/globalstripe/netflix-clone/main/src/CHRISFLIX.png"
            //src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/165/4210836165_83a74f26-b573-45a6-a8f6-be7e1cb99b30.png?cb=1606689711"
            //src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo!"/>
            </a>

            
            <a target="_blank" href="https://www.netflix.com/profiles/manage" rel="noreferrer">
            <img 
            className="nav_avatar"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" 
            alt="Avatar!"/>
            </a>
            </Router>
        </div>
    )
}

export default Nav
