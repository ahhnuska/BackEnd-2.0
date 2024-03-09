const mongoose=require('mongoose')
const user=require('./userSchema')
mongoose.connect("mongodb://localhost/dbConnection")
.then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
const entry=new user({
    name:"Anuska",
    number:123
})
entry.save().then(()=>{
    console.log("user saved",entry)
})



