export const ENV_NULL_VALUE = 'null';

/**
 * Using this function we restrict environment variable values to being either a valid string or the string {@code ENV_NULL_VALUE}
 * this is useful to make sure all environment variables have been set before infrastructure is deployed.
 *
 * @param key
 * @returns
 */
export const getValidEnvValue = (key: string): string => {
  const val = process.env[key];

  if (val === '' || val === undefined) {
    throw Error(
      `"${key}" must be defined in environment however you can set it's value to "${ENV_NULL_VALUE}" if you don't want to define it`
    );
  }

  return val;
};

export const readEnv = (key: string): string => {
  const val = getValidEnvValue(key);

  if (val === ENV_NULL_VALUE) {
    throw Error(
      `"${key}" cannot use the value "${ENV_NULL_VALUE}" it must be a properly defined value`
    );
  }

  if (val === undefined) {
    throw Error(`"${key}" must be defined in environment`);
  }
  return val;
};

export const readEnvOptional = (key: string): string | undefined => {
  const val = getValidEnvValue(key);

  if (val === ENV_NULL_VALUE) {
    return undefined;
  }

  return val;
};
