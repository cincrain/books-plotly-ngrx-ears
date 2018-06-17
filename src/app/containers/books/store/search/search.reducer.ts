import { ActionTypes, Actions } from '../books/books.actions';


export interface ISearchState {
  query:         string;
  ids:           string[];
  loading:       boolean;
  error:         string;
}
//e interface


const initialState: ISearchState = {
  query:         '',
  ids:           [],
  loading:       false,
  error:         ''
}; //e const


export function search (
  state: ISearchState = initialState
  , action: Actions
): ISearchState {
  switch (action.type) {
    case ActionTypes.SEARCH: {
      const query = action.payload;
      
      if (query === '') {
        return {
          query
          , ids:      []
          , loading:  false
          , error:    ''
        };
      }
      return {
        ... state
        , query
        , loading:    true
        , error:      ''
      }
    }//e case

    case ActionTypes.SEARCH_COMPLETE: {
      return {
        query:       state.query
        , ids:       action.payload.map (book => book.id)
        , loading:   false
        , error:     ''
      };
    }//e case

    case ActionTypes.SEARCH_ERROR: {
      return {
        ...state
        , loading:   false
        , error:     action.payload
      };
    }//e case

    default: {
      return state;
    }
  }//e switch
}
//e function
