import React, { useState } from 'react'
// import './Navbar.css';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='flex justify-between items-center py-10'>
      <Link to="/"><img src={assets.logo} alt="logo" className='w-[150px]' /></Link>

      <ul className='flex list-none gap-[20px] text-lg items-center'>
        <Link to="/" onClick={() => {setMenu("home")}} className={`hover:text-red-300 cursor-pointer ${menu==="home" ? "border-b-red-300 text-red-300 " : ""}`}>Home</Link>
        <a href="#transaction-section" onClick={() => {setMenu("transaction-section")}} className={`hover:text-red-300 cursor-pointer ${menu==="transaction-section" ? "border-b-red-300 text-red-300 " : ""}`}>Transaction</a>
        <a href="#scammer-section" onClick={() => {setMenu("scammer-section")}} className={`hover:text-red-300 cursor-pointer ${menu==="scammer-section" ? "border-b-red-300 text-red-300 " : ""}`}>Scammer Search</a>
        <a href="#contact-us" onClick={() => {setMenu("contact-us")}} className={`hover:text-red-300 cursor-pointer ${menu==="contact-us" ? "border-b-red-300 text-red-300 " : ""}`}>Contact Us</a>
      </ul>

      <div className='flex items-center gap-[40px]'>
        <div>
          <Link to="/bookmark"><img src={assets.bookmark_before} alt="bookmark icon" className='relative w-5 h-5 cursor-pointer' /></Link>
          <div className='absolute min-w-2 min-h-2 bg-red-500 rounded-full top-[-8px] right-[-8px]'>2</div>
        </div>

        <button onClick={() => setShowLogin(true)} className='bg-transparent text-lg border border-red-300 cursor-pointer px-4 py-2 rounded-full text-red-300 hover:bg-red-200 hover:text-white'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar