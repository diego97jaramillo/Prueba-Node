import { Router } from "express";
import { cartRouter, orderRouter, productCartRouter, productRouter, userRouter } from "./index";
export const router = Router();

router.use("/users", userRouter)
router.use("/products", productRouter)
router.use("/productCart", productCartRouter)
router.use("/orders", orderRouter)
router.use("/cart", cartRouter)
