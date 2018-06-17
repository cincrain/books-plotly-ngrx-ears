import { ActionTypes, Actions } from './auth.actions';
import { User } from '../../models/user';


export interface IAuthState {
  loggedIn:      boolean;
  user:          User;
  pending:       boolean;
  error:         boolean;
}
//e interface


const initialState: IAuthState = {
  loggedIn:     false,
  user:         null,
  pending:      false,
  error:        false,
}; //e const


export function auth (
  state: IAuthState = initialState
  , action: Actions
): IAuthState {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        ...state
        , pending:   true
        , error:     null
      };
    }//e case

    case ActionTypes.LOGIN_SUCCESS: {
      return {
        loggedIn:  true
        , user:      action.payload.user
        , pending:   false
        , error:     null
      };
    }//e case

    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state
        , pending:   false
        , error:     action.payload
      };
    }//e csase

    case ActionTypes.LOGOUT: {
      return initialState;
    }//e case

    default: {
      return state;
    }
  }//e switch
}
//e function
