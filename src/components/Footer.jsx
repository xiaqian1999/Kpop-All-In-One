import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div id="contact-us" className='flex flex-col items-center p-5 mt-[100px] bg-red-300 text-white'>
        <div className='w-full grid grid-cols-3 gap-3 mb-5'>
            <div className='left-side items-center justify-self-center'>
                <img src={assets.logo} alt="logo" className='w-[60%]' />
                <div className='flex flex-row'>
                    <img src={assets.facebook_icon} alt="facebook_icon" className='w-10 h-10 mx-2' />
                    <img src={assets.instagram_icon} alt="instagram_icon" className='w-10 h-10 mx-2' />
                    <img src={assets.twitter_icon} alt="twitter_icon" className='w-10 h-10 mx-2' />
                    <img src={assets.linkedin_icon} alt="linkedin_icon" className='w-10 h-10 mx-2' />
                </div>
            </div>

            <div className='center-side items-center justify-self-center'>
                <h2 className='text-black text-xl font-bold mb-2'>COMPANY</h2>
                <ul>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>Home</li>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>Transaction</li>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>Scammer Search</li>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>Contact Us</li>
                </ul>
            </div>

            <div className='right-side items-center justify-self-center'>
                <h2 className='text-black text-xl font-bold mb-2'>GET IN TOUCH</h2>
                <ul>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>+1-234-567-8901</li>
                    <li className='cursor-pointer mb-3 hover:text-red-500 font-extralight'>contact@tomato.com</li>
                </ul>
            </div>
        </div>

        <div className='p-2 mx-auto'>
            <a href="#explore-start" className='text-center text-black font-extrabold flex flex-wrap'>
                <p className='self-center mr-2 text-[20px]'>Back To Top</p>
                <img src={assets.arrow_top} alt="arrow top icon" className='w-8' />
            </a>
        </div>
        <hr className='my-2 h-[1px] bg-black' />
        <div className='text-xs text-black text-center'>
            <p>Copyright 2024 © Kpop-All-In-One.com - All Right Reserved.</p>
            <a href="https://www.flaticon.com/free-icons/brands-and-logotypes" title="brands and logotypes icons">Brands and logotypes icons created by Freepik - Flaticon</a>
        </div>
    </div>
  )
}

export default Footer