import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Connect } from 'ngrx-action-bundles';
import { IUser } from 'src/app/shared/interfaces/user';
import { loadUsersBundle } from '../+store/actions';
import { selectErrorMessage, selectUserList } from '../+store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnDestroy {
  actions = this.connect.connectBundles([loadUsersBundle]);
  selectors = this.connect.connectSelectors({
    userList: selectUserList,
    errorMessage: selectErrorMessage,
  });

  userList$: Observable<IUser[]> = this.selectors.userList$;
  errorMessage$: Observable<string | null> = this.selectors.errorMessage$;

  dbSharedResolve = [
    {
      dispatchRequest: () => this.actions.dispatch.loadUsers(),
      dispatchRequestCancel: () => this.actions.dispatch.loadUsersCancel(),
      requestSuccess$: this.actions.listen.loadUsersSuccess$,
      requestFailure$: this.actions.listen.loadUsersFailure$,
    },
  ];

  constructor(private connect: Connect) {}

  ngOnDestroy(): void {
    this.actions.dispatch.loadUsersClear();
  }
}
