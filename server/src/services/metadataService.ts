import Metadata from '../database/models/metadata';
import { JsonBuilding } from 'shared-utils/src/lib/shared-types';

export const fetchAllBuildingsMetadata = async (): Promise<JsonBuilding[]> => {
  try {
    const dbBuildings = await Metadata.findAll({});

    // NOTE -> The following line should be a model method to return the correct JSON type from the shared lib
    return dbBuildings.map((building) => building.toJSON() as JsonBuilding);
  } catch (error) {
    console.error(
      'Error fetching buildings metadata from the database:',
      error
    );
    throw new Error('Failed to fetch buildings metadata');
  }
};
