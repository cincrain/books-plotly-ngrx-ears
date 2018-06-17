import {
  ActionReducerMap, createFeatureSelector, createSelector
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './router-store/index';
import * as LayoutARS from './layout/index';


/****
 * top level: state interface, like a database
 */
export interface IBooksPlotlyState {
  layout:        LayoutARS.ILayoutState,

  router:        RouterReducerState<RouterStateUrl>
}
//e interface


/****
 * top level: action reducer map
 */
export const booksPlotlyReducers: ActionReducerMap<IBooksPlotlyState> = {
  layout:       LayoutARS.layout,

  router:       routerReducer
}
//e const


/****
 * injectable actions, if any
 */
export const booksPlotlyActionTypes = [
];
//e const


/****
 * top level: feature state selectors
 */
export const getFLayoutState = createFeatureSelector<LayoutARS.ILayoutState> ('layout');

export const getShowSidenav  = createSelector (getFLayoutState
  , LayoutARS.getShowSidenav
);
//e const
