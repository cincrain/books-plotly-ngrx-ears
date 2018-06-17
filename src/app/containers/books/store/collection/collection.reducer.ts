import { ActionTypes, Actions } from './collection.actions';


export interface ICollectionState {
  loaded:        boolean;
  loading:       boolean;
  ids:           string[];
}
//e interface


const initialState: ICollectionState = {
  loaded:        false,
  loading:       false,
  ids:           [],
}; //e const


export function collection (
  state: ICollectionState = initialState
  , action: Actions
): ICollectionState {
  switch (action.type) {
    case ActionTypes.LOAD: {
      return {
        ...state
        , loading:  true
      };
    }//e case

    case ActionTypes.LOAD_SUCCESS: {
      return {
        loaded:     true
        , loading:  false
        , ids:      action.payload.map (book => book.id)
      };
    }//e case

    case ActionTypes.ADD_BOOK_SUCCESS:
    case ActionTypes.REMOVE_BOOK_FAIL: {
      if (state.ids.indexOf (action.payload.id) > -1) {
        return state;
      }
      return {
        ...state
        , ids: [...state.ids, action.payload.id]
      };
    }//e case

    case ActionTypes.ADD_BOOK_FAIL:
    case ActionTypes.REMOVE_BOOK_SUCCESS: {
      return {
        ...state
        , ids: state.ids.filter (id => id !== action.payload.id)
      };
    }//e case

    default: {
      return state;
    }
  }//e switch
}
//e function
