// Angular modules
import { Component }     from '@angular/core';
import { OnDestroy }     from '@angular/core';
import { OnInit }        from '@angular/core';

// External modules
import { Subscription }  from 'rxjs';

// Helpers
import { EmitterHelper } from '@helpers/emitter.helper';

@Component({
  selector    : 'app-auth',
  templateUrl : './auth.component.html',
  styleUrls   : ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy
{
  // NOTE Component properties
  public isLoading : boolean = false;

  // NOTE Subscription
  private authLoadingSub : Subscription;

  constructor
  (

  )
  {
    this.authLoadingSub = this.authLoadingSubscription();
  }

  public ngOnInit() : void
  {
  }

  public ngOnDestroy() : void
  {
    this.authLoadingSub.unsubscribe();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Computed props ------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Helpers -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Requests ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Subscriptions -------------------------------------------------------
  // -------------------------------------------------------------------------------

  private authLoadingSubscription() : Subscription
  {
    return EmitterHelper.emitAuthLoading.subscribe((isLoading : boolean) =>
    {
      this.isLoading = isLoading;
    });
  }

}
