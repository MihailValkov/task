import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { StoreRootState } from '.';
import { RouterStateUrl } from './route-serializer';

export const getRouterState = (state: StoreRootState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState<RouterStateUrl>) => state.state
);

export const getCurrentRouteStateParams = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState<RouterStateUrl>) => state.state.params
);
