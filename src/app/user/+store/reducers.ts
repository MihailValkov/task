import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user';
import * as userActions from './actions';

export interface IUserState {
  currentUser: IUser | null;
  userList: IUser[];
  isLoading: boolean;
  errorMessage: string | null;
}

const initialUserState: IUserState = {
  currentUser: null,
  userList: [],
  isLoading: false,
  errorMessage: null,
};

const setErrorMessage = (
  state: IUserState,
  { message }: { message: string }
) => ({
  ...state,
  errorMessage: message,
  isLoading: false,
});

const startFetching = (state: IUserState) => ({
  ...state,
  isLoading: true,
  errorMessage: null,
});

export const userReducer = createReducer<IUserState>(
  initialUserState,
  on(userActions.loadUsersStart, startFetching),
  on(userActions.loadUsersSuccess, (state, { users }) => {
    return { ...state, userList: users, isLoading: false };
  }),
  on(userActions.loadUsersFailure, setErrorMessage),
  on(userActions.clearUsers, (state) => {
    return { ...state, userList: [] };
  }),
  on(userActions.loadUserStart, startFetching),
  on(userActions.loadUserSuccess, (state, { user }) => {
    return { ...state, currentUser: user, isLoading: false };
  }),
  on(userActions.loadUserFailure, setErrorMessage),
  on(userActions.clearUser, (state) => {
    return { ...state, currentUser: null };
  })
);
