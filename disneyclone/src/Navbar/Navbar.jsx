import React from "react";
import "./Navbar.scss";
import { images } from "../Constants";
import { FaGripHorizontal } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div className="nav__left">
                <div className="nav__left-logos">
                    <FaGripHorizontal />
                    <img src={images.mainLogo} alt="" />
                </div>
            </div>
            <div className="nav__mid">
                <ul>{["TV" , "Sports", "Movies", "Disney+"].map((items)=>(
                    <li key={`link-${items}`}><a href={`#${items}`}>{items}</a>
                    <div/>
                    </li>


                ))}</ul>
               

               
            </div>
        </nav>
    );
};

export default Navbar;
