import postModel from "../models/postModel.js";
import fs from "fs"

// add post item function

const addPost = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const post = new postModel({
        insta_url:req.body.insta_url,
        transaction_type:req.body.transaction_type,
        kgroup_name:req.body.kgroup_name,
        description:req.body.description,
        image:image_filename
    })

    try {
        await post.save();
        res.json({success:true, message:"Post Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// all food list
const listPost = async (req, res) => {
    try {
        //using this model, we can fetch all the post item
        const posts = await postModel.find({});
        res.json({success:true, data:posts})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

export {addPost, listPost}