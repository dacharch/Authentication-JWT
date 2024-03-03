const User = require('../models/userModel') ;
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken') ;
const createError = require('../utils/appError') ;



 exports.signup = async (req,res,next)=>{
    try{
         const user = await User.findOne({email:req.body.email}) ;
         if(user){
             return next( new createError('User already exists',400)) ;
         }
         const hashedPassword  = await bcrypt.hash(req.body.password,12) ;
         const newUser = await User.create({
            ...req.body,
            password:hashedPassword ,
         })

         // JWT token 
         const token = jwt.sign({_id:newUser._id}, "secretkey123",{
             expiresIn: '90d',
         });
         res.status(201).json({
             status :"success",
             message : "User registered successfully",
             token,
         }) ;
    }catch(error){}
}

exports.login = async (req,res,next)=>{
     try{
        const {email,password} = req.body ;
        const user = await User.findOne({email}) ;
        
        if(!user){
             return  next( new createError("User not Found",404)) ;
        }

        const isPassword = await bcrypt.compare( password,user.password) ;
        if(!isPassword){
            return next(new createError("Incorrect email or Password"),401) ;
        }

        const token = jwt.sign({_id: user._id}, 'secretkey123',{
            expiresIn:'90d',
        })

        res.status(200).json({
            status:"successfully",
            token,
            message : 'Logged in Successfully',
            user:{
                _id: user._id,
                name: user.name,
                email:user.email ,
                role:user.role,
            }
        });

     }catch(error){
        next(error)
     }
}



