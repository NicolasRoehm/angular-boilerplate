// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Enums
import { EnvName } from '@shared/enums/environment.enum';

const scheme = 'http://';
const host   = 'localhost';
const port   = ':5000';
const path   = '/api/';

const baseUrl = scheme + host + port + path;

export const environment = {
  production      : false,
  version         : EnvName.VERSION,
  appName         : 'EasyAngular',
  envName         : EnvName.LOCAL,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
