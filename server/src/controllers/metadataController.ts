import { Request, Response } from 'express';
import * as MetadataService from '../services/metadataService';

export const getBuildingMetadata = async (req: Request, res: Response) => {
  try {
    const buildings = await MetadataService.fetchAllBuildingsMetadata();
    res.json(buildings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
