import { container } from "tsyringe";
import UserRepository from "../Repository/userRepository";
import UserService from "../Services/userService";
import ProductService from "../Services/productService";
import ProductRepository from "../Repository/productRepository";
import CartService from "../Services/cartService";
import CartRepository from "../Repository/cartRepository";
import ProductCartService from "../Services/productCartService";
import ProductCartRepository from "../Repository/productCartRepository";

container.registerSingleton<UserRepository>(UserRepository)
container.registerSingleton<UserService>(UserService)

container.registerSingleton<ProductService>(ProductService);
container.registerSingleton<ProductRepository>(ProductRepository);

container.registerSingleton<ProductCartService>(ProductCartService);
container.registerSingleton<ProductCartRepository>(ProductCartRepository);

container.registerSingleton<CartService>(CartService);
container.registerSingleton<CartRepository>(CartRepository);
