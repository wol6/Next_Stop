import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <>
            <div className='flex justify-around items-center mx-20 rounded-lg text-slate-500 
     bg-slate-50 h-20'>
                <div className='rounded-lg relative pt-1'>
                    <Tooltip placement="top" title="The date when your journey will start" className='absolute top-[-1.3rem] left-[-0.1rem]'>
                        <span className='text-[11px] pr-1 text-slate-500'>PICKUP DATE</span>
                        <FontAwesomeIcon className='text-slate-400' icon={faQuestion} />
                    </Tooltip>
                    <input className='bg-slate-50' type="date" name="" id="" />
                </div>

                <div className='rounded-lg relative  pt-1'>
                    <input type="text" className='outline-none bg-slate-50 w-full px-8 h-9 rounded-sm font-bold text-slate-500' 
                    placeholder='Enter Location' />
                    <Tooltip placement="top" title="The address where your journey will start" className='absolute top-[-1.1rem] left-[1.8rem]'>
                        <span className='text-[11px] pr-1 text-slate-500'>PICKUP LOCATION</span>
                        <FontAwesomeIcon className='text-slate-400' icon={faQuestion} />
                    </Tooltip>
                </div>
                <div className='rounded-lg relative  pt-1'>
                    <Tooltip placement="top" title="The address where your journey will end" className='absolute top-[-1.1rem] left-[1.8rem]'>
                        <span className='text-[11px] pr-1 text-slate-500'>DROF-OFF LOCATION</span>
                        <FontAwesomeIcon className='text-slate-400' icon={faQuestion} />
                    </Tooltip>
                    <input type="text" className='outline-none bg-slate-50 w-full px-8 h-9 rounded-sm font-bold text-slate-500'
                     placeholder='Enter Location' /></div>
                <div className='text-slate-50 text-center font-semibold
     rounded-full pt-1.5 bg-orange-500 h-10 w-[120px] hover:bg-slate-100 ease-in-out duration-200 hover:text-slate-700 hover:border-2 border-orange-500'>
        <button>Search</button></div>
            </div>
        </>
    )
}

export default Search