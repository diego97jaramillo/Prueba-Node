import { Sequelize } from "sequelize-typescript";
import { User } from "../Models/user";
import { Cart } from "../Models/cart";
import { Product } from "../Models/product";
import { Role } from "../Models/role";
import { ProductCart } from "../Models/productCart";
import { Permission } from "../Models/permissions";
import { Order } from "../Models/order";
import { Entity } from "../Models/entities";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "biei9nveuu1l3cmigfgr-mysql.services.clever-cloud.com",
    username: 'urqhihwsar2t7jxt',
    password: 'WHLFCIN5NJxEFABOQvqW',
    database: 'biei9nveuu1l3cmigfgr',
    models: [User, Cart, Product, Role, ProductCart, Permission, Order, Entity]
})

export default sequelize