import express from "express"
import mongoose from "mongoose"
import dns from "node:dns/promises";
import studentRouter from "./routes/studentRouter.js";
import userRouter from "./routes/userRouter.js";
dns.setServers(["1.1.1.1"]);

const mongodbURI = "mongodb+srv://admin:1234@cluster0.wnkxql3.mongodb.net/?appName=Cluster0"

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("connected to mongodb cluster")
    }
)

let app = express()

app.use(express.json())

app.use("/students",studentRouter) 
app.use("/users",userRouter)


app.listen(5000,()=>{
        console.log("server is running...")
    }
)