import { createSlice } from '@reduxjs/toolkit';
import { fetchCoreSettings, fetchUser } from '../actions';
import { ApplicationInitialState, CoreSettings, User } from '../types';

const userInitialState: User = {
  id: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  manager: {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  },
};

const coreSettingsInitialState: CoreSettings = {
  loginMode: '',
};

const applicationInitialState: ApplicationInitialState = {
  user: userInitialState,
  userIsLoading: false,
  userIsError: false,
  coreSettings: coreSettingsInitialState,
  coreSettingsIsLoading: false,
  coreSettingsIsError: false,
};

const applicationSlice = createSlice({
  name: 'user',
  initialState: applicationInitialState,
  reducers: {},
  extraReducers: builders => {
    builders
      .addCase(fetchUser.pending, state => {
        state.user = userInitialState;
        state.userIsLoading = true;
        state.userIsError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userIsLoading = false;
      })
      .addCase(fetchUser.rejected, state => {
        state.userIsLoading = false;
        state.userIsError = true;
      })
      .addCase(fetchCoreSettings.pending, state => {
        state.coreSettings = coreSettingsInitialState;
        state.coreSettingsIsLoading = true;
        state.coreSettingsIsError = false;
      })
      .addCase(fetchCoreSettings.fulfilled, (state, action) => {
        state.coreSettings = action.payload;
        state.coreSettingsIsLoading = false;
      })
      .addCase(fetchCoreSettings.rejected, state => {
        state.coreSettingsIsLoading = false;
        state.coreSettingsIsError = true;
      });
  },
});

export default applicationSlice.reducer;
