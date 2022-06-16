// Angular modules
import { Component }     from '@angular/core';
import { FormGroup }     from '@angular/forms';
import { FormControl }   from '@angular/forms';
import { Validators }    from '@angular/forms';
import { Router }        from '@angular/router';

// Internal modules
import { environment }   from '@env/environment';

// Helpers
import { EmitterHelper } from '@helpers/emitter.helper';

// Services
import { AppService }    from '@services/app.service';

@Component({
  selector    : 'app-login',
  templateUrl : './login.component.html',
  styleUrls   : ['./login.component.scss']
})
export class LoginComponent
{
  public appName : string = environment.appName;
  public formGroup !: FormGroup<{
    email    : FormControl<string>,
    password : FormControl<string>,
  }>;

  constructor
  (
    private router     : Router,
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
      email      : new FormControl<string>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required, Validators.email], nonNullable : true }),
      password   : new FormControl<string>({
        value    : '',
        disabled : false
      }, { validators : [Validators.required], nonNullable : true })
    });
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit() : Promise<void>
  {
    await this.authenticate();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Requests ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async authenticate() : Promise<void>
  {
    EmitterHelper.sendAuthLoading(true);

    const email    = this.formGroup.controls.email.getRawValue();
    const password = this.formGroup.controls.password.getRawValue();
    const success  = await this.appService.authenticate(email, password);

    EmitterHelper.sendAuthLoading(false);

    if (!success)
      return;

    // NOTE Redirect to home
    this.router.navigate(['/home']);
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Helpers -------------------------------------------------------------
  // -------------------------------------------------------------------------------

}
