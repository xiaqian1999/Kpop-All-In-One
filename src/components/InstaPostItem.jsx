import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets';

const InstaPostItem = ({id, instaUrl, image, description, group, transaction_type}) => {

    const { bookmarkItems, addToBookmark, removeFromBookmark } = useContext(StoreContext);

    return (
        <div className='w-full m-auto rounded-xl shadow-lg' style={{ transition: '0.3s', animation: 'fadeIn 1s' }}>
            <a href={instaUrl}>
                <img src={image} alt={image} className='rounded-t-xl w-full'/>
            </a>
            
            <div className='item-info p-4'>
                <div className='mb-2 flex flex-wrap justify-between'>
                    <div className='px-2 py-1 bg-red-300 text-white rounded-md mr-2 text-sm'> #{transaction_type}</div>
                    {
                        !bookmarkItems[id]
                        ? <img onClick={()=> addToBookmark(id)} src={assets.bookmark_before} alt="bookmark_before" className='w-[30px] cursor-pointer'/>
                        : <img onClick={()=> removeFromBookmark(id)} src={assets.bookmark_after} alt="bookmark_after" className='w-[30px] cursor-pointer'/>
                    }
                </div>
                <div className='mb-2'>
                    <p className='text-[15px] text-md'>{description}</p>
                </div>
                <div className='flex flex-wrap'>
                    {group.map((group_name, index) => (
                        <div className='px-2 py-1 bg-red-400 text-white rounded-full mr-2 text-sm overflow-auto mb-1' key={index}> #{group_name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InstaPostItem