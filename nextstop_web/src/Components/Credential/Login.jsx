import React, { useState } from 'react'
import img3 from '../../img/img8.jpg'
import bg from '../../img/bg.jpg'
import { NavLink } from 'react-router-dom'
import Header from '../layouts/Header'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
    const [login,setLogin] = useState(
        {
            email:'',
            password:''
        }
    )
    function handleChange(e){
        setLogin((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if ( login.email == '' || login.password == '') {
            toast.error('Email or Password is empty',{
                position:"top-center"
            })
        }
    }
    return (
        <>
        <Header/>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgb(27, 0, 0,0.6),rgb(27, 0, 0,0.6)), url(${bg})` }}
                className='px-60 py-20 text-gray-400 text-lg font-bold bg-[#5864874d] h-screen  bg-cover bg-center'>
                <div className='flex'>

                    <div className='w-4/12' >
                        <img src={img3} alt="" className="opacity-95" />
                    </div>
                    <div className='w-7/12 pt-20 pl-20 bg-orange-100' >
                        <p className='pl-20 text-2xl text-slate-500'>SignIn</p>
                        <div className='my-5'>
                            <input name='email' onChange={handleChange}
                             className='w-8/12 bg-transparent outline-none border-b-2 border-slate-300 placeholder:italic placeholder:text-sm text-slate-500' type="email" placeholder='Eamil' />
                        </div>
                        <div className='my-5'>
                            <input name='password' onChange={handleChange}
                             className='w-8/12 bg-transparent outline-none border-b-2 border-slate-300 placeholder:italic placeholder:text-sm text-slate-500' type="password" placeholder='Password' />
                        </div>

                        <div className='ml-4'>
                            <button type='submit' onClick={handleSubmit} className='mx-4 text-slate-50 text-center font-semibold
     rounded-full bg-orange-500 h-10 w-[120px]  ease-in-out duration-200 hover:text-slate-300 hover:border-2 border-white'
                            >SignIn</button>
                            <button className='text-slate-50 text-center font-semibold
     rounded-full bg-orange-500 h-10 w-[120px] hover:bg-slate-100 ease-in-out duration-200 hover:text-slate-700 hover:border-2 border-orange-500'>
                                <NavLink to='/signup'>SignUp</NavLink></button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login