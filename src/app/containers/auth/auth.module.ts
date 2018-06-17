import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';

import { LoginPageComponent, LoginFormComponent } from './containers/login-page/index';
import { fAuthReducers } from './store/freducers-selectors';
import { AUTH_EFFECTS } from './effects/index';
import { AUTH_SERVICES } from './services/index';


@NgModule ({
  imports: [
    SharedModule.forRoot (),
  ],
  declarations: [
    LoginPageComponent,
    LoginFormComponent,

  ],
  exports: [
    LoginPageComponent,
    
  ]
})
export class AuthModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule:  RootAuthModule,
      providers: [...AUTH_SERVICES],
    };
  }//e static
}


@NgModule ({
  imports: [
    AuthModule,
    RouterModule.forChild ([...AUTH_ROUTES]),  
    StoreModule.forFeature ('fAuth', fAuthReducers),
    EffectsModule.forFeature ([...AUTH_EFFECTS])
  ]
})
export class RootAuthModule {}
//e class
