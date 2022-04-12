import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { applicationRoutes, ROUTE_500, ROUTE_LOGIN } from './common/router';
import { Layout, LoginPage } from './modules/Layout';
import { useAppDispatch } from './common/redux';
import { useSelector } from 'react-redux';
import {
  thunkInitApp,
  getCoreSettingsIsError,
  getCoreSettingsIsLoading,
  getUserIsError,
  getUserIsLoading,
  isUserLogged,
} from './common/init';

const App = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const coreSettingsIsLoading = useSelector(getCoreSettingsIsLoading);
  const coreSettingsIsError = useSelector(getCoreSettingsIsError);
  const userIsLoading = useSelector(getUserIsLoading);
  const userIsError = useSelector(getUserIsError);
  const loginMatch = useRouteMatch(ROUTE_LOGIN);

  const userIsLogged = isUserLogged();

  useEffect(() => {
    dispatch(thunkInitApp());
  }, []);

  useEffect(() => {
    if (userIsError && coreSettingsIsError && history) history.push(ROUTE_500);
  }, [coreSettingsIsError, userIsError, history]);

  useEffect(() => {
    if (!userIsLogged && !loginMatch && history) history.push(ROUTE_LOGIN);
  }, [userIsLogged]);

  if (userIsLoading || coreSettingsIsLoading) return null;

  return (
    <Switch>
      <Route exact path={ROUTE_LOGIN}>
        <LoginPage />
      </Route>
      <Route exact path={ROUTE_500}>
        500
      </Route>
      {userIsLogged &&
        applicationRoutes.map(
          (
            {
              exact,
              path,
              component: RouteComponent,
              sidebarComponent: SidebarComponent,
              footerComponent: FooterComponent,
              menu,
            },
            index,
          ) => (
            <Route key={index} exact={exact} path={path}>
              <Layout
                sidebar={SidebarComponent && <SidebarComponent />}
                content={<RouteComponent />}
                footer={FooterComponent && <FooterComponent />}
                menu={menu}
              />
            </Route>
          ),
        )}
    </Switch>
  );
};

export default App;
