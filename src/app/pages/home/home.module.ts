// Angular modules
import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';

// Internal modules

import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent }     from './home.component';

@NgModule({
    imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent,
],
})
export class HomeModule { }
