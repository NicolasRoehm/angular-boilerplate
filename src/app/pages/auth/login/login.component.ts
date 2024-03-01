// Angular modules
import { NgClass }             from '@angular/common';
import { NgIf }                from '@angular/common';
import { Component }           from '@angular/core';
import { FormGroup }           from '@angular/forms';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl }         from '@angular/forms';
import { Validators }          from '@angular/forms';
import { Router }              from '@angular/router';
import { RouterLink }          from '@angular/router';

// External modules
import { TranslateModule }     from '@ngx-translate/core';

// Internal modules
import { environment }         from '@env/environment';

// Services
import { AppService }          from '@services/app.service';
import { StoreService }        from '@services/store.service';

@Component({
  selector    : 'app-login',
  templateUrl : './login.component.html',
  styleUrls   : ['./login.component.scss'],
  standalone  : true,
  imports     : [FormsModule, ReactiveFormsModule, NgClass, NgIf, RouterLink, TranslateModule]
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
    private router       : Router,
    private storeService : StoreService,
    private appService   : AppService,
  )
  {
    this.initFormGroup();
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
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
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit() : Promise<void>
  {
    await this.authenticate();
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async authenticate() : Promise<void>
  {
    this.storeService.isLoading.set(true);

    const email    = this.formGroup.controls.email.getRawValue();
    const password = this.formGroup.controls.password.getRawValue();
    const success  = await this.appService.authenticate(email, password);

    this.storeService.isLoading.set(false);

    if (!success)
      return;

    // NOTE Redirect to home
    this.router.navigate(['/home']);
  }

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

}
