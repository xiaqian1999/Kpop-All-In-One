import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://[token_user_password]/kpop-all-in-one').then(() => console.log("DB Connected"));
}