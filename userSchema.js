   const mongoose=require('mongoose')
const userSchemz=new mongoose.Schema(
    {   
        
        name:String,
        number:Number
    }
)
const usermodel=mongoose.model('testu',userSchemz)
module.exports=usermodel