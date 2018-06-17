import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";


export * from './auth.service';
export * from './auth-guard.service';

export const AUTH_SERVICES = [
  AuthService,
  AuthGuardService,

];
//e const
