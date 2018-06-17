import { ActionTypes, Actions } from './layout.actions';


export interface ILayoutState {
  showSidenav:   boolean;
}
//e interface


const initialState: ILayoutState = {
  showSidenav:   false
}; //e const


export function layout (
  state: ILayoutState = initialState
  , action: Actions
): ILayoutState {
  switch (action.type) {
    case ActionTypes.OPEN_SIDENAV: {
      return {
        showSidenav:   true
      };
    }//e case

    case ActionTypes.CLOSE_SIDENAV: {
      return {
        showSidenav: false
      };
    }//e case

    default: {
      return state;
    }
  }//e switch
}
//e function
