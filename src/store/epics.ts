import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Action } from 'redux';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Types, UserTypes } from './actions';

const gitHubUrl = 'https://api.github.com/users/';

interface IAction extends Action {
  type: UserTypes.GET_USER;
  userName: string;
}


const getJSON = (userName: string) =>
  ajax
    .getJSON(`${gitHubUrl}${userName}`)
    .pipe(
      catchError<any, any>((error) => {
        console.error(error);
        return of([]);
      })
    );

const getUsers = (action$: any, $state: any) => action$.pipe(
  ofType(Types.GET_USER),
  mergeMap((action: IAction) => {
    const user = $state.value.API.USERS.filter(({ login }: { login: string }) => login === action.userName);
    if (user && user.length) {
      return of({ type: Types.SET_USER, user: user[0] })
    } else {
      return getJSON(action.userName).pipe(
        map((user) => ({ type: Types.SET_USER, user }))
      );
    }
  })
);;

export default combineEpics(getUsers);
