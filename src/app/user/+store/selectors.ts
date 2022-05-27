import { createSelector } from '@ngrx/store';
import { IUserListState } from './reducers';

interface ISelectState {
  readonly user: IUserListState;
}

export const selectUser = (state: ISelectState) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (state) => state.currentUser
);
export const selectUserList = createSelector(
  selectUser,
  (state) => state.userList
);

export const selectErrorMessage = createSelector(
  selectUser,
  (state) => state.error
);
