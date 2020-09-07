import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Types } from './actions';

const gitHubUrl = 'https://api.github.com/users/';

const getJSON = (userName: string) =>
  ajax
    .getJSON(`${gitHubUrl}${userName}`)
    .pipe(
      catchError<any, any>((error) => {
        console.error(error);
        return of([]);
      })
    );

const getUsers = (action$: any) => action$.pipe(
  ofType(Types.GET_USER),
  mergeMap((action: any) => {
    return getJSON(action.userName).pipe(
      map((set) => ({ type: Types.SET_USER, user: set }))
    );
  })
);;

export default combineEpics(getUsers);
