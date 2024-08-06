import { Request, Response } from "express";
import { container } from "tsyringe";
import ProductCartService from "../Services/productCartService";


export default class ProductCarController {
    static async createProduct(req: Request, res: Response ) {
        try {
            let { cartId, productId, quantity} = req.body
            const productCartService = container.resolve(ProductCartService);
            const productCartCreated = await productCartService.createProductCart({cartId, productId, quantity});
            res.status(200).json({status: 200, message: productCartCreated})
        } catch(err) {
            console.error(err)
            res.status(400).json({message: err})
        }
    }

    static async getAllProductCarts(_:Request, res:Response) { 
        try { 
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.getAll()
            res.status(200).json({productCarts: productCarts})
        } catch(err) {
            console.error(err)
        }
    }

    static async deleteProductCart( req: Request, res: Response ) {
        try { 
            let id = req.params.id
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.deleteOne(parseInt(id))
            res.status(200).json({products: productCarts})
        } catch(err) {
            console.error(err)
        }
    }
}