import { ActionTypes as BooksActionTypes, Actions as BooksActions
} from './books.actions';
import { ActionTypes as CollectionActionTypes, Actions as CollectionActions
} from '../collection/collection.actions';
import { Book } from '../../models/book';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export interface IBooksState extends EntityState<Book> {
  selectedBookId: string | null;
}
//e interface


export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book> ({
  selectId:      (book: Book) => book.id,
  sortComparer:  false,
});
//e const


const initialState: IBooksState = booksAdapter.getInitialState ({
  selectedBookId:   null,
}); //e const


export function books (
  state: IBooksState = initialState
  , action: BooksActions | CollectionActions
): IBooksState {
  switch (action.type) {
    case BooksActionTypes.SEARCH_COMPLETE:
    case CollectionActionTypes.LOAD_SUCCESS: {
      return booksAdapter.addMany (action.payload, {
        ...state
        , selectedBookId: state.selectedBookId
      });
    }//e case

    case BooksActionTypes.LOAD: {
      return booksAdapter.addOne (action.payload, {
        ...state
        , selectedBookId: state.selectedBookId
      });
    }//e case

    case BooksActionTypes.SELECT: {
      return {
        ...state
        , selectedBookId: action.payload
      };
    }//e case

    default: {
      return state;
    }
  }//e switch
}
//e function
