import { Router } from "express";
import ProductController from "../Controllers/productController";
export const productRouter = Router();

productRouter.post("/", ProductController.createProduct)
productRouter.get("/", ProductController.getAllProducts)
productRouter.delete("/:id", ProductController.deleteProduct)