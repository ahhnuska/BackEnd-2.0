const express = require("express");
const app = express();
const mongoose = require("mongoose");

const user = require("./userSchema");
app.use(express.json());
mongoose
  .connect("mongodb://localhost/database")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//Get MEthod
//user model name
//app middleware

//Post method
app.post("/create", async(req, res) => {
  try{
  const entry = new user(req.body)
  const result=await entry.save()
  res.json(result)
  }
  catch(error){
  
      res.json({error:error.message})
    }
})
//Get method =>Read(All)
app.get("/read",async(req,res)=>{
  try{
  const data= await user.find()
  res.json(data)
  }
  catch(error){
    res.json(error.message)
  }
})

//Update particular thing
app.put("/update/:id",async(req,res)=>{
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

app.delete("/delete/:id",async(req,res)=>{
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






app.use(express.json())

app.listen(3000, () => {
  console.log("Listening to the port")
})
