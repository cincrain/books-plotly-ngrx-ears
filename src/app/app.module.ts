import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES} from './app.routes';

import { DBModule } from '@ngrx/db';
import { SharedModule } from './shared/shared.module';
import { schema } from './db';
import { CoreModule } from './core/core.module';
import { CORE_COMPONENTS_MODULES } from './core/components/index';
import { APP_CONTAINERS_MODULES } from './containers/index';

import { AppComponent } from './app.component';


@NgModule ({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, HttpClientJsonpModule,
    RouterModule.forRoot (ROUTES, { useHash: true }),

    SharedModule.forRoot (),
    CoreModule.forRoot (),
    ...CORE_COMPONENTS_MODULES,
    ...APP_CONTAINERS_MODULES,
    DBModule.provideDB (schema),
    
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
//e class
