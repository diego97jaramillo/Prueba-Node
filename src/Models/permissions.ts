import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./role";
import { Entity } from "./entities";

@Table({
    tableName: "permissions",
    timestamps: false
})

export class Permission extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.BOOLEAN
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN
    })
    canGet!: boolean;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER
    })
    RoleId!: string; 
    @BelongsTo(() => Role)
    Role!:Role
    
    @ForeignKey(() => Entity)
    @Column({
        type: DataType.INTEGER
    })
    EntityId!: string; 
    @BelongsTo(() => Entity)
    Entity!:Entity
}