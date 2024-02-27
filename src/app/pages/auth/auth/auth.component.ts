// Angular modules
import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';

// Internal modules
import { environment }  from '@env/environment';

// Services
import { StoreService } from '@services/store.service';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from '../../../shared/components/blocks/progress-bar/progress-bar.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [NgIf, ProgressBarComponent, RouterOutlet, AsyncPipe]
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
