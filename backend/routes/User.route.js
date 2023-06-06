const express = require("express");
const { UserModel } = require("../model/User.model");

const userRouter= express.Router();



// below code can be used to get logined user ----------------------->
userRouter.get("/",async(req,res)=>{
    const userID=req.body.userID
    try{
        const user = await UserModel.findOne({_id:userID});
        res.send(user);
    }catch(err){
        res.send({"msg":"cannot get user","error":err.message})
    }
})

// below code can be used to get Leaderboard ----------------------->
userRouter.get("/leaderboard",async(req,res)=>{
    try{
        const leaderboard = await UserModel.find().sort({score:-1});
        res.send(leaderboard);
    }catch(err){
        res.send({"msg":"cannot Get Leaderboard","error":err.message})
    }
})

// below code can be used to update leaderboard--------------->
userRouter.patch("/update",async(req,res)=>{
    const ID=req.body.userID
    const payload=req.body;
    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload);
        res.send({"msg":"Data has been updated"})
    }catch(err){
        res.send({"msg":"cannot update","error":err.message})
    }
})

module.exports={userRouter};