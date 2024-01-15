import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
    
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: { 
            type: String, 
            enum: ['admin', 'member'], 
            default: 'member' 
        },
    }
     
);

module.exports = mongoose.model("User", userSchema)