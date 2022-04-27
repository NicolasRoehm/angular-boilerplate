// Enums
import { EnvName } from '@shared/enums/environment.enum';

const scheme = 'http://';
const host   = 'localhost';
const port   = ':5000';
const path   = '/api/';

const baseUrl = scheme + host + port + path;

export const environment = {
  production      : true,
  version         : EnvName.VERSION,
  appName         : 'EasyAngular',
  envName         : EnvName.PROD,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
};
