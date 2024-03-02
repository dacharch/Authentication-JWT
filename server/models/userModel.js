import mongoose from 'mongoose';
const { Schema } = mongoose;

const  userSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
         type:String,
         unique:true,
         required:true,
    },
    role:{
        type:String,
        default:'user'
    },
    password:{
        type:String,
        required:true,
    },
})

const User = mongoose.model('User',userSchema) ;
module.exports = User ;
