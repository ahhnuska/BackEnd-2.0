//Update particular thing
const express = require('express');
const router = express.Router();
const user = require("./userSchema");
router.put("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
    const result = await user.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!result) {
          return res.json({ error: 'User not found' })
        }
        res.json(result);
      }
      catch(error){
        res.json({ error: error.message })
      }
  })
  module.exports=router