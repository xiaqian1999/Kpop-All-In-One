import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import postRouter from "./routers/postRoute.js"


// app config
const app = express()
const port = 4000

// middleware
// This express, using this middleware, whenever we get the request from frontend to backend
app.use(express.json())
//access the backend from any frontend
app.use(cors())

// DB connection
connectDB();

//API endpoints
app.use("/api/post", postRouter)
app.use("/images", express.static('uploads'))

// http method, liquid the data from server, like get(), post(), update(), delete()
app.get("/", (req, res)=> {
    res.send("API Working")
})

//To run the express server
app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`)
})