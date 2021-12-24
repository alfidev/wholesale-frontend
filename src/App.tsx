import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { applicationRoutes } from './common/router';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          login
        </Route>
        {applicationRoutes.map(
          ({ exact, path, component: RouteComponent }, index) => (
            <Route key={index} exact={exact} path={path}>
              <RouteComponent />
            </Route>
          ),
        )}
      </Switch>
    </Router>
  );
};

export default App;
