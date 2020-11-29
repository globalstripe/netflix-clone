import React, {useState, useEffect} from 'react'
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
            window.removeEventListener("scroll")
        }
    },[]
    
    );
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/165/4210836165_83a74f26-b573-45a6-a8f6-be7e1cb99b30.png?cb=1606689711"
            //src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo!"/>

            <img 
            className="nav_avatar"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" 
            alt="Avatar!"/>
        </div>
    )
}

export default Nav
