import { Component, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Connect } from 'ngrx-action-bundles';
import { getCurrentRouteStateParams } from 'src/app/+store/selectors';
import { IUser } from 'src/app/shared/interfaces/user';
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
    params: getCurrentRouteStateParams,
  });

  user$: Observable<IUser | null> = this.selectors.user$;
  errorMessage$: Observable<string | null> = this.selectors.errorMessage$;
  userId$: Observable<number> = this.selectors.params$.pipe(
    map(({ userId }) => userId)
  );

  dbSharedResolve = [
    {
      dispatchRequest: (userId: number) =>
        this.actions.dispatch.loadUser({ userId }),
      dispatchRequestCancel: () => this.actions.dispatch.loadUserCancel(),
      requestSuccess$: this.actions.listen.loadUserSuccess$,
      requestFailure$: this.actions.listen.loadUserFailure$,
      dependencies: [this.userId$],
    },
  ];

  constructor(private connect: Connect) {}

  ngOnDestroy(): void {
    this.actions.dispatch.loadUserClear();
  }
}
