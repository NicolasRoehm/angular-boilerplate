// Angular modules
import { Component }     from '@angular/core';
import { FormGroup }     from '@angular/forms';
import { FormControl }   from '@angular/forms';
import { Validators }    from '@angular/forms';
import { Router }        from '@angular/router';

// Helpers
import { EmitterHelper } from '@helpers/emitter.helper';

// Services
import { AppService }    from '@services/app.service';

@Component({
  selector    : 'app-forgot-password',
  templateUrl : './forgot-password.component.html',
  styleUrls   : ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent
{
  public formGroup !: FormGroup;

  constructor
  (
    public  router     : Router,
    private appService : AppService,
  )
  {
    this.initFormGroup();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup() : void
  {
    this.formGroup = new FormGroup({
      email      : new FormControl({
        value    : null,
        disabled : false
      }, [Validators.required, Validators.email]),
    });
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit() : Promise<void>
  {
    await this.forgotPassword();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Requests ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async forgotPassword() : Promise<void>
  {
    EmitterHelper.sendAuthLoading(true);

    const email : string = this.formGroup.controls['email'].value;
    const success = await this.appService.forgotPassword(email);

    EmitterHelper.sendAuthLoading(false);

    if (!success)
      return;

    // NOTE Redirect to validate account
    this.router.navigate(['/auth/validate-account']);
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Helpers -------------------------------------------------------------
  // -------------------------------------------------------------------------------
}
