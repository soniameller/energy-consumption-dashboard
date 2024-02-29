import { Sequelize } from 'sequelize-typescript';
import Musician from './models/musician';
import Schedule from './models/schedule';
import Service from './models/service';
import MusicianService from './models/musicianService';
import { environment } from '../environment/environment';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: environment.sqlite.storage,
  models: [Musician, Schedule, Service, MusicianService],
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
