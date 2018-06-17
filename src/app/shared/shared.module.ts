import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { TooltipModule } from 'ngx-tooltip';
import { MaterialModules } from './modules/material.modules';

import { SHARED_COMPONENTS } from './components/index';
import { SHARED_DIRECTIVES } from './directives/index';
import { SHARED_PIPES } from './pipes/index';


const _SHARED_MODULES = [
  InfiniteScrollModule,
  NgxTypeaheadModule,
  TooltipModule,
  MaterialModules,

]; //e const

const _SHARED_CDP = [
  ...SHARED_COMPONENTS,
  ...SHARED_DIRECTIVES,
  ...SHARED_PIPES,

]; //e const

@NgModule ({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    
    ..._SHARED_MODULES,
    
  ],
  declarations: [
    ..._SHARED_CDP,

  ],
  exports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,

    ..._SHARED_MODULES,
    ..._SHARED_CDP,

  ]
})
export class SharedModule {
  static forRoot () {
    return {
      ngModule:   SharedModule
    };
  }
}
//e class
