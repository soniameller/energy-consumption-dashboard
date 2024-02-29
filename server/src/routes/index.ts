import express from 'express';
import { getBuildingMetadata } from '../controllers/metadataController';
import { getEnergyConsumption } from '../controllers/smartMeterController';

const router = express.Router();

router.get('/metadata', getBuildingMetadata);
router.get('/smart-meter', getEnergyConsumption);

export default router;
