import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user";
import { ProductCart } from "./productCart";

@Table({
    tableName: "carts",
    timestamps: true
})

export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId!: string; //se manejan 2 nobres admin/client
    @BelongsTo(() => User)
    user!:User

    @HasMany(() => ProductCart)
    productCart!: ProductCart
}