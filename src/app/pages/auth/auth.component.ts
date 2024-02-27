// Angular modules
import { NgIf }                 from '@angular/common';
import { AsyncPipe }            from '@angular/common';
import { Component }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { RouterOutlet }         from '@angular/router';

// Internal modules
import { environment }          from '@env/environment';

// Services
import { StoreService }         from '@services/store.service';

// Components
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';

@Component({
  selector    : 'app-auth',
  templateUrl : './auth.component.html',
  styleUrls   : ['./auth.component.scss'],
  standalone  : true,
  imports     : [NgIf, ProgressBarComponent, RouterOutlet, AsyncPipe]
})
export class AuthComponent implements OnInit
{
  // NOTE Component properties
  public appName    : string  = environment.appName;
  public appVersion : string  = environment.version;

  constructor
  (
    public storeService : StoreService,
  )
  {

  }

  public ngOnInit() : void
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

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
