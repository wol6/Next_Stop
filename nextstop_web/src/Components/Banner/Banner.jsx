import React from 'react'
import bg from '../../img/bg.jpg'
import Search from './Search/Search'

function Banner() {
  return (
  <>
    <div className='border  bg-cover bg-center h-screen 
    ' style={{backgroundImage:`linear-gradient(to bottom, rgba(211, 211, 211, 0.2), rgba(211, 211, 211, 0.4)), url(${bg})` }}>
    <div className='text-blue-900 font-bold my-[90px] mx-[110px]'>
         <p className='text-lg mb-3'>A CHAUFFEUR FOR A RIDE?</p>
         <h2 className='text-3xl'>Intercity  Shuttle </h2>
         <h2 className='text-3xl'>Make Your Online Reservation</h2>
    </div>
      <div className='mt-[-40px]'>
        <Search/>
      </div>
    </div>
  </>
  )
}

export default Banner