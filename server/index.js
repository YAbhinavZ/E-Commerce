import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cloudinary from "cloudinary"


//importing router
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js"
import cartRoutes from "./routes/cart.js"

dotenv.config();
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
})
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;


// Connect to MongoDB first

connectDB();

app.use("/api", userRoutes);
app.use("/api",productRoutes);
app.use("/api",cartRoutes)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
