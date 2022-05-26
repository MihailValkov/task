import { createSelector } from '@ngrx/store';
import { IUserState } from './reducers';

interface ISelectState {
  user: IUserState;
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
export const selectIsLoading = createSelector(
  selectUser,
  (state) => state.isLoading
);
export const selectErrorMessage = createSelector(
  selectUser,
  (state) => state.errorMessage
);
