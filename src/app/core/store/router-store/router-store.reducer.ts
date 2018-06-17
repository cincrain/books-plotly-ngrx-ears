import { RouterStateSnapshot, Params } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';


export interface RouterStateUrl {
  url:           string;
  params:        Params;
  queryParams:   Params;
}
//e interface


export class CustomRouterStateSerializer  implements RouterStateSerializer<RouterStateUrl> {
  serialize (routerState: RouterStateSnapshot): RouterStateUrl {
    console.log ([`★★-->> [${Date ()}`
                , `   -->> router-store.reducer.ts # serialize(ln:15+-)`
                , `   -->> ROUTERSTATESNAPSHOT: ${routerState} `]
                .join('\n') );
    let route   = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }//e while

    const { url, root: { queryParams } } = routerState;
    const { params }   = route;

    return { url, params, queryParams };
  }//e serialize
}
//e class
