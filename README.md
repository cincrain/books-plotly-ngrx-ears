# EARS Pattern in Angular 6 and ngrx 6

Working with EARS pattern in @ngrx is simple and straightforward. This pattern can help you code and maintain @ngrx effect and its reducer function system productive.

Two pilot projects in this repository illustrate how to utilize [@ngrx effect](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) and its reducer and [@angular](https://github.com/angular/angular-cli) application using EARS pattern.

1. books-plotly-ngrx-ears
2. [echoes-player-ears](https://github.com/cincrain/echoes-player-ears)

## Content
- [EARS in @ngrx](#ears-in-@ngrx)
- [Development](#Development)
- [Underlying Resources](#underlying-Resources)
  - examle-app
  - echoes-player
- [Conclusion](#conclusion)

## EARS in @ngrx

Basically EARS pattern in @ngrx consists of search.`a`ctions.ts, search.`r`educer.ts, search.`s`electors.ts and its related `e`ffect file for example.
EARS is the acronym of the files reacting with the user event as the central figure as if to contentrate on something special.

The environment of @ngrx and @angular have materially affected each other in the effect and the reducer part of the application. An `Action` with its type is thrown to and its `Effect` and/or `Reducer` catches it like as acting a traditional message driven event system.

@ngrx effect is generally used as the first place to accept the action signal from the user event. @ngrx reducer reduces the follow-up results to [@ngrx store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) to preserve the application states.

## Development

### Environment
- Angular CLI: 6.0.8
- Node: 8.9.1
- Angular: 6.0.4

### How to create and run
```bash
$ ng new books-plotly-ngrx-ears --style scss
$ cd books-plotly-ngrx-ears
...
$ ng serve
```

### How to develop from `SearchE0R1` to `SearchE1R1`

The notation of EARS pattern starts and represents the action class as follows:

- search.actions.ts
  ```ts
  ...
  export class SearchE0R0 implements Action {
    readonly type = ActionTypes.SEARCH;
    constructor (public payload: string) {}
  }
  ...
  ```

The symbol `E0R0` represents the EARS pattern that is the relationship of @ngrx effect and @ngrx reducer how many functions they have semantically. The end of the `SEARCH` action will result to SearchE1R1 in development.

This means that there is one effect function(`E1`) requesting http access call to get infomation from the server.
The orther is the reducer function(`R1`) changing up the status of the progress during ajaxing the request like as showing loading icon. Two processes can also be triggered simultaneously by one action like the `SearchE1R1` of EARS.

EARS pattern responding to the user event is built up by the mutual interaction of the action, reducer, selector and effect files. Followings are part of this pattern. This example is confined to `SEARCH` acting as `E1` and `R1` . More situations are shown in the full code.

- books.effects.ts
  ```ts
  ...
  @Effect ()
  search$ = this.actions$.pipe (
    ofType<BooksARS.SearchE1R1> (BooksARS.ActionTypes.SEARCH)
    , debounceTime (300)
    , map (toPayload)
    , switchMap (query => {
        if (query === '') {
          return empty ();
        }
        const nextSearch$ = this.actions$.pipe (
          ofType (BookARS.ActionTypes.SEARCH)
          , skip (1)
        );

        return this.googleBooksService.searchBooks (query).pipe (
          takeUntil (nextSearch$)
          , map ((books: Book[]) => new BooksARS.SearchCompleteE0R2 (books))
          , catchError (err => of (new BooksARS.SearchErrorE0R1 (err)))
        );
    })
  );
  ...
  ```

- search.reducer.ts
  ```ts
  ...
  export function search (
    state: ISearchState = initialState
    , action: Actions
  ): ISearchState {
    switch (action.type) {
      case ActionTypes.SEARCH: {
        const query = action.payload;

        if (query === '') {
          return {
            ids:       []
            , loading: false
            , error:   ''
            , query
          };
        }

        return {
          ...state
          , loading:   true
          , error:     ''
          , query
        }
      }
  ...
  ```

## Underlying Resources

Pilot projects are extended and applied using the following two resources.
- [example-app](https://github.com/ngrx/platform) - Example application utilizing @ngrx libraries, showing common patterns and best practices. Try it on [StackBlitz](https://stackblitz.com/github/ngrx/platform/tree/61cbfe537f9df8cef3dd4a6ee0b8f483e49653f4).
- [echoes-player](https://github.com/orizens/echoes-player) - Echos Player: the missing Media Player experience for Youtube - Built with Angular (+5), ngrx (+5), Angular CLI, Bootstrap(SASS), Youtube api. [http://echoesplayer.com](http://echoesplayer.com)

## Conclusion

As a result, EARS system has to match the content of the action class name and the number of @ngrx effect and/or @ngrx reducer function perfectly. If not match, it is just in development yet.

The EARS pattern is useful for representing the relationship of @ngrx effect/reducer functions explicitly. In case a complecated application performing multiple events, EARS pattern would be very informative.

In two pilot projects extended by adding EARS pattern, the former is simple but the later is more advanced and fun. You should see very efficient and informative in taking a closer look at [@angular](https://github.com/angular/angular-cli) and [@ngrx](https://github.com/ngrx/platform).

## License

&copy; 2018 cincrain, MIT License
