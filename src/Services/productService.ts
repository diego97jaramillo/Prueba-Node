import { inject, injectable } from "tsyringe";
import ProductRepository from "../Repository/productRepository";
import { Product } from "../Models/product";

@injectable()
export default class ProductService {
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) { }

    async createProduct(product: Partial<Product>) {
        try {
            return await this.productRepository.create(product);
        } catch( err ) {
            console.error("esto esta malo: ", err);
            throw new Error("no esta en el servicio")
        }
    }

    async getAll() {
        try{ 
            return await this.productRepository.findAll()
        } catch (err) {
            console.error(err)
        }
    }

    async deleteOne(id:number) { 
        try {
            return this.productRepository.delete(id);
        } catch(err) {
            console.error(err)
        }
    }
}