import { Sequelize } from 'sequelize-typescript';
import EnergySourceBreakdown from './models/energy_source_breakdown';
import Metadata from './models/metadata';
import SmartMeter from './models/smart_meter';
import { environment } from '../environment/environment';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: environment.sqlite.storage,
  models: [EnergySourceBreakdown, Metadata, SmartMeter],
  logging: false,
});

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};

export { sequelize, syncDatabase };
