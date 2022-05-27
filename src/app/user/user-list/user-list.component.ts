import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserModuleState } from '../+store';
import {
  loadUsersCancel,
  loadUsersFailure,
  loadUsersStart,
  loadUsersSuccess,
} from '../+store/actions';
import { selectErrorMessage, selectUserList } from '../+store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userList$: Observable<IUser[]> = this.store.pipe(select(selectUserList));
  errorMessage$: Observable<string | null> = this.store.pipe(
    select(selectErrorMessage)
  );
  dbSharedResolve = [
    {
      dispatchRequest: () => this.store.dispatch(loadUsersStart()),
      dispatchRequestCancel: () => this.store.dispatch(loadUsersCancel()),
      requestSuccess$: this.actions$.pipe(ofType(loadUsersSuccess)),
      requestFailure$: this.actions$.pipe(ofType(loadUsersFailure)),
    },
  ];

  constructor(
    private store: Store<IUserModuleState>,
    private actions$: Actions
  ) {}
}
