import { Routes } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page/index';
import { FindBookPageComponent } from './containers/find-book-page/index';
import { ViewBookPageComponent } from './containers/view-book-page/index';
import { BookExistsGuard } from './services/index';


export const BOOKS_ROUTES: Routes = [
  { path: '',      component: CollectionPageComponent },
  { path: 'find',  component: FindBookPageComponent },
  {
    path: ':id',
    component:     ViewBookPageComponent,
    canActivate:   [BookExistsGuard]
  }
];
//e const
