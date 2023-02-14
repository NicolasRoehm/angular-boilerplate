// Angular modules
import { LOCATION_INITIALIZED } from '@angular/common';
import { Injector }             from '@angular/core';

// External modules
import { TranslateService }     from '@ngx-translate/core';
import { firstValueFrom }       from 'rxjs';

// Helpers
// import { StorageHelper }        from '@helpers/storage.helper';

// Internal modules
import { environment }          from '@env/environment';

/**
 * Safely use translate.instant()
 * https://github.com/ngx-translate/core/issues/517
 */
export function appInitFactory(translate : TranslateService, injector : Injector) : () => Promise<void>
{
  return () => new Promise<void>((resolve, reject) =>
  {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    locationInitialized.then(async (_ : any) =>
    {
      // NOTE This language will be used as a fallback when a translation isn't found in the current language
      // const defaultLanguage = environment.defaultLanguage;
      const defaultLanguage = 'en';
      translate.setDefaultLang(defaultLanguage);
      // NOTE The lang to use, if the lang isn't available, it will use the current loader to get them
      // let userLanguage = StorageHelper.getLanguage();
      // if (!userLanguage)
      let userLanguage = defaultLanguage;

      const obs = translate.use(userLanguage);
      try {
        await firstValueFrom(obs);
        console.info(`Successfully initialized '${userLanguage}' language.`);
      } catch (error) {
        console.error(`Problem with '${userLanguage}' language initialization.`);
      }
      return resolve();
    });
  });
}
