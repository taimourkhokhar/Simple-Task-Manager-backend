const { Schema, default: mongoose } = require("mongoose");

const managerSchema= new Schema({
  title:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
)

const Manager = mongoose.model("Manager", managerSchema);

module.exports=Manager