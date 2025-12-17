import mongoose from "mongoose";
const connectDB =  async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"ECommerce2025"
        });
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;