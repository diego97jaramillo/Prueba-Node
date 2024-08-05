import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Product } from "./product";
import { Cart } from "./cart";
import { Order } from "./order";

@Table({
    tableName: "productCarts",
    timestamps: true
})

export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.INTEGER
    })
    quantity!: number

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.CHAR(200)
    })
    cartId!: string; //se manejan 2 nobres admin/client
    @BelongsTo(() => Cart)
    cart!:Cart

    @ForeignKey(() => Product)
    @Column({
        type: DataType.CHAR(200)
    })
    productId!: string; //se manejan 2 nobres admin/client
    @BelongsTo(() => Product)
    product!:Product

    @HasMany(() => Order)
    order!: Order

}