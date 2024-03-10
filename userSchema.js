const mongoose=require('mongoose')
const userSchemz=new mongoose.Schema(
    {
        name:String,
        number:Number
    }
)
const usermodel=mongoose.model('user',userSchemz)
module.exports=usermodel