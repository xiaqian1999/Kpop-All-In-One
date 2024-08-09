import express from "express";
import { addPost, listPost } from "../controllers/postController.js";
import multer from "multer";

const postRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=> {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

postRouter.post("/add", upload.single("image"),addPost)
postRouter.get("/list", listPost)


export default postRouter;