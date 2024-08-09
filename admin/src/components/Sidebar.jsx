import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] border border-gray-400 border-t-0 font-semibold' style={{minHeight:'100vh'}}>
      <div className="pt-5 pl-[20%] flex flex-col gap-4">
        <NavLink to={"/addpost"} className="flex items-center gap-4 border border-gray-400 border-r-0 py-5 px-3 rounded-l-md cursor-pointer">
          <img className='' src={assets.add_icon} alt="add icon" />
          <p className='hidden sm:block'>Add Items</p>
        </NavLink>

        <NavLink to={"/listpost"} className="flex items-center gap-4 border border-gray-400 border-r-0 py-5 px-3 rounded-l-md cursor-pointer">
          <img className='' src={assets.order_icon} alt="list item icon" />
          <p className='hidden sm:block'>List Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar