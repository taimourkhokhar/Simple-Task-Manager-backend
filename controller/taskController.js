const Manager = require("../model/task.js")


const createTask=async(req,res)=>{
try {
  
const{title,description}=req.body
if(!title || !description){
  return res.status(400).json({message:"All fields are"})
}

const newTask=await Manager.create({
  title,
  description
})

res.status(201).json({
  message:"Task created Successfully"
})



} catch (error) {
  res.status(500).json({message:error.message})
}





}



const getTask=async(req,res)=>{
  try {
    
const tasks=await Manager.find()
res.status(200).json(tasks)

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

const deleteTask=async(req,res)=>{
  try {
    const{id}=req.params


    const deleteTask=await Manager.findByIdAndDelete(id)

    if(!deleteTask){
      return res.status(404).json({message:"TAsk not found"})
    }
    else{
      res.status(200).json({message:"Task deleted Successfully"})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}




module.exports={
  createTask,
  getTask,
  deleteTask
}