export const logout = () => {
  localStorage.setItem('login', JSON.stringify(false));
  location.href = '/login';
};

export const login = () => {
  localStorage.setItem('login', JSON.stringify(true));
};

export const isUserLogged = () => {
  const loginData = localStorage.getItem('login');

  if (!loginData) return false;

  return JSON.parse(loginData);
};
