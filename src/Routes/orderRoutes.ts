import { Router } from "express";
import OrderController from "../Controllers/orderController";
export const orderRouter = Router();

orderRouter.post("/", OrderController.createOrder)
