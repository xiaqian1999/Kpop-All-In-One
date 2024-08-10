import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const ListPost = ({url}) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/post/list`);

        if (response.data.success) {
            setList(response.data.data);
        }else{
            toast.error("Error")
        }
    }

    const removePost = async (postId) => {
        const response = await axios.post(`${url}/api/post/remove`, {id:postId});
        //update list
        await fetchList();

        if (response.data.success) {
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className='flex flex-col items-center g-4 p-4 mx-auto lg:w-[600px]'>
            <p>All Transaction Post</p>   
            <div className="list-table">
                <div className="grid grid-cols-5 items-center g-4 p-4 border border-gray-500 bg-gray-400">
                    <b>Image</b>
                    <b>Transaction Type</b>
                    <b>Kpop Group</b>
                    <b>Instagram URL</b>
                    <b>Action</b>
                </div>
                {list.map((item, index)=>{
                    return (
                        <div key={index} className='grid grid-cols-5 items-center g-4 p-4 border border-gray-500'>
                            <img src={`${url}/images/`+item.image} alt="" className='w-[50px]'/>
                            <p>{item.transaction_type}</p>
                            <p>{item.kgroup_name}</p>
                            <a href={item.insta_url} target="_blank">Click to View</a>
                            <p onClick={() => removePost(item._id)}>Remove</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListPost