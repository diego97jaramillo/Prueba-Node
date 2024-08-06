import { injectable } from "tsyringe";
import { Cart } from "../Models/cart";



@injectable()
export default class CartRepository {

    async create(userIdFK: number) {
        try {
            return await Cart.create({userId: userIdFK})
        } catch (err) {
            console.error(err)
        }
    }
}