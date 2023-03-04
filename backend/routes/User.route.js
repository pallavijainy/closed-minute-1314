const express = require("express");
const { UserModel } = require("../model/User.model");

const userRouter= express.Router();

// below code can be used to get Leaderboard ----------------------->
userRouter.get("/leaderboard",async(req,res)=>{
    const userID=req.body.userID;
    try{
        const cart = await CartProductsModel.find({userID}).populate("productID");
        res.send(cart)
    }catch(err){
        res.send({"msg":"somthing went wrong! cannot Get cart Products","error":err.message})
    }
})