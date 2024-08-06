import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../Services/userService";
import { error } from "console";
import ProductService from "../Services/productService";


export default class ProductController {
    static async createProduct(req: Request, res: Response ) {
        try {
            let {name, price, description, stock} = req.body
            const productService = container.resolve(ProductService);
            const productCreated = await productService.createProduct({name, price, description, stock});
            res.status(200).json({productCreated})
        } catch(err) {
            console.error(err)
            res.status(400).json({message: err})
        }
    }

    static async getAllProducts(_:Request, res:Response) { 
        try { 
            const productService = container.resolve(ProductService);
            const products = await productService.getAll()
            res.status(200).json({products: products})
        } catch(err) {
            console.error(err)
        }
    }

    static async deleteProduct( req: Request, res: Response ) {
        try { 
            let id = req.params.id
            const productService = container.resolve(ProductService);
            const product = await productService.deleteOne(parseInt(id))
            res.status(200).json({products: product})
        } catch(err) {
            console.error(err)
        }
    }
}