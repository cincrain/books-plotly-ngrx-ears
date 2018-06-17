import { ICollectionState } from './collection.reducer';


export const getLoaded    = (state: ICollectionState) => state.loaded;

export const getLoading   = (state: ICollectionState) => state.loading;

export const getIds       = (state: ICollectionState) => state.ids;
//e const
