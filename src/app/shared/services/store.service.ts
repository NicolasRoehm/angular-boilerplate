// Angular modules
import { isPlatformServer } from '@angular/common';
import { Inject }           from '@angular/core';
import { Injectable }       from '@angular/core';
import { PLATFORM_ID }      from '@angular/core';

// External modules
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject }  from 'rxjs';

// Internal modules
import { environment }      from '@env/environment';

/**
 * Angular Application State Management: You Do (Not) Need External Data Stores like NgRx, Redux, and Other
 * https://www.maestralsolutions.com/angular-application-state-management-you-do-not-need-external-data-stores/
 */
@Injectable()
export class StoreService
{
  // NOTE Data
  private readonly _isServerSource  = new BehaviorSubject<boolean>(isPlatformServer(this.platformId));
  private readonly _pageTitleSource = new BehaviorSubject<string>(environment.appName);
  private readonly _isLoadingSource = new BehaviorSubject<boolean>(false);

  // NOTE Events
  readonly pageTitle$ = this._pageTitleSource.asObservable();
  readonly isLoading$ = this._isLoadingSource.asObservable();

  constructor
  (
    @Inject(PLATFORM_ID) private platformId : Object,
    private translateService : TranslateService
  )
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Server -------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public getIsServer() : boolean
  {
    return this._isServerSource.getValue();
  }

  public setIsServer(isServer : boolean) : void
  {
    this._isServerSource.next(isServer);
  }

  // -------------------------------------------------------------------------------
  // NOTE Page title ---------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public getPageTitle() : string
  {
    return this._pageTitleSource.getValue();
  }

  public setPageTitle(title : string, translate : boolean = true) : void
  {
    const pageTitle = translate ? this.translateService.instant(title) : title;
    this._pageTitleSource.next(pageTitle);
  }

  // -------------------------------------------------------------------------------
  // NOTE Is loading ---------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public getIsLoading() : boolean
  {
    return this._isLoadingSource.getValue();
  }

  public setIsLoading(state : boolean) : void
  {
    this._isLoadingSource.next(state);
  }

}
