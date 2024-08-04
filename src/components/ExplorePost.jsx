import React from 'react';
import { transaction_option } from '../assets/assets';

const ExplorePost = ({transactionType,  setTransactionType}) => {
  return (
    <div id="transaction-section" className='flex flex-col gap-[20px]'>
      <div className='flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll explore-menu-list'>
        {transaction_option.map((item, index) => {
          return (
            <div key={index} onClick={() => setTransactionType(prev=>prev===item.transaction_name ? "All" : item.transaction_name)}>
              <img src={item.transaction_image} alt={item.transaction_name} className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full duration-300 ${transactionType===item.transaction_name ? "border-2 border-red-200 p-1" : ""}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExplorePost