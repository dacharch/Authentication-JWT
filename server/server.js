const express = require('express')
const mongo = require('mongoose') 
const cors = require("cors")


const app = express()
const port = 3003

app.use(express.json())
app.use(cors())



mongo.connect('mongodb://localhost:27017/authentication')
.then(()=>{
  console.log("Mongo Db is Connected")
}).catch((err)=>{
   console.log('Connection error') ;
})

app.get('/', (req, res) => {
  res.send('I am running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})