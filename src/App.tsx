import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const applicationRoutes: RouteItem[] = [
  {
    path: '/',
    exact: true,
    component: <></>,
  },
  {
    path: '/catalog',
    exact: false,
    component: <></>,
  },
  {
    path: '/baskets',
    exact: false,
    component: <></>,
  },
  {
    path: '/orders',
    exact: false,
    component: <></>,
  },
  {
    path: '/profile',
    exact: false,
    component: <></>,
  },
];

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          login
        </Route>
        {applicationRoutes.map(
          ({ exact, path, component: Component }, index) => (
            <Route key={index} exact={exact} path={path}>
              <Component />
            </Route>
          ),
        )}
      </Switch>
    </Router>
  );
};

export default App;
