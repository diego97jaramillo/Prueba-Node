import { Router } from "express";
import CartController from "../Controllers/cartController";
export const cartRouter = Router();

cartRouter.post("/", CartController.createCart)

