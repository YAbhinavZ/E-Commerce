import mongoose from "mongoose";
import { Product } from "./Product";
const orderSchema = new mongoose.Schema({
  items: [
    {
      quantity: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  method: {
    type: String,
    required: true,
  },
  paymentInfo: {
    type: String,
    
  },

  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  },
  phone : {
    type : Number,
    required : true
  },
  address : {
    type : String,
    required : true
  },
  paidAt :{
    type : String,
  },
  subTotal : {
    type : Number,
    required : true
  },
  createdAt : {
    type : Date,
    default : Date.now()
  }
  
});

export const Order = mongoose.model("Order", orderSchema);
