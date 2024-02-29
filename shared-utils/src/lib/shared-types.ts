export type JsonEnergyConsumption = {
  month: string;
  totalEnergyConsumption: number;
  metadata: {
    name: string;
    cpe: string;
  };
};

export type JsonBuilding = {
  cpe: string;
  lat: number;
  lon: number;
  totalarea: number;
  name: string;
  fulladdress: string;
};
