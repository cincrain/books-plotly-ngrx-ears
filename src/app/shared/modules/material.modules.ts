import { NgModule } from '@angular/core';
import {
  MatInputModule
  , MatCardModule
  , MatButtonModule
  , MatSidenavModule
  , MatListModule
  , MatIconModule
  , MatToolbarModule
  , MatProgressSpinnerModule
} from '@angular/material';


const _MAT_MODULES = [
  MatInputModule
  , MatCardModule
  , MatButtonModule
  , MatSidenavModule
  , MatListModule
  , MatIconModule
  , MatToolbarModule
  , MatProgressSpinnerModule
]; //e const


@NgModule ({
  imports: [
    ..._MAT_MODULES,
  ],
  declarations: [],
  exports: [
    ..._MAT_MODULES,
  ]
})
export class MaterialModules {
  static forRoot () {
    return {
      ngModule:  MaterialModules
    };
  }
}
//e class
