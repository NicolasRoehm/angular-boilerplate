// Angular modules
import { HttpClient }           from '@angular/common/http';
import { HttpClientModule }     from '@angular/common/http';
import { APP_INITIALIZER }      from '@angular/core';
import { NgModule }             from '@angular/core';
import { Injector }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { DatePipe }             from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External modules
import { TranslateService }     from '@ngx-translate/core';
import { TranslateModule }      from '@ngx-translate/core';
import { TranslateLoader }      from '@ngx-translate/core';
import { TranslateHttpLoader }  from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Internal modules
import { AppRoutingModule }     from './app-routing.module';
import { SharedModule }         from './shared/shared.module';
import { StaticModule }         from './static/static.module';

// Services
import { AppService }           from '@services/app.service';
import { StoreService }         from '@services/store.service';

// Components
import { AppComponent }         from './app.component';

// Factories
import { appInitFactory }       from '@factories/app-init.factory';

@NgModule({
  imports: [
    // Angular modules
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,

    // External modules
    TranslateModule.forRoot({
      loader :
      {
        provide    : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps       : [HttpClient]
      }
    }),
    AngularSvgIconModule.forRoot(),

    // Internal modules
    SharedModule,
    StaticModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // External modules
    {
      provide    : APP_INITIALIZER,
      useFactory : appInitFactory,
      deps       : [ TranslateService, Injector ],
      multi      : true
    },

    // Services
    AppService,
    StoreService,

    // Pipes
    DatePipe,

    // Guards

    // Interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http : HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
