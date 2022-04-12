import React, { useEffect } from 'react';
import { isUserLogged, login, logout } from '../../../common/init';
import { useHistory } from 'react-router-dom';
import { ROUTE_MAIN } from '../../../common/router';

export const LoginPage = () => {
  const history = useHistory();
  const userIsLogged = isUserLogged();

  useEffect(() => {
    if (userIsLogged) logout();
  }, []);

  const handleLogin = () => {
    login();
    history.push(ROUTE_MAIN);
  };

  return <div onClick={handleLogin}>loginButton</div>;
};
