import { ActionReducerMap } from '@ngrx/store';
import { StoreRootState } from 'src/app/+store';
import { UserEffects } from './effects';
import { IUserListState, userListReducer } from './reducers';

export interface IUserModuleState extends StoreRootState {
  readonly user: IUserListState;
}

export const reducers: ActionReducerMap<{}> = userListReducer;
export const effects = [UserEffects];
