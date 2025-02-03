import mongoose from "mongoose";

const userSchema = mongoose.Schema({

   fullname:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true,
    
    unique:true
   },
   password:{
    type:String,
    require:true
    
   },
   confirmPassword:{
    type:String
   }
},{timestamps:true}) //Two fields created at and updated at

const User= mongoose.model("User",userSchema);
export default User;