const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");
const { UserModel } = require("../model/User.model");

const userRouter= express.Router();



// below code can be used to register by users in user site---------------->
userRouter.post("/register",async(req,res)=>{
    const payload=req.body;
    const {password}= payload;
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.send({"msg":"somthing went wrong while hashing password"})
            }else{
                const user = new UserModel({...payload,password:hash});
                await user.save();
                res.send({"msg":"You have been registered successfully"})
            }
        })
    }catch(err){
        res.send({"msg":"cannot register","error":err.message})
    }
})


// below code can be used to login by user---------------->
userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,async(err,result)=>{
                if(result){
                    let token =jwt.sign({userID:user._id},"masai");
                    res.send({"msg":"Login Successfull","token":token})
                }else{
                    res.send({"msg":"Wrong Credentials"})
                }
            })
        }else{
            res.send({"msg":"User not found!"})
        }
        
    }catch(err){
        res.send({"msg":"cannot login","error":err.message})
    }
})


// below code can be used to get Leaderboard ----------------------->
userRouter.get("/",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const leaderboard = await UserModel.find({userID}).sort({score:1});
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