import React from 'react'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='h-[34vw] my-5 mx-auto relative rounded-xl' style={{ background: "url(" + assets.header_img + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[60%] bottom-[10%] left-[6vw] bg-white bg-opacity-80 p-4 rounded-lg'>
            <h2 className='text-red-400 font-bold text-[3vw]'>Explore Kpop All In One Page</h2>
            <p className='text-red-400 text-md'>You are able to trade, purchase, sell, or join GO for the interested Kpop Group. Additionally, there's a scammer search page for you to check out before you make transaction.</p>
            <button className='border-none text-white bg-red-300 py-2 px-4 cursor-pointer rounded-lg hover:bg-red-400'>Start Explore</button>
        </div>
    </div>
  )
}

export default Header