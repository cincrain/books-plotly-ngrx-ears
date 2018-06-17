import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { LayoutComponent } from "./layout/index";
import { SidenavComponent } from "./sidenav/index";
import { NavItemComponent } from "./nav-item/index";
import { ToolbarComponent } from "./toolbar/index";


const _CORE_LAYOUT_COMPONENTS = [
  LayoutComponent
  , SidenavComponent
  , NavItemComponent
  , ToolbarComponent
]; //e const

@NgModule ({
  imports: [
    RouterModule,
    SharedModule.forRoot (),

  ],
  declarations: [
    ..._CORE_LAYOUT_COMPONENTS,
  ],
  exports: [
    ..._CORE_LAYOUT_COMPONENTS,
  ]
})
export class LayoutModule {
  static forRoot () {
    return {
      ngModule:  LayoutModule,
    };
  }//e static
}
//e class
