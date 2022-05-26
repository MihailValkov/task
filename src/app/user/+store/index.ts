import { ActionReducerMap } from '@ngrx/store';
import { UserEffects } from './effects';
import { IUserState, userReducer } from './reducers';

export interface IUserModuleState {
  readonly user: IUserState;
}

export const reducers: ActionReducerMap<{}> = userReducer;
export const effects = [UserEffects];
