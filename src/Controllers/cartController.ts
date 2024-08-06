import { Request, Response } from "express";
import { container } from "tsyringe";
import CartService from "../Services/cartService";


export default class CartController {
    static async createCart(req: Request, res: Response ) {
        try {
            const cartService = container.resolve(CartService);
            let { userId} = req.body
            userId = parseInt(userId) 
            const userCreated = await cartService.createCart(userId);
            res.status(200).json({userCreated})
        } catch(err) {
            console.error(err)
            res.status(400).json({message: err})
        }
    }
}