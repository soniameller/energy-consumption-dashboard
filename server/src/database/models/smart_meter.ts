import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Metadata from './metadata';

@Table({
  tableName: 'smart_meter',
  modelName: 'SmartMeter',
  timestamps: false,
})
export default class SmartMeter extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare timestamp: Date;

  @ForeignKey(() => Metadata)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cpe: string;

  @BelongsTo(() => Metadata)
  metadata: Metadata;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare active_energy: number;
}
