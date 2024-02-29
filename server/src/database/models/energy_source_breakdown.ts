import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'energy_source_breakdown',
  modelName: 'EnergySourceBreakdown',
})
export default class EnergySourceBreakdown extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare timestamp: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_biomass: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_hydro: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_solar: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_wind: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_geothermal: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable_otherrenewable: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare renewable: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare nonrenewable_coal: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare nonrenewable_gas: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare nonrenewable_nuclear: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare nonrenewable_oil: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare nonrenewable: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare hydropumpedstorage: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare unknown: number;
}
