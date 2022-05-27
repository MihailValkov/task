import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user';

const userNamespace = '[USER]';

// Load all users
export const loadUsersStart = createAction(
  `${userNamespace} Load Users Start`
);

export const loadUsersSuccess = createAction(
  `${userNamespace} Load Users Success`,
  props<{ users: IUser[] }>()
);

export const loadUsersFailure = createAction(
  `${userNamespace} Load Users Failure`,
  props<{ message: string }>()
);

export const loadUsersCancel = createAction(
  `${userNamespace} Load Users Cancel`
);

export const clearUsers = createAction(
  `${userNamespace} Clear User List`
);

// Load current user by provided userId

export const loadUserStart = createAction(
  `${userNamespace} Load User Start`,
  props<{ userId: number }>()
);

export const loadUserSuccess = createAction(
  `${userNamespace} Load User Success`,
  props<{ user: IUser }>()
);

export const loadUserFailure = createAction(
  `${userNamespace} Load User Failure`,
  props<{ message: string }>()
);

export const loadUserCancel = createAction(
  `${userNamespace} Load User Cancel`
);

export const clearUser = createAction(
  `${userNamespace} Clear Current User`
);
