import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";

// const app = express();
dotenv.config();
// middleware to parse the data
app.use(express.json());

app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("database connected");
}
catch(error){
    console.log(error);
}

app.use("/api/user", UserRoute);
app.use("/api/message",messageRoute);


server.listen(PORT, ()=>{
    console.log(`server is listening at PORT ${PORT}`);
})