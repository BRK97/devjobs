import { IoSunny, IoMoon } from "react-icons/io5";
import { IconContext } from "react-icons";
import SearchBar from './SearchBar';
import {Link} from "react-router-dom";
// import { useEffect, useState } from "react";

const NavBar = () => {

    return ( 
        <div className="navbar">
            <div className="header">
                <Link to={`/`}>
                <span>devjobs</span>
                </Link>
                
                <div className="page-theme">
                    <IconContext.Provider value={{color:"white",className: "global-class-name"}}>
                        <IoSunny />
                            <input className ="navbar-toggle" type="checkbox"></input>
                        <IoMoon />
                    </IconContext.Provider>
                
                </div>
            </div>
            <SearchBar />
        </div>
     );
}
 
export default NavBar;