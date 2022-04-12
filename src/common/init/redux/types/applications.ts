export type UserManager = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  manager: UserManager;
};

export type CoreSettings = {
  loginMode: string;
};

export type ApplicationInitialState = {
  user: User;
  userIsLoading: boolean;
  userIsError: boolean;
  coreSettings: CoreSettings;
  coreSettingsIsLoading: boolean;
  coreSettingsIsError: boolean;
};
