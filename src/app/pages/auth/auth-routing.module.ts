// Angular modules
import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';

// Components
import { AuthComponent }            from './auth/auth.component';
import { ForgotPasswordComponent }  from './auth/forgot-password/forgot-password.component';
import { LoginComponent }           from './auth/login/login.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';

const routes : Routes = [
  {
    path      : '',
    component : AuthComponent,
    children  : [
      {
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      },
      {
        path      : 'login',
        component : LoginComponent
      },
      {
        path      : 'forgot-password',
        component : ForgotPasswordComponent,
      },
      {
        path      : 'validate-account',
        component : ValidateAccountComponent,
      },
    ]
  }
];

@NgModule({
  imports :
  [
    RouterModule.forChild(routes)
  ],
  exports :
  [
    RouterModule
  ],
  providers :
  [
  ]
})
export class AuthRoutingModule { }
