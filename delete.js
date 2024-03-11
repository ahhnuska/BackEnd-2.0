const express = require('express');
const router = express.Router();
const user = require("./userSchema");
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
    const result= await user.findOneAndDelete({_id:id})
      if (!result) {
          return res.json({ error: 'User not found' });
      }
      res.json("Deleted").end();
  
    }
    catch(error){
      res.json({error:error.message})
    }
  })
  module.exports=router
  