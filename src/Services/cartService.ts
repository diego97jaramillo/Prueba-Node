import { inject, injectable } from "tsyringe";
import { Product } from "../Models/product";
import CartRepository from "../Repository/cartRepository";
import { Cart } from "../Models/cart";

@injectable()
export default class CartService {
    constructor(@inject(CartRepository) private cartRepository: CartRepository) { }

    async createCart(userId: number): Promise<Cart | undefined> {
        try {
            return await this.cartRepository.create(userId);
        } catch( err ) {
            console.error("esto esta malo: ", err);
            throw new Error("no esta en el servicio")
        }
    }
}