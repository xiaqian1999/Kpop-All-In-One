import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-3'>
      <img src={assets.logo} alt="" className='w-[20%]'/>
      <img src={assets.profile_image} alt="" className='w-[50px]'/>
    </div>
  )
}

export default Navbar