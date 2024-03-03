const express = require('express')
const mongo = require('mongoose') 
const cors = require("cors")
const authRouter = require('./routes/authRoute') 

const port = 3003
const app = express()

//  Middle wares

app.use(express.json())
app.use(cors())

// Route

app.use('/api/auth',authRouter) 

// Mongo Db connection

mongo.connect('mongodb://localhost:27017/authentication')
.then(()=>{
  console.log("Mongo Db is Connected")
}).catch((err)=>{
   console.log('Connection error') ;
})


// global Error Handler 

app.use((err,req,res,next) =>{
   err.statusCode = err.statusCode || 500 ;
   err.status = err.status || 'error' 

   res.status(err.statusCode).json({
       status :err.status,
       message:err.message,
   })
})

app.get('/', (req, res) => {
  res.send('I am running')
})

// Here, server will be running

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})