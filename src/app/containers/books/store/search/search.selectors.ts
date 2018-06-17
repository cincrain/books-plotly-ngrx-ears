import { ISearchState } from './search.reducer';


export const getQuery   = (state: ISearchState) => state.query;

export const getIds     = (state: ISearchState) => state.ids;

export const getLoading = (state: ISearchState) => state.loading;

export const getError   = (state: ISearchState) => state.error;
//e const
