const express=require('express')
const app=express()
const cors=require('cors')
const userRoutes=require('./routes/taskRoutes.js')
const { default: mongoose } = require('mongoose')
const PORT=5000

app.use(express.json())
app.use(cors())
app.use('/tasks',userRoutes)


//moongo connection

mongoose.connect('mongodb+srv://taimourkhokhar:khokhar123@cluster0.oy289hd.mongodb.net/?appName=Cluster0').then(()=>{
  console.log("MongoDB connected successfully")

  
app.listen(PORT,()=>{
  console.log(`server is running successfully at http://localhost:${PORT}`)
})
}).catch((err)=>{
  console.log("Database connection failed",err.message)
})


