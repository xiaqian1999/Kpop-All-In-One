import React, { useContext } from 'react'
import ScammerPostItem from './ScammerPostItem';
import { scammer_post_list } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchScammer = ({searchScammerKeyword, setSearchScammerKeyword}) => {
    const filteredData = scammer_post_list.filter(item => {
        const term = searchScammerKeyword.toLowerCase();
        return (
            item.username.toLowerCase().includes(term) || 
            item.payment_info.toLowerCase().includes(term)
        )
    })

    return (
        <div className='mt-5' id="scammer-section">
            <h2 className='text-[30px] font-extrabold text-red-300'>Scammer Search</h2>
            <hr className='my-2 h-[1px] bg-red-500 border-none' />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass " />
            <input 
                type="text" 
                placeholder='Search by username/paypal info' 
                value={searchScammerKeyword} 
                onChange={(e) => setSearchScammerKeyword(e.target.value)} 
                className='w-full border border-red-300 py-2 px-4 rounded-full placeholder-slate-400'
            />
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