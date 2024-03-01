// Angular modules
import { isPlatformServer } from '@angular/common';
import { Inject }           from '@angular/core';
import { signal }           from '@angular/core';
import { Injectable }       from '@angular/core';
import { PLATFORM_ID }      from '@angular/core';

// External modules
import { TranslateService } from '@ngx-translate/core';

// Internal modules
import { environment }      from '@env/environment';

@Injectable()
export class StoreService
{
  public isServer  = signal(isPlatformServer(this.platformId));
  public isLoading = signal(true);
  public pageTitle = signal(environment.appName);

  constructor
  (
    @Inject(PLATFORM_ID) private platformId : Object,
    private translateService : TranslateService
  )
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Page title ---------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public setPageTitle(title : string, translate : boolean = true) : void
  {
    const pageTitle = translate ? this.translateService.instant(title) : title;
    this.pageTitle.set(pageTitle);
  }
}
