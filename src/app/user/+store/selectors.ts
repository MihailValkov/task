import { createSelector } from '@ngrx/store';
import { IUserState } from './reducers';

interface ISelectUserState {
  readonly user: IUserState;
}

export const selectUserState = (state: ISelectUserState) => state.user;

export const selectCurrentUser = createSelector(
  selectUserState,
  (state) => state.currentUser
);

export const selectUserList = createSelector(
  selectUserState,
  (state) => state.userList
);

export const selectErrorMessage = createSelector(
  selectUserState,
  (state) => state.error
);
