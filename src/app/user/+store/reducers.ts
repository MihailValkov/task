import { createReducer, on } from '@ngrx/store';
import { IHttpRequestError } from 'src/app/shared/interfaces/http-error';
import { IUser } from 'src/app/shared/interfaces/user';
import { loadUserBundle, loadUsersBundle } from './actions';
export interface IUserListState {
  userList: IUser[];
  currentUser: IUser | null;
  error: string | null;
}

const initialUserListState: IUserListState = {
  userList: [],
  currentUser: null,
  error: null,
};

const setErrorMessage = (
  state: IUserListState,
  {
    payload: {
      error: { message },
    },
  }: { payload: IHttpRequestError }
) => {
  return { ...state, error: message };
};

export const userListReducer = createReducer<IUserListState>(
  initialUserListState,
  on(loadUsersBundle.creators.loadUsers, (state) => {
    return { ...state, userList: [] };
  }),
  on(
    loadUsersBundle.creators.loadUsersSuccess,
    (state, { payload: { users } }) => {
      return { ...state, userList: users };
    }
  ),
  on(loadUsersBundle.creators.loadUsersFailure, setErrorMessage),
  on(loadUsersBundle.creators.loadUsersClear, (state) => {
    return { ...state, userList: [] };
  }),
  on(loadUserBundle.creators.loadUser, (state) => {
    return { ...state, currentUser: null };
  }),
  on(
    loadUserBundle.creators.loadUserSuccess,
    (state, { payload: { user } }) => {
      return { ...state, currentUser: user };
    }
  ),
  on(loadUserBundle.creators.loadUserFailure, setErrorMessage),
  on(loadUserBundle.creators.loadUserClear, (state) => {
    return { ...state, currentUser: null };
  })
);
