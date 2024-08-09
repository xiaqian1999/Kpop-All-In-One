import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    insta_url: {type: String, required:true},
    transaction_type: {type: String, required: true},
    kgroup_name: {type: String, required: true},
    image: {type:String, required: true},
    description: {type:String, required: true}
})

const postModel = mongoose.models.post || mongoose.model("post", postSchema)

export default postModel;