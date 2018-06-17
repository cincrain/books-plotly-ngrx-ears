import { DBSchema } from '@ngrx/db';


export const schema: DBSchema = {
  version:   1,
  name:      'books_db',
  stores: {
    books: {
      autoIncrement: true,
      primaryKey:    'id'
    }
  }
};
//e const
