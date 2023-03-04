const express=require("express");
const cors = require("cors");
require('dotenv').config();
const {userRouter}= require("./routes/User.route");
const { auth } = require("./middleware/auth");
const {connecion}= require("./db")

const app= express();
app.use(express.json());
app.use(cors());
app.use("/user",auth)
app.use("/user",userRouter);


// Homepage---------------->
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


// server will run at port 8080----------------------------------------->
app.listen(process.env.port,async()=>{
    try{
        await connecion;
        console.log("connected to DB")
    }catch(err){
        console.log("server error")
    }
    console.log(`server is running at port ${process.env.port}`);
})