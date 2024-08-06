import { injectable } from "tsyringe";
import { ProductCart } from "../Models/productCart";



@injectable()
export default class ProductCartRepository {

    async create(productCart: Partial<ProductCart>) {
        try {
            return await ProductCart.create(productCart)
        } catch (err) {
            console.error(err)
        }
    }

    async findAll() {
        try {
            return await ProductCart.findAll()
        } catch (err) {
            console.error(err)
        }
    }

    async delete(id: number) { 
        try {
            return ProductCart.destroy({
                where: { id },
              });
        } catch (err) { 
            console.error(err)
        }
    }
}