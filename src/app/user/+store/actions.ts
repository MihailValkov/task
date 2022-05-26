import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user';

const userNamespace = '[USER]';

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

