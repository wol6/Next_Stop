import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";


function Contact() {
    return (
        <>
            {/* address mobno and socialmedia */}

            <div className='h-16 bg-[#F6F6F6] flex justify-between text-blue-900'>
                <div className='flex items-center p-3 font-bold text-slate-400'>
                    <div className='mx-4'>
                        <IoLocation />
                    </div>
                    <p className=''>Parker Boulevard, Oakland, CA 76107</p>
                    <div className='mx-4'>
                        <FaMobileScreenButton />
                    </div>
                    <p>(0481) 123 987 2411</p>
                    <div className='mx-4'>
                        <IoIosTime />
                    </div>
                    <p>Mon-Sat: 07:00 - 17:00</p>
                </div>

                {/* social media icons  */}
                
                <div className='flex items-center space-x-10 mr-20 text-slate-400'>
                    <a href=""><IoLogoInstagram size={30} /></a>
                    <a href=""><PiFacebookLogoDuotone size={30} /></a>
                    <a href=""><FaXTwitter size={30} /></a>
                </div>
            </div>
        </>
    )
}

export default Contact