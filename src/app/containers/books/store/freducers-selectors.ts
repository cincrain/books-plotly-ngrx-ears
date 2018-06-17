import { ActionReducerMap, createFeatureSelector, createSelector
} from '@ngrx/store';
import * as CoreStoreFRS from '@store/freducers-selectors';
import * as CollectionARS from './collection/index';
import * as BooksARS from './books/index';
import * as SearchARS from './search/index';


/****
 * feature books: interface
 */
export interface IFBooksState {
  search:        SearchARS.ISearchState;
  books:         BooksARS.IBooksState;
  collection:    CollectionARS.ICollectionState;
}
//e interface

export interface IEBooksState extends CoreStoreFRS.IBooksPlotlyState {
  fBooks:        IFBooksState;
}
//e interface


export const fBooksReducers: ActionReducerMap<IFBooksState> = {
  search:        SearchARS.search,
  books:         BooksARS.books,
  collection:    CollectionARS.collection,
};
//e const


/****
 * feature selectors: books
 */
export const getFBooksState = createFeatureSelector<IFBooksState> ('fBooks');

export const getBookEntitiesState = createSelector (getFBooksState
  , (state: IFBooksState) => state.books
);

export const getSelectedBookId = createSelector (getBookEntitiesState
  , BooksARS.getSelectedId
);

export const {
  selectIds:        getBookIds
  , selectEntities: getBookEntities
  , selectAll:      getAllBooks
  , selectTotal:    getTotalBooks
} = BooksARS.booksAdapter.getSelectors (getBookEntitiesState);

export const getSelectedBook = createSelector (
  getBookEntities, getSelectedBookId
  , (entities, selectedId) => {
      return selectedId && entities[selectedId];
  }
);


// search
export const getSearchState = createSelector (getFBooksState
  , (state: IFBooksState) => state.search
);

export const getSearchQuery = createSelector (getSearchState
  , SearchARS.getQuery
);

export const getSearchBookIds = createSelector (getSearchState
  , SearchARS.getIds
);

export const getSearchLoading = createSelector (getSearchState
  , SearchARS.getLoading
);

export const getSearchError = createSelector (getSearchState
  , SearchARS.getError
);

export const getSearchResults = createSelector (
  getBookEntities, getSearchBookIds
  , (books, searchIds) => {
    return searchIds.map (id => books[id]);
  }
);


// collection
export const getCollectionState = createSelector (getFBooksState
  , (state: IFBooksState) => state.collection
);

export const getCollectionLoaded = createSelector (getCollectionState
  , CollectionARS.getLoaded
);

export const getCollectionLoading = createSelector (getCollectionState
  , CollectionARS.getLoading
);

export const getCollectionBookIds = createSelector (getCollectionState
  , CollectionARS.getIds
);

export const getBookCollection = createSelector (
  getBookEntities, getCollectionBookIds
  , (entities, ids) => {
      return ids.map (id =>  entities[id]);
  }
);

export const isSelectedBookInCollection = createSelector (
  getCollectionBookIds, getSelectedBookId
  , (ids, selected) => {
      return ids.indexOf (selected) > -1;
  }
);
//e const
