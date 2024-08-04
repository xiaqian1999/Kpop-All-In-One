import React from 'react'

const ScammerPostItem = ({id, insta_url, username, date_of_post, user_type, platform_transaction, scammer_type, kpop_group, payment_info}) => {

    // const scammerTypeColorClass = (type) => {
    //     swit
    // }

    return (
        <div key={id} className='w-full m-auto rounded-xl shadow-lg text-[15px] text-md' style={{ transition: '0.3s', animation: 'fadeIn 1s' }}>
            <a href={insta_url} className='p-4'>
                <div className='mb-2 justify-between text-center p-2 bg-gray-200 rounded-t-xl'>
                    Username: <p className='font-bold'>{username}</p>
                </div>
                <div className='mb-2'>
                    <p>{scammer_type}</p>
                    <p>{user_type}</p>
                    <p>{date_of_post}</p>
                    <p>{payment_info}</p>
                    <div className='px-2 py-1 bg-red-300 text-white rounded-md mr-2 text-sm'> #{platform_transaction}</div>
                </div>
                <div className='flex flex-wrap'>
                    {kpop_group.map((group_name, index) => (
                        <div className='px-2 py-1 bg-red-400 text-white rounded-full mr-2 text-sm overflow-auto mb-1' key={index}> #{group_name}</div>
                    ))}
                </div>
            </a>
        </div>
    )
}

export default ScammerPostItem