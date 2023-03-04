const express=require("express");
const cors = require("cors");
require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());


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
    console.log(`server is running atr port ${process.env.port}`);
})