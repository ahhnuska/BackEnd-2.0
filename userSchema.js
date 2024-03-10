   const mongoose=require('mongoose')
const userSchemz=new mongoose.Schema(
    {   
        id:Number,
        name:String,
        number:Number
    }
)
const usermodel=mongoose.model('testu',userSchemz)
module.exports=usermodel