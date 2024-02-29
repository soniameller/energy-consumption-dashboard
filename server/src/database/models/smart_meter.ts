import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'smart_meter',
  modelName: 'SmartMeter',
})
export default class SmartMeter extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare timestamp: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare cpe: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare active_energy: number;
}
