import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const AddPost = () => {
    const url = "http://localhost:4000";
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        insta_url: "",
        transaction_type: "",
        // transaction_type: "WTS", this is if you want to have as default
        kgroup_name: "",
        description: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("insta_url", data.insta_url)
        formData.append("transaction_type", data.transaction_type)
        formData.append("kgroup_name", data.kgroup_name)
        formData.append("description", data.description)
        formData.append("image", image)

        const response = await axios.post(`${url}/api/post/add`, formData);
        if (response.data.success){
            // if success submit the form, then reset the data
            setData({
                insta_url: "",
                transaction_type: "",
                kgroup_name: "",
                description: ""
            })

            setImage(false);
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

  return (
    <div className='w-[70%] ml-5 mt-5 text-gray-600'>
        <form className='flex flex-col gap-4 items-center' onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-4">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[120px]' />
                </label>

                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>

            <div className="flex flex-col w-[280px]">
                <p>Instagram URL</p>
                <input onChange={onChangeHandler} value={data.insta_url} type="url" name='insta_url' placeholder='https://www.instagram.com/...' className='p-3 border border-gray-400 rounded-md' required />
            </div>

            <div className="flex flex-col w-[280px]">
                <p>Transaction Type</p>
                <select onChange={onChangeHandler} name="transaction_type" className='p-3 border border-gray-400 rounded-md' required>
                    <option value="" selected disabled>Select Transaction Type</option>
                    <option value="WTS">WTS</option>
                    <option value="WTT">WTT</option>
                    <option value="WTB">WTB</option>
                    <option value="GO">GO</option>
                </select>
            </div>

            <div className="flex flex-col w-[280px]" >
                <p>Kpop Group</p>
                <select onChange={onChangeHandler} name="kgroup_name" className='p-3 border border-gray-400 rounded-md' required>
                    <option value="" selected disabled>Select Kpop Group</option>
                    <option value="Seventeen">Seventeen</option>
                    <option value="Astro">Astro</option>
                    <option value="Twice">Twice</option>
                    <option value="Ive">Ive</option>
                    <option value="Stayc">Stayc</option>
                </select>
            </div>

            <div className="flex flex-col w-[280px]">
                <p>Description</p>
                <textarea onChange={onChangeHandler} value={data.description} type="text" name='description' placeholder='Write content here' className='p-3 border border-gray-400 rounded-md'  required></textarea>
            </div>

            <button type="submit" className='bg-red-300 hover:bg-red-400 cursor-pointer px-4 py-2 rounded-md w-[280px]'>Add</button>
        </form>
    </div>
  )
}

export default AddPost