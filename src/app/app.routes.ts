import { Routes } from '@angular/router';
import { AuthGuardService } from '@containers/auth/services/index';
import { NotFoundPageComponent } from '@shared/components/not-found-page/index';


export const ROUTES: Routes = [
  { path: '',     redirectTo: 'books', pathMatch: 'full' },
  {
    path:         'books',
    loadChildren: './containers/books/books.module#BooksModule',
    canActivate:  [AuthGuardService],
  },
  { path: '**',    component: NotFoundPageComponent },
];
//e const
