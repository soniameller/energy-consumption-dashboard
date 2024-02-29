import {
  fetchBuildingMetadata,
  fetchEnergyConsumption,
} from '../services/api-service';
import { QueryKeys } from '../const/query-keys';
import { useQuery } from '@tanstack/react-query';

export const useBuildingsQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QueryKeys.BUILDINGS],
    queryFn: async () => await fetchBuildingMetadata(),
    staleTime: Infinity,
  });
  return { ...rest, buildings: data };
};

export const useEnergyConsumptionQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: [QueryKeys.ENERGY_CONSUMPTION],
    queryFn: async () => await fetchEnergyConsumption(),
    staleTime: Infinity,
  });
  return { ...rest, energyConsumption: data };
};
