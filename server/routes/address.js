import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addAddress, deleteAddress, getAddress, getAllAddress } from "../controller/address.js";
const router = express.Router();
router.post("/address/new", isAuth, addAddress);
router.get("/address/all",isAuth,getAllAddress);
router.get("/address/:id",isAuth,getAddress);
router.delete("/address/:id",isAuth,deleteAddress);

export default router;
