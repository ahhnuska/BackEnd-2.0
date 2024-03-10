const express = require("express");
const app = express();
const mongoose = require("mongoose");

const user = require("./userSchema");
app.use(express.json());
mongoose
  .connect("mongodb://localhost/dbConnection")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//Get MEthod
//user model name
//app middleware

const entry=new user({
        name:"Anuska",
        number:123
})
entry.save()
.then((entry)=>{
  console.log("User saved",entry)
})
.catch(()=>{
  console.log("Failed to save",error)
})



app.use(express.json());

app.listen(3000, () => {
  console.log("Listening to the port");
});
