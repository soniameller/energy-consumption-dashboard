import { Request, Response } from 'express';
import * as SmartMeterService from '../services/smartMeterService';

export const getEnergyConsumption = async (req: Request, res: Response) => {
  try {
    const energyConsumption =
      await SmartMeterService.getMonthlyEnergyConsumption();
    res.json(energyConsumption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
