import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")

    return (
        <div className='fixed z-1 w-full h-full grid' style={{background: '#00000090', zIndex: 2}}>
            <form className='place-self-center w-[30vw] bg-white flex flex-col gap-4 rounded-lg text-md p-4' style={{animation: "fadeIn 0.5s"}}>
                <div className='flex justify-between items-center text-black'>
                    <h2 className='text-lg font-semibold'>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="close icon" className='cursor-pointer w-[16px]' />
                </div>

                <div className='flex flex-col gap-3'>
                    {currState === "Login" 
                        ? <></> 
                        : <input type="text" placeholder='Your Name' className='outline-none border border-gray-300 px-4 py-2 rounded-md' required />
                    }
                    <input type="email" placeholder="Your Email" className='outline-none border border-gray-300 px-4 py-2 rounded-md' required />
                    <input type="password" placeholder="Password" className='outline-none border border-gray-300 px-4 py-2 rounded-md' required/>
                </div>

                <button className='border-none px-4 py-2 rounded-md text-white bg-red-300 hover:bg-red-400 cursor-pointer'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

                <div className='flex items-start gap-2'>
                    <input type="checkbox" required />
                    <p className='text-sm' style={{marginTop: '-4px'}}>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>

                {currState === "Login" 
                    ? <p className='text-center mt-3 text-sm'>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='cursor-pointer text-red-300 hover:text-red-400'>Click here</span></p>
                    : <p className='text-center mt-3 text-sm'>Already have an account? <span onClick={() => setCurrState("Login")} className='cursor-pointer text-red-300 hover:text-red-400'>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp