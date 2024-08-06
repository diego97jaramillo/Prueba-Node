import { Router } from "express";
import ProductCarController from "../Controllers/productCartController";
export const productCartRouter = Router();

productCartRouter.post("/", ProductCarController.createProduct)
productCartRouter.get("/", ProductCarController.getAllProductCarts)
productCartRouter.delete("/:id", ProductCarController.deleteProductCart)