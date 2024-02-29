import { EnvironmentKeys, ApiEnvironment } from './types';
import { readEnv } from './utils';

export const environment: ApiEnvironment = {
  sqlite: { storage: readEnv(EnvironmentKeys.DB_STORAGE) },
};
