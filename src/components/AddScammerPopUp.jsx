import React from 'react'
import { assets } from '../assets/assets'


const AddScammerPopUp = ({setShowScammerPopUp}) => {

    return (
        <div className='fixed z-1 w-full h-full grid' style={{background: '#00000090', zIndex: 2}}>
            <form className='place-self-center w-[30vw] bg-white flex flex-col gap-4 rounded-lg text-md p-4' style={{animation: "fadeIn 0.5s"}}>
                <div className='flex justify-between items-center text-black'>
                    <h2 className='text-lg font-semibold'>Add New Scammer</h2>
                    <img onClick={() => setShowScammerPopUp(false)} src={assets.close_icon} alt="close icon" className='cursor-pointer w-[16px]' />
                </div>

                <div className='flex flex-col gap-3'>
                    {/* Later on have the option that allows user to add multiple username and multiple paypal account in one submission */}
                    <input type="text" placeholder="Scammer Username" className='outline-none border border-gray-300 px-4 py-2 rounded-md' required />
                    <input type="text" placeholder="Scammer Paypal Account" className='outline-none border border-gray-300 px-4 py-2 rounded-md' required/>

                    <select className='outline-none border border-gray-300 px-4 py-2 rounded-md' required>
                        <option value="" disabled selected>Select the seller type</option>
                        <option value="seller">Seller</option>
                        <option value="trader">Trader</option>
                        <option value="buyer">Buyer</option>
                        <option value="gom">GOM</option>
                    </select>
                    
                    <select className='outline-none border border-gray-300 px-4 py-2 rounded-md' required>
                        <option value="" disabled selected>Select the scammer type</option>
                        <option value="potential_scammer">Potential Scammer</option>
                        <option value="selective_scammer">Selective Scammer</option>
                        <option value="fake_items">Fake Items</option>
                        <option value="bad_experience">Bad Experience</option>
                        <option value="fake_account">Fake Account</option>
                        <option value="fake_giveaway">Fake Giveaway</option>
                    </select>

                    <select className='outline-none border border-gray-300 px-4 py-2 rounded-md' required>
                        <option value="" disabled selected>Select the platform scammed</option>
                        <option value="instagram">Instagram</option>
                        <option value="twitter">Twitter</option>
                        <option value="facebook">Facebook</option>
                        <option value="mercari">Mercari</option>
                        <option value="ebay">eBay</option>
                    </select>

                    <select className='outline-none border border-gray-300 px-4 py-2 rounded-md' required>
                        <option value="" disabled selected>Select the Scammer interested kpop group</option>
                        <option value="seventeen">Seventeen</option>
                        <option value="astro">Astro</option>
                        <option value="twice">Twice</option>
                    </select>

                </div>

                <button className='border-none px-4 py-2 rounded-md text-white bg-red-300 hover:bg-red-400 cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default AddScammerPopUp