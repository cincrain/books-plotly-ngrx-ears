import { IAuthState } from './auth.reducer';


export const getLoggedIn = (state: IAuthState) => state.loggedIn;

export const getUser     = (state: IAuthState) => state.user;

export const getPending  = (state: IAuthState) => state.pending;

export const getError    = (state: IAuthState) => state.error;
//e const
