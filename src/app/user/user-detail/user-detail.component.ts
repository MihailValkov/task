import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserModuleState } from '../+store';
import { clearUser, loadUserStart } from '../+store/actions';
import {
  selectCurrentUser,
  selectErrorMessage,
  selectIsLoading,
} from '../+store/selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<IUser | null> = this.store.pipe(select(selectCurrentUser));
  isLoading$: Observable<boolean> = this.store.pipe(select(selectIsLoading));
  errorMessage$: Observable<string | null> = this.store.pipe(
    select(selectErrorMessage)
  );

  constructor(
    private store: Store<IUserModuleState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { userId } = this.activatedRoute.snapshot.params;
    this.store.dispatch(loadUserStart({ userId }));
  }
  ngOnDestroy(): void {
    this.store.dispatch(clearUser());
  }
}
