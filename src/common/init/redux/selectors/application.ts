import { createSelector } from '@reduxjs/toolkit';
import { getApplicationState } from '../../../redux/selectors';

export const getCoreSettings = createSelector(getApplicationState, ({ coreSettings }) => coreSettings);
export const getCoreSettingsIsLoading = createSelector(
  getApplicationState,
  ({ coreSettingsIsLoading }) => coreSettingsIsLoading,
);
export const getCoreSettingsIsError = createSelector(
  getApplicationState,
  ({ coreSettingsIsError }) => coreSettingsIsError,
);

export const getUser = createSelector(getApplicationState, ({ coreSettings }) => coreSettings);
export const getUserIsLoading = createSelector(getApplicationState, ({ userIsLoading }) => userIsLoading);
export const getUserIsError = createSelector(getApplicationState, ({ userIsError }) => userIsError);
