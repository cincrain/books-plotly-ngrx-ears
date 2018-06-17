import { ActionReducerMap, createFeatureSelector, createSelector
} from '@ngrx/store';
import * as AuthARS from './auth/index';
import * as CoreStoreFRS from '@store/freducers-selectors';


/****
 * feature interface
 */
export interface IFAuthState {
  auth:          AuthARS.IAuthState
}
//e interface


export interface IEAuthState extends CoreStoreFRS.IBooksPlotlyState {
  fAuth:         IFAuthState
}
//e interface


export const fAuthReducers: ActionReducerMap<IFAuthState> = {
  auth:          AuthARS.auth
}
//e const


/****
 * feature selectors
 */
export const getFAuthState = createFeatureSelector<IFAuthState> ('fAuth');

export const getAuthState  = createSelector (getFAuthState
  , (state: IFAuthState) => state.auth
);

export const getLoggedIn   = createSelector (getAuthState
  , AuthARS.getLoggedIn
);

export const getUser       = createSelector (getAuthState
  , AuthARS.getUser
);

export const getLoginPagePending = createSelector (getAuthState
  , AuthARS.getPending
);

export const getLoginPageError   = createSelector (getAuthState
  , AuthARS.getError
);
//e const
