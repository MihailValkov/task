import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, takeUntil } from 'rxjs';
import { UserService } from '../user.service';
import * as userActions from './actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsersStart),
      switchMap(() =>
        this.userService.loadUsers().pipe(
          takeUntil(this.actions$.pipe(ofType(userActions.loadUsersCancel))),
          map((users) => userActions.loadUsersSuccess({ users }))
        )
      ),
      catchError((err) => {
        return [userActions.loadUsersFailure({ message: err.message })];
      })
    )
  );

  constructor(private userService: UserService, private actions$: Actions) {}
}
