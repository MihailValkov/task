import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserModuleState } from '../+store';
import { clearUsers, loadUsersStart } from '../+store/actions';
import {
  selectErrorMessage,
  selectIsLoading,
  selectUserList,
} from '../+store/selectors';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  userList$: Observable<IUser[]> = this.store.pipe(select(selectUserList));
  isLoading$: Observable<boolean> = this.store.pipe(select(selectIsLoading));
  errorMessage$: Observable<string | null> = this.store.pipe(
    select(selectErrorMessage)
  );
  constructor(private store: Store<IUserModuleState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsersStart());
  }
  ngOnDestroy(): void {
    this.store.dispatch(clearUsers());
  }
}
