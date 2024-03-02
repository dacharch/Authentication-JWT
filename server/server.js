const express = require('express')  ;
const mongoose = require('mongoose') ;



const app = express() ;
app.use(express.json()) ;

app.get("/",(req,res)=>{
    res.send("Server is Running") ;
})

app.listen('3000')

