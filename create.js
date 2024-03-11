//Post method
const express = require('express');
const router = express.Router();
const user = require("./userSchema");
router.post("/create", async(req, res) => {
    try{
    const entry = new user(req.body)
    const result=await entry.save()
    res.json(result)
    }
    catch(error){
    
        res.json({error:error.message})
      }
  })
  module.exports=router