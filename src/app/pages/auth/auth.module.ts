// Angular modules
import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';

// Internal modules
import { AuthRoutingModule }        from './auth-routing.module';
import { SharedModule }             from '../../shared/shared.module';

// Components
import { AuthComponent }            from './auth/auth.component';
import { ForgotPasswordComponent }  from './auth/forgot-password/forgot-password.component';
import { LoginComponent }           from './auth/login/login.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';

@NgModule({
  declarations    :
  [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ValidateAccountComponent
  ],
  imports         :
  [
    CommonModule,
    AuthRoutingModule,

    SharedModule
  ],
})
export class AuthModule { }
