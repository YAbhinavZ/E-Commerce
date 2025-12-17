import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
   address :{
    type : "String",
    required : true
   },
   phone_no :{
    type : Number ,
    require : true
   },
   user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
   },
});

export const Address = mongoose.model('Address',addressSchema);

// addresss -> in db