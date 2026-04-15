import React from 'react';
import NabLogo from "../../assets/logo.png"
import { IoMdHome } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { NavLink } from 'react-router';


const Navbar = () => {
    return (

        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <img src={NabLogo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to={"/"}
                                className={({ isActive }) => `font-semibold  ${isActive ? "bg-green-600 text-white" : ""}`}><IoMdHome /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/timeline"}
                                className={({ isActive }) => `font-semibold  ${isActive ? "bg-green-600 text-white" : ""}`}><MdOutlineWatchLater /> Timeline</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/stats"}
                                className={({ isActive }) => `font-semibold  ${isActive ? "bg-green-600 text-white" : ""}`}><SiSimpleanalytics  />Stats</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;