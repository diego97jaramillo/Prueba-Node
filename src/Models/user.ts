import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./role";
import { Cart} from "./cart";
import { Order } from "./order";

@Table({
    tableName: "users",
    timestamps: true
})

export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.CHAR(200)
    })
    email!: string;

    @Column({
        type: DataType.CHAR(200)
    })
    password!: string;

    @Column({
        type: DataType.INTEGER
    })
    stock!: number;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    roleId!: number

    @BelongsTo(() => Role)
    role!: Role;

    @HasOne(() => Cart)
    cart!: Cart
    
    @HasMany(() => Order)
    order!: Order
}