import { createAsyncBundleWithClear } from 'ngrx-action-bundles';
import { IUser } from 'src/app/shared/interfaces/user';
import { IHttpRequestError } from 'src/app/shared/interfaces/http-error';

const actionNamespace = '[USER]' as const;
const loadUserActionName = 'loadUser' as const;
const loadUsersActionName = 'loadUsers' as const;

export const loadUsersBundle = createAsyncBundleWithClear(
  loadUsersActionName,
  actionNamespace
)<void, { users: IUser[] }, IHttpRequestError, void, void>();

export const loadUserBundle = createAsyncBundleWithClear(
  loadUserActionName,
  actionNamespace
)<{ userId: number }, { user: IUser }, IHttpRequestError, void, void>();
