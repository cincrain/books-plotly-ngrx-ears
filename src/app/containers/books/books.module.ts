import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BOOKS_ROUTES } from './books.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';

import { fBooksReducers } from './store/freducers-selectors';
import { BOOKS_EFFECTS } from './effects/index';
import { BOOKS_SERVICES } from './services/index';
import { BOOKS_COMPONENTS } from './components/index';

import { CollectionPageComponent } from './containers/collection-page/index';
import { FindBookPageComponent } from './containers/find-book-page/index';
import { ViewBookPageComponent } from './containers/view-book-page/index';
import { SelectedBookPageComponent } from './containers/selected-book-page/index';


@NgModule ({
  imports: [
    SharedModule.forRoot ()
    , RouterModule.forChild ([...BOOKS_ROUTES])
    , StoreModule.forFeature ('fBooks', fBooksReducers)
    , EffectsModule.forFeature ([...BOOKS_EFFECTS])
  ],
  declarations: [
    CollectionPageComponent,
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,

    ...BOOKS_COMPONENTS,
  ],
  exports: [
    CollectionPageComponent,
  
  ],
  providers: [
    ...BOOKS_SERVICES
  ]
})
export class BooksModule {}
//e class
