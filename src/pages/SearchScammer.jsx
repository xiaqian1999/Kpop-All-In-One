import React, { useContext } from 'react'
import ScammerPostItem from '../components/ScammerPostItem';
import { scammer_post_list } from '../assets/assets';

const SearchScammer = ({searchScammerKeyword, setSearchScammerKeyword, setShowScammerPopUp}) => {

    //Search Bar
    const filteredData = scammer_post_list.filter(item => {
        const term = searchScammerKeyword.toLowerCase();
        return (
            item.username.toLowerCase().includes(term) || 
            item.payment_info.toLowerCase().includes(term)
        )
    })

    return (
        // <div className='mt-5' id="scammer-section">
        <div className='mt-5'>
            <div className='flex flex-nowrap w-full'>
                <h2 className='flex-1 text-[30px] font-extrabold text-red-300'>Scammer Search</h2>
                <div className='flex-auto flex flex-wrap'>
                    <input 
                        type="text" 
                        placeholder='Search by username/paypal info' 
                        value={searchScammerKeyword} 
                        onChange={(e) => setSearchScammerKeyword(e.target.value)} 
                        className='w-4/5 border border-red-300 py-2 px-4 rounded-full placeholder-slate-400 mx-2'
                    />
                    <button onClick={() => setShowScammerPopUp(true)} className='bg-red-300 text-white py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-red-400'>Add Scammer</button>
                </div>
            </div>
            <hr className='my-5 h-[1px] bg-red-500 border-none' />
            <div className='display-list grid mt-5 gap-[30px]'>
                {filteredData.length === 0 && <p>No Scammer Found</p>}
                {filteredData.map((item, index) => {
                    //Display all Scammer Post
                    return <ScammerPostItem 
                                key={index} 
                                id={item._id} 
                                insta_url={item.insta_url} 
                                username={item.username} 
                                date_of_post={item.date_of_post} 
                                user_type={item.user_type} 
                                platform_transaction={item.platform_transaction}
                                scammer_type={item.scammer_type}
                                kpop_group={item.kpop_group}
                                payment_info={item.payment_info} />
                })}
            </div>
        </div>
    )
}

export default SearchScammer