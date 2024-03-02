const User = require('../models/userModel') ;


let singup = async (req,res,next)=>{
    try{
         const user = await User.findOne({email:req.body.email}) ;
         if(user){
             return next()
         }
    }catch(error){}
}

let login = async (req,res,next)=>{
     
}


