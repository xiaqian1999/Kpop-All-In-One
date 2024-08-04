import React from 'react'
import classNames from 'classnames';

const ScammerPostItem = ({id, insta_url, username, date_of_post, user_type, platform_transaction, scammer_type, kpop_group, payment_info}) => {

    const scammerTypeColorClass = classNames({
        'text-red-400': scammer_type === 'Potential Scammer',
        'text-red-300': scammer_type === 'Bad Experience',
        'text-red-200': scammer_type === 'Selective Scammer',
        'text-gray-500': !['Potential Scammer', 'Bad Experience', 'Selective Scammer'].includes(scammer_type),
    })

    return (
        <div key={id} className='w-full m-auto rounded-xl shadow-lg text-[15px] text-md' style={{ transition: '0.3s', animation: 'fadeIn 1s' }}>
            <a href={insta_url} className='p-4'>
                <div className='mb-2 justify-between text-center p-2 bg-gray-200 rounded-t-xl'>
                    Username: <p className='font-bold'>{username}</p>
                </div>
                <div className='mb-2'>
                    <p className={`${scammerTypeColorClass}`}>{scammer_type}</p>
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