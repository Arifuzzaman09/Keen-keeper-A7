import React from 'react';
import FooterImg from '../../assets/logo-xl.png'
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-700'>
            <footer className=" w-10/12 mx-auto footer footer-horizontal footer-center  text-primary-content p-10">
                <aside>
                   <img src={FooterImg} alt="" />
                    <p>Your Personal shelf of meaningful connections. Browse,tend, and nurture the relationships this matter most</p>
                    
                </aside>
                <nav>
                    <h3 className='text-xl font-semibold'>Social Links</h3>
                    <div className="grid grid-flow-col gap-4 text-black text-2xl">
                        
                        <a className='bg-white p-2 rounded-xl'>
                          <RiInstagramFill /> 
                        </a>
                        <a className='bg-white p-2 rounded-xl'>
                            <FaFacebookSquare />
                        </a>
                        <a className='bg-white p-2 rounded-xl'>
                          <FaXTwitter />  
                        </a>
                    </div>
                </nav>
             <div className='flex justify-between items-center gap-11'>
                   <p> &copy; 2026 KeenKeeper - All right reserved</p>
                   <div className='flex justify-between items-center gap-3.5'>
                    <a >Privacy policy</a>
                    <a >terms of Service</a>
                    <a >Cookies</a>
                   </div>
             </div>
            </footer>
        </div>
    );
};

export default Footer; Footer