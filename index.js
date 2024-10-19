import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const dbInstance = await mongoose.connect("mongodb+srv://rohitkakraia94:Rohit123@cluster0.s8wtr.mongodb.net/manco")
        console.log("Database conected")
    } catch (error) {
        throw new Error(error)
    }
}

export {connectDb}