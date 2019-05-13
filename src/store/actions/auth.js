import * as actionTypes from './actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

// NOTE: use something like auth0 or okta in prod for an app like this



/*
auth -- general
*/
export const authCheckState = () => ({type: actionTypes.AUTH_CHECK_STATE});
export const authDisplay = (authname, avatar) => ({
  type: actionTypes.AUTH_DISPLAY,
  authname,
  avatar
});
export const authReset = () => ({type: actionTypes.AUTH_RESET});



/*
auth -- users
*/

// registration
export const authUserRegister = (username, password) => ({
  type: actionTypes.AUTH_USER_REGISTER,
  username,
  password
});
export const authUserRegisterSucceeded = () => ({type: actionTypes.AUTH_USER_REGISTER_SUCCEEDED});
export const authUserRegisterFailed = () => ({type: actionTypes.AUTH_USER_REGISTER_FAILED});

// login
export const authUserLogin = (username, password) => ({
  type: actionTypes.AUTH_USER_LOGIN,
  username,
  password
});
export const authUserLoginSucceeded = () => ({type: actionTypes.AUTH_USER_LOGIN_SUCCEEDED});
export const authUserLoginFailed = () => ({type: actionTypes.AUTH_USER_LOGIN_FAILED});

// logout
export const authUserLogout = () => ({type: actionTypes.AUTH_USER_LOGOUT});
export const authUserLogoutSucceeded = () => ({type: actionTypes.AUTH_USER_LOGOUT_SUCCEEDED});
export const authUserLogoutFailed = () => ({type: actionTypes.AUTH_USER_LOGOUT_FAILED});



/*
auth -- managers
*/

// registration
export const authManagerRegister = (managerName, password) => ({
  type: actionTypes.AUTH_MANAGER_REGISTER,
  managerName,
  password
});
export const authManagerRegisterSucceeded = () => ({type: actionTypes.AUTH_MANAGER_REGISTER_SUCCEEDED});
export const authManagerRegisterFailed = () => ({type: actionTypes.AUTH_MANAGER_REGISTER_FAILED});

// login
export const authManagerLogin = (managerName, password) => ({
  type: actionTypes.AUTH_MANAGER_LOGIN,
  managerName,
  password
});
export const authManagerLoginSucceeded = () => ({type: actionTypes.AUTH_MANAGER_LOGIN_SUCCEEDED});
export const authManagerLoginFailed = () => ({type: actionTypes.AUTH_MANAGER_LOGIN_FAILED});

// logout
export const authManagerLogout = () => ({type: actionTypes.AUTH_MANAGER_LOGOUT});
export const authManagerLogoutSucceeded = () => ({type: actionTypes.AUTH_MANAGER_LOGOUT_SUCCEEDED});
export const authManagerLogoutFailed = () => ({type: actionTypes.AUTH_MANAGER_LOGOUT_FAILED});
