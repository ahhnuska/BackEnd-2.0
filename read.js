//Get method =>Read(All)
const express = require('express');
const router = express.Router();
const user = require("./userSchema");
router.get("/read",async(req,res)=>{
    try{
    const data= await user.find()
    res.json(data)
    }
    catch(error){
      res.json(error.message)
    }
  })
  module.exports=router
  