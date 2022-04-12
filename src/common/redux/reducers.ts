import { combineReducers } from '@reduxjs/toolkit';
import { applicationReducer } from '../init';

export const rootReducer = combineReducers({
  application: applicationReducer,
});
