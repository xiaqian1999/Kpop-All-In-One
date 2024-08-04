import React from 'react'
import classNames from 'classnames';

const ScammerPostItem = ({id, insta_url, username, date_of_post, user_type, platform_transaction, scammer_type, kpop_group, payment_info}) => {

    const scammerTypeColorClass = classNames({
        'bg-red-400': scammer_type === 'Potential Scammer',
        'bg-red-300': scammer_type === 'Bad Experience',
        'bg-red-200': scammer_type === 'Selective Scammer',
        'bg-gray-500': !['Potential Scammer', 'Bad Experience', 'Selective Scammer'].includes(scammer_type),
    })

    return (
        <div key={id} className='w-full m-auto rounded-xl shadow-lg text-[15px] text-md' style={{ transition: '0.3s', animation: 'fadeIn 1s' }}>
            <a href={insta_url}>
                <div className='mb-2 justify-between text-center py-4 bg-red-300 text-white border-b-slate-100 rounded-t-xl'>
                    Username: <span className='font-bold'>{username}</span>
                    <p>{payment_info}</p>
                </div>
                <div className='p-2'>
                    <p className={`${scammerTypeColorClass} px-2 py-1 text-white rounded-md mr-2 text-sm`}>{scammer_type}</p>
                    <div className='flex flex-wrap my-2'>
                        <span className='px-2 py-1 rounded-md mr-2 text-sm bg-gray-300'>#{user_type}</span>
                        <span className='px-2 py-1 rounded-md mr-2 text-sm bg-gray-300'>#{platform_transaction}</span>
                    </div>
                    <div className='flex flex-wrap py-4'>
                        {kpop_group.map((group_name, index) => (
                            <div className='px-2 py-1 bg-gray-400 text-white rounded-full mr-2 text-sm overflow-auto' key={index}> #{group_name}</div>
                        ))}
                    </div>
                </div>
                
            </a>
        </div>
    )
}

export default ScammerPostItem