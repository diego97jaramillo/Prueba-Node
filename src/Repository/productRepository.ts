import { injectable } from "tsyringe";
import { Product } from "../Models/product";


@injectable()
export default class ProductRepository {

    async create(product: Partial<Product>) {
        try {
            return await Product.create(product)
        } catch (err) {
            console.error(err)
        }
    }

    async findAll() {
        try {
            return await Product.findAll()
        } catch (err) {
            console.error(err)
        }
    }

    async delete(id: number) { 
        try {
            return Product.destroy({
                where: { id },
              });
        } catch (err) { 
            console.error(err)
        }
    }
}