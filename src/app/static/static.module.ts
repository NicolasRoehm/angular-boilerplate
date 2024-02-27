// Angular modules
import { NgModule }            from '@angular/core';

// Internal modules


// Components
import { StaticRoutingModule } from './static-routing.module';
import { NotFoundComponent }   from './not-found/not-found.component';

@NgModule({
    imports: [
    StaticRoutingModule,
    NotFoundComponent
]
})
export class StaticModule {}
