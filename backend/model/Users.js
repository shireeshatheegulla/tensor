const mongoose=require('mongoose');

const user= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    gender:{
        type:String
       
    }
})
module.exports=mongoose.model('Users',user);
