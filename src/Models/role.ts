import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user";

@Table({
    tableName: "roles",
    timestamps: true
})

export class Role extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.CHAR(200)
    })
    name!: string; //se manejan 2 nobres admin/client

    @HasMany(() => User)
    user!: User[];
}