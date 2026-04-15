import React from 'react';
import NabLogo from "../../assets/logo.png"
import { IoMdHome } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';

const Navbar = () => {
    return (

        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <img src={NabLogo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a> <IoMdHome /> Home</a></li>
                        <li><a> <MdOutlineWatchLater />Timeline</a></li>
                        <li><a> <SiSimpleanalytics />Stats</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;