// Angular modules
import { NgIf }             from '@angular/common';
import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';
import { RouterOutlet }     from '@angular/router';

// External modules
import { TranslateService } from '@ngx-translate/core';

// Services
import { StoreService }     from '@services/store.service';

// Components
import { ToastComponent }   from '@blocks/toast/toast.component';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss'],
  standalone  : true,
  imports     : [RouterOutlet, ToastComponent, NgIf]
})
export class AppComponent implements OnInit
{
  public isServerSide : boolean;

  constructor
  (
    private storeService     : StoreService,
    private translateService : TranslateService,
  )
  {
    this.isServerSide = this.storeService.getIsServer();

    // NOTE This language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');
    // NOTE The lang to use, if the lang isn't available, it will use the current loader to get them
    // let userLanguage = StorageHelper.getLanguage();
    // if (!userLanguage)
    let userLanguage = 'en';
    this.translateService.use(userLanguage);
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit() : void
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // NOTE Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------
}
