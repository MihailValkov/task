import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { catchError, map, switchMap, takeUntil } from 'rxjs';
import { Connect } from 'ngrx-action-bundles';

import { UserService } from '../user.service';
import { loadUsersBundle, loadUserBundle } from './actions';

@Injectable()
export class UserEffects {
  actions = this.connect.connectBundles([loadUsersBundle, loadUserBundle]);

  loadUsers$ = createEffect(() =>
    this.actions.listen.loadUsers$.pipe(
      switchMap(() =>
        this.userService.loadUsers().pipe(
          takeUntil(this.actions.listen.loadUsersCancel$),
          map((users) => this.actions.creators.loadUsersSuccess({ users }))
        )
      ),
      catchError((error) => [this.actions.creators.loadUsersFailure({ error })])
    )
  );

  loadUser$ = createEffect(() =>
    this.actions.listen.loadUser$.pipe(
      switchMap(({ payload: { userId } }) =>
        this.userService.loadUserById(userId).pipe(
          takeUntil(this.actions.listen.loadUserCancel$),
          map((user) => this.actions.creators.loadUserSuccess({ user }))
        )
      ),
      catchError((error) => [this.actions.creators.loadUserFailure({ error })])
    )
  );

  constructor(private userService: UserService, private connect: Connect) {}
}
