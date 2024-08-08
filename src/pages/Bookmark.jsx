import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const Bookmark = () => {
    const { posts_list, bookmarkItems, addToBookmark, removeFromBookmark, getTotalBookmarkAmount } = useContext(StoreContext);
    return (
        <div className='mt-10'>
            <div className='shadow-lg'>
                <div className='grid grid-cols-6 items-center text-lg p-5 bg-red-300 text-white font-semibold rounded-t-md'>
                    <p className=''>Post Image</p>
                    <p>Transaction Type</p>
                    <p>Insta URL</p>
                    <p>Kpop Group</p>
                    <p>Chat</p>
                    <p>Remove</p>
                </div>
                {posts_list.map((item, index) => {
                    //compare the post items in the database with the bookmark items, if the item is inside the bookmark item, then display
                    if (bookmarkItems[item._id] > 0) {
                        return (
                            <div className=''>
                                <div key={index} className='grid grid-cols-6 items-center text-gray-500 text-lg py-2 px-5'>
                                    <img src={item.post_image} alt="post image" className='bookmark-img w-[50px]' style={{transition:"transform .2s"}}/>
                                    <p className='px-2 py-1 bg-red-300 text-white rounded-full mr-2 text-sm overflow-auto mb-1 max-w-fit'># {item.transaction_type}</p>
                                    <a href={item.insta_url} className='hover:text-red-300' target='_blank'>Read More</a>
                                    <p>{(item.kpop_group).map((group_name) => {
                                        return (
                                            <span className='px-2 py-1 bg-red-400 text-white rounded-full mr-2 text-sm overflow-auto mb-1'># {group_name}</span>
                                        )
                                    })}
                                    </p>
                                    <button className='bg-red-200 rounded-md px-2 py-1 text-white max-w-fit hover:bg-red-300'>Chat</button>
                                    <button onClick={() => removeFromBookmark(item._id)} className='bg-gray-400 rounded-md px-2 py-1 text-white max-w-fit hover:bg-gray-500'>Remove</button>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
                <div className='grid grid-cols-6 py-2'>
                    <div className='col-span-5'></div>
                    <div className='font-semibold'>Total: {getTotalBookmarkAmount()}</div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark