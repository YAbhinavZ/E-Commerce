import express, { Router } from "express"
import { addToCart, fetchCart, removeFromCart, updateCart } from "../controller/cart.js";
import { isAuth } from "../middlewares/isAuth.js";



const router = express.Router();
router.post("/cart/add",isAuth,addToCart)
router.get("/cart/remove/:id",isAuth,removeFromCart);
router.put("/cart/update",isAuth,updateCart);
router.get("/cart/all",isAuth,fetchCart);
export default router;