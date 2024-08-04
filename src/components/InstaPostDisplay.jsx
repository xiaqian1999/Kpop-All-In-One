import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import InstaPostItem from './InstaPostItem';

const InstaPostDisplay = ({transactionType}) => {
    const {posts_list} = useContext(StoreContext)

    return (
        <div className='mt-5' id="insta-post-display">
            <h2 className='text-[30px] font-extrabold text-red-300'>Top Post</h2>
            <hr className='my-2 h-[1px] bg-red-500 border-none' />
            <div className='display-list grid mt-5 gap-[30px]'>
                {posts_list.map((item, index) => {
                    //Display all InstaPostItems
                    if (transactionType  === "All" || transactionType===item.transaction_type){
                        return <InstaPostItem key={index} id={item._id} instaUrl={item.insta_url} image={item.post_image} description={item.description} group={item.kpop_group} transaction_type={item.transaction_type} />
                    }
                })}
            </div>
        </div>
    )
}

export default InstaPostDisplay