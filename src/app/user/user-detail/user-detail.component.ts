import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Connect } from 'ngrx-action-bundles';
import { map, Observable } from 'rxjs';
import { getCurrentRouteStateParams } from 'src/app/+store/selectors';
import { IUser } from 'src/app/shared/interfaces/user';
import { IUserModuleState } from '../+store';
import { loadUserBundle } from '../+store/actions';
import { selectCurrentUser, selectErrorMessage } from '../+store/selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnDestroy {
  actions = this.connect.connectBundles([loadUserBundle]);
  selectors = this.connect.connectSelectors({
    user: selectCurrentUser,
    errorMessage: selectErrorMessage,
    userId: getCurrentRouteStateParams,
  });

  user$: Observable<IUser | null> = this.selectors.user$;
  errorMessage$: Observable<string | null> = this.selectors.errorMessage$;
  userId$ = this.selectors.userId$.pipe(map(({ userId }) => userId));

  dbSharedResolve = [
    {
      dispatchRequest: (userId: number) =>
        this.store.dispatch(this.actions.creators.loadUser({ userId })),
      dispatchRequestCancel: this.store.dispatch(
        this.actions.creators.loadUserCancel()
      ),
      requestSuccess$: this.actions.listen.loadUserSuccess$,
      requestFailure$: this.actions.listen.loadUserFailure$,
      dependencies: [this.userId$],
    },
  ];

  constructor(
    private store: Store<IUserModuleState>,
    private connect: Connect
  ) {}

  ngOnDestroy(): void {
    this.store.dispatch(this.actions.creators.loadUserClear());
  }
}
