import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user";
import { ProductCart } from "./productCart";

@Table({
    tableName: "orders",
    timestamps: true
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
        type: DataType.CHAR(200)
    })
    UserId!: string; 
    @BelongsTo(() => User)
    user!:User

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.CHAR(200)
    })
    ProductCartId!: string; 
    @BelongsTo(() => ProductCart)
    productCart!:ProductCart
}