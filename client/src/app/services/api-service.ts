import { JsonBuilding, JsonEnergyConsumption } from '@shared-utils';
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchBuildingMetadata = async (): Promise<JsonBuilding[]> => {
  const response = await api.get('/metadata');
  return response.data;
};

export const fetchEnergyConsumption = async (): Promise<JsonEnergyConsumption[]> => {
  const response = await api.get('/smart-meter');
  return response.data;
};
