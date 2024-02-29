import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import SmartMeter from './smart_meter';

@Table({
  tableName: 'metadata',
  modelName: 'Metadata',
  timestamps: false,
})
export default class Metadata extends Model {
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
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

  @HasMany(() => SmartMeter)
  smartMeter: SmartMeter[];
}
