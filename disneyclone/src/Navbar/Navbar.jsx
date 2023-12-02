import React from "react";
import "./Navbar.scss";
import { images } from "../Constants";
import { FaGripHorizontal } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

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

                <div className="nav__mid-logo">
                    <img src={images.kids} alt="" />
                </div>
               

               
            </div>

            <div className="nav__right">
                <div className="nav__right-search">
                    <input type="text" placeholder="Search.." />
                    <IoMdSearch/>
                </div>
                <div className="nav__right-btns">
                    <button>Subscribe</button>
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
