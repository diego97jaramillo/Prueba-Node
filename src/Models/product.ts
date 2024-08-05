import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ProductCart } from "./productCart";

@Table({
    tableName: "products",
    timestamps: true
})

export class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.CHAR(200)
    })
    name!: string;

    @Column({
        type: DataType.FLOAT(10, 2)
    })
    price!: number;

    @Column({
        type: DataType.TEXT
    })
    description!: string;

    @Column({
        type: DataType.INTEGER
    })
    stock!: number;

    @HasMany(() => ProductCart)
    productCart!: ProductCart
}