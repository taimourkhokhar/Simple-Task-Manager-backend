const express=require('express')
const {createTask,deleteTask,getTask}=require('../controller/taskController.js')
const router=express.Router()


router.get('/',getTask)
router.post('/',createTask)
router.delete('/:id',deleteTask)


module.exports=router