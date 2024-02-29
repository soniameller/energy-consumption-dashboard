import { Sequelize } from 'sequelize-typescript';
import SmartMeter from '../database/models/smart_meter';
import Metadata from '../database/models/metadata';
import { JsonEnergyConsumption } from 'shared-utils/src/lib/shared-types';

export const getMonthlyEnergyConsumption = async (): Promise<
  JsonEnergyConsumption[]
> => {
  try {
    const dbSmartMeter = await SmartMeter.findAll({
      attributes: [
        [
          Sequelize.fn('strftime', '%Y-%m', Sequelize.col('timestamp')),
          'month',
        ],
        [
          Sequelize.fn('SUM', Sequelize.col('active_energy')),
          'totalEnergyConsumption',
        ],
      ],
      include: [
        {
          model: Metadata,
          attributes: ['name', 'cpe'],
        },
      ],
      group: ['Month', 'metadata.cpe'],
      order: [
        [Sequelize.fn('strftime', '%Y-%m', Sequelize.col('timestamp')), 'ASC'],
        ['metadata', 'name', 'ASC'],
      ],
    });
    // NOTE -> The following line should be a model method to return the correct JSON type from the shared lib
    return dbSmartMeter.map(
      (smartMeter) => smartMeter.toJSON() as JsonEnergyConsumption
    );
  } catch (error) {
    console.error('Error fetching smart meter data from the database:', error);
    throw new Error('Failed to fetch smart meter data');
  }
};
