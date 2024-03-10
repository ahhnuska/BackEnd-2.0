const express = require("express");
const app = express();
const mongoose = require("mongoose");

const user = require("./userSchema");
app.use(express.json());
mongoose
  .connect("mongodb://localhost/db")
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
app.post("/create", (req, res) => {
  const entry = new user(req.body)
  entry.save()
    .then((entry) => {
      res.json(entry)
    })
    .catch((error) => {
      res.json(error.message)
    })
})
//Get method =>Read(All)
app.get("/read",(req,res)=>{
  user.find()
  .then((data)=>{
    res.json(data)
  })
  .catch((error)=>{
    res.json(error.message)
  })
})

//Update particular thing
app.put("/update/:name",(req,res)=>{
  const {name}=req.params
  
  user.findOneAndUpdate({ name: name }, req.body, { new: true })
    .then((result)=>{
      if (!result) {
        return res.json({ error: 'User not found' })
      }
      res.json(result);
    })
    .catch((error)=>{
      res.json({ error: error.message })
    })
})

app.delete("/delete/:name",(req,res)=>{
  const {name}=req.params
  user.findOneAndDelete({name:name})
  .then((result) => {
    if (!result) {
        return res.json({ error: 'User not found' });
    }
    res.json("Deleted").end();
})
  .catch((error)=>{
    res.json({error:error.messsage})
  })
})






app.use(express.json());

app.listen(3000, () => {
  console.log("Listening to the port");
});
