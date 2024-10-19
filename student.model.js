import mongoose from "mongoose";

const studentSchema  = new mongoose.Schema({
    name:String,
    email: {type: String, required: true},
    password: String,
    confirmPassword: String

    
},{timestamps: true})

export const Student = mongoose.model("Student",studentSchema)