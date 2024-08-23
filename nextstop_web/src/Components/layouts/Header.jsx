import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className=''>
        <div className='flex items-center justify-between h-20'>
          <div className='flex justify-around'>
            <div className='text-4xl ml-28   text-[#dba471]'>
              <FontAwesomeIcon icon={faBusAlt} />
              </div>
            <div>
              <h4 className='text-4xl pl-4 font-sans
               text-[#6f8499]'>NextStop</h4>
            </div>
          </div>
         
            <nav >
              <ul className='flex text-[#6f8499] font-mono font-semibold
               justify-around  mr-[120px] py-4 px-8'>
                <li className='px-6'><NavLink to='/'>Home</NavLink></li>
                <li className='px-6'>Chart</li>
                <li className='px-6'><NavLink to='/signin'>Login</NavLink></li>
                <li className='px-6'>Help</li>
              </ul>
            </nav>
         
        </div>
      </div>
    </>
  )
}

export default Header