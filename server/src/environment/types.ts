export interface ApiEnvironment {
  sqlite: {
    storage: string;
  };
}
export enum EnvironmentKeys {
  DB_STORAGE = 'NX_DATABASE_STORAGE',
}
