import {Address} from "../models/Address.js"
import TryCatch from "../utils/TryCatch.js"
export const addAddress = TryCatch( async (req , res)=>{
    const {address, phone} = req.body;
    await Address.create({
        address,
        phone,
        user : req.user._id
    })
    res.status(201).json({
        message : "Address added",
        address,
        phone
    })
})

export const getAllAddress = TryCatch( async (req,res)=>{
    const allAddress = await Address.find({});
    res.json(allAddress);
})

export const getAddress = TryCatch( async(req,res)=>{
    const address = await Address.findById(req.params.id);
    res.json(address);
})

export const deleteAddress = TryCatch( async(req,res)=>{
  const address =    await Address.findOne({
        _id : req.params.id,
        user : req.user._id
     })

     await address.deleteOne(address);
     res.json({
        message: "address deleted"

     })
})