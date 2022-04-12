import { AnyAction, createAsyncThunk, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux';
import { api } from '../../../api';

export const fetchUser = createAsyncThunk('application/fetchUser', async () => {
  const response = await api.get('/user');
  return response.data;
});

export const fetchCoreSettings = createAsyncThunk('application/fetchCoreSettings', async () => {
  const response = await api.get('/core-settings');
  return response.data;
});

export const thunkInitApp = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(fetchUser());
    dispatch(fetchCoreSettings());
  };
};
