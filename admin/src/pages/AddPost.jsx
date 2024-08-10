import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const AddPost = () => {
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

    useEffect(() => {
        console.log(data)
    }, [data])

  return (
    <div className='w-[70%] ml-5 mt-5 text-gray-600'>
        <form className='flex flex-col gap-4 items-center'>
            <div className="flex flex-col gap-4">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[120px]' />
                </label>

                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>

            <div className="flex flex-col w-[280px]">
                <p>Instagram URL</p>
                <input onChange={onChangeHandler} value={data.insta_url} type="url" name='insta_url' placeholder='Type here' className='p-3 border border-gray-400 rounded-md' />
            </div>

            <div className="flex flex-col w-[280px]">
                <p>Transaction Type</p>
                <select onChange={onChangeHandler} name="transaction_type" className='p-3 border border-gray-400 rounded-md' >
                    <option value="WTS">WTS</option>
                    <option value="WTT">WTT</option>
                    <option value="WTB">WTB</option>
                    <option value="GO">GO</option>
                </select>
            </div>

            <div className="flex flex-col w-[280px]" >
                <p>Kpop Group</p>
                <select onChange={onChangeHandler} name="kgroup_name" className='p-3 border border-gray-400 rounded-md'>
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