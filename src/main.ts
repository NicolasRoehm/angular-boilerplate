import { enableProdMode, APP_INITIALIZER, Injector, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createTranslateLoader } from './app/app.module';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { StaticModule } from './app/static/static.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { StoreService } from '@services/store.service';
import { AppService } from '@services/app.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { appInitFactory } from '@factories/app-init.factory';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, 
        // External modules
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }), AngularSvgIconModule.forRoot(), StaticModule, AppRoutingModule),
        // External modules
        {
            provide: APP_INITIALIZER,
            useFactory: appInitFactory,
            deps: [TranslateService, Injector],
            multi: true
        },
        // Services
        AppService,
        StoreService,
        // Pipes
        DatePipe,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
