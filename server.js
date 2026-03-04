const express=require('express')
const app=express()

const userRoutes=require('./routes/taskRoutes.js')
const { default: mongoose } = require('mongoose')
const PORT=3000

app.use(express.json())

app.use('/tasks',userRoutes)


//moongo connection

mongoose.connect('your mongo db link').then(()=>{
  console.log("MongoDB connected successfully")

  
app.listen(PORT,()=>{
  console.log(`server is running successfully at http://localhost:${PORT}`)
})
}).catch((err)=>{
  console.log("Database connection failed",err.message)
})


