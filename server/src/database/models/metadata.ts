import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'metadata',
  modelName: 'Metadata',
})
export default class Metadata extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cpe: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare lat: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare lon: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare totalarea: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare fulladdress: string;
}