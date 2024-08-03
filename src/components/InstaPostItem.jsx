import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets';

const InstaPostItem = ({id, instaUrl, image, description, group, transaction_type}) => {

    const { bookmarkItems, addToBookmark, removeFromBookmark } = useContext(StoreContext);

    return (
        <div className='w-full m-auto rounded-xl shadow-lg' style={{ transition: '0.3s', animation: 'fadeIn 1s' }}>
            <div className='img-container'>
                <img src={image} alt={image} className='rounded-t-xl w-full'/>
            </div>
            <div className='item-info p-4'>
                <div className='mb-2'>
                    <span className='px-2 py-1 bg-red-300 text-white rounded-full mr-2 text-sm overflow-auto'> #{transaction_type}</span>
                    <span className='px-2 py-1 bg-red-400 text-white rounded-full mr-2 text-sm overflow-auto'> #{group}</span>
                </div>
                <div>
                    <p className='text-[15px] text-md'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default InstaPostItem