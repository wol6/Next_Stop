import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div className='flex justify-around text-slate-500 bg-slate-200 pt-8 pb-4'>
        <div className='w-80'>
          <h3 className='text-center font-semibold text-slate-500'>Our Motive</h3>
          <p className='mt-2'>NextStop delivers reliable and comfortable transportation across [Region/City].
            Our mission is to provide safe, efficient, and customer-focused travel solutions.</p>
        </div>
        <div>
          <h3 className='font-semibold text-slate-500'>Office Location</h3>
          <h4 className='font-bold mt-2'>Main Office</h4>
          <p>Parker Boulevard, Oakland, CA 76107</p>
          <p>(0481) 123 987 2411</p>
          <h4 className='font-bold'>Branch Office</h4>
          <p> Sunset Boulevard, Riverland, EN 1010</p>
          <p>(345) 789-0123</p>
        </div>
        <div>
          <h3 className='font-semibold text-slate-500 text-center'> Support Hours</h3>
          <h2 className='text-xl font-bold text-slate-400 mt-2'>MON-SAT: 07:00 - 17:00</h2>
          <h2 className='text-xl font-bold text-slate-400'>SUN: CLOSED</h2>

        </div>
      </div>

      <div className='bg-slate-200 flex justify-between text-slate-500 py-6 border-t border-slate-400'>
       <div>
       <p className='pl-16'>Copyright 2024 NextStop Theme by QuanticaLabs</p>
       </div>

       <div className='flex items-center space-x-10 mr-20 text-slate-400'>
                    <a href=""><IoLogoInstagram size={30} /></a>
                    <a href=""><PiFacebookLogoDuotone size={30} /></a>
                    <a href=""><FaXTwitter size={30} /></a>
                </div>
      </div>

    </>
  )
}

export default Footer