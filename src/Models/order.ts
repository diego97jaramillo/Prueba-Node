import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user";
import { ProductCart } from "./productCart";

@Table({
    tableName: "orders",
    timestamps: false
})

export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.FLOAT(10,2)
    })
    total!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    UserId!: string; 
    @BelongsTo(() => User)
    user!:User

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER
    })
    ProductCartId!: string; 
    @BelongsTo(() => ProductCart)
    productCart!:ProductCart
}