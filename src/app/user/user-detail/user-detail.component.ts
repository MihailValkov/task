import { Component } from '@angular/core';
import { ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { getCurrentRouteStateParams } from 'src/app/+store/selectors';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserModuleState } from '../+store';
import {
  loadUserCancel,
  loadUserFailure,
  loadUserStart,
  loadUserSuccess,
} from '../+store/actions';
import { selectCurrentUser, selectErrorMessage } from '../+store/selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  user$: Observable<IUser | null> = this.store.pipe(select(selectCurrentUser));
  errorMessage$: Observable<string | null> = this.store.pipe(
    select(selectErrorMessage)
  );
  userId$ = this.store.pipe(
    select(getCurrentRouteStateParams),
    map(({ userId }) => userId)
  );

  dbSharedResolve = [
    {
      dispatchRequest: (userId: number) =>
        this.store.dispatch(loadUserStart({ userId })),
      dispatchRequestCancel: () => this.store.dispatch(loadUserCancel()),
      requestSuccess$: this.actions$.pipe(ofType(loadUserSuccess)),
      requestFailure$: this.actions$.pipe(ofType(loadUserFailure)),
      dependencies: [this.userId$],
    },
  ];

  constructor(
    private store: Store<IUserModuleState>,
    private actions$: Actions
  ) {}
}
