import { inject, injectable } from "tsyringe";
import { ProductCart } from "../Models/productCart";
import ProductCartRepository from "../Repository/productCartRepository";



@injectable()
export default class ProductCartService {
    constructor(@inject(ProductCartRepository) private productCartRepository: ProductCartRepository) { }

    async createProductCart(product: Partial<ProductCart>) {
        try {
            return await this.productCartRepository.create(product);
        } catch( err ) {
            console.error("esto esta malo: ", err);
            throw new Error("no esta en el servicio")
        }
    }

    async getAll() {
        try{ 
            return await this.productCartRepository.findAll()
        } catch (err) {
            console.error(err)
        }
    }

    async deleteOne(id:number) { 
        try {
            return this.productCartRepository.delete(id);
        } catch(err) {
            console.error(err)
        }
    }
}
