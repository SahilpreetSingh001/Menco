import mongoose from "mongoose";

const mentorSchema  = new mongoose.Schema({
    name:String,
    email: {type: String, required: true},
    qualification: String,
    category: String,
    password: String,
    confirmPassword: String,
    description: String
    
    
},{timestamps: true})

export const Mentor = mongoose.model("Mentor",mentorSchema)