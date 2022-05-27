import { ActionReducerMap } from '@ngrx/store';
import { StoreRootState } from 'src/app/+store';
import { UserEffects } from './effects';
import { IUserState, userReducer } from './reducers';

export interface IUserModuleState extends StoreRootState {
  readonly user: IUserState;
}

export const reducers: ActionReducerMap<{}> = userReducer;
export const effects = [UserEffects];
