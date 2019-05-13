import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  authDisplay,
  authReset,

  authManagerLoginSucceeded,
  authManagerLoginFailed,
  authManagerLogoutSucceeded,
  authManagerLogoutFailed,
  authManagerRegisterSucceeded,
  authManagerRegisterFailed,

  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,
  authUserRegisterSucceeded,
  authUserRegisterFailed
} from '../actions/index';

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://CHANGE-ME-SOMETHING-AT.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';



/*
Shared
*/
export function* authCheckStateSaga() {
  yield put(authCheckState());
  // axios over to authEndpoint
  // eh??? just put? yield call ([authCheckState]);  // check syntax on redux-saga docs
}



/*
Manager
*/
export function* authManagerLoginSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/manager/auth/login`,
      {managerInfo: {managerName: action.managerName, password: action.password}},
      {withCredentials: true}
    );
    const { managerName, avatar } = response.data;
    yield put(authDisplay(managerName, avatar));
    //history.push(redirectPath);
    yield put(authManagerLoginSucceeded());
  } catch(err) {
    yield put(authManagerLoginFailed());
  }
}

export function* authManagerLogoutSaga() {
  try {
    const loggedOut = yield axios.post(
      `${endpoint}/manager/auth/logout`,
      {},
      {withCredentials: true}
    );  // change to .delete()?
    if (loggedOut) yield put(authManagerLogoutSucceeded());
  } catch(err) {
    yield put(authManagerLogoutFailed());
  }
}

export function* authManagerRegisterSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/manager/auth/register`,
      {managerInfo: {managerName: action.managerName, password: action.password}},
      {withCredentials: true}
    );
    //history.push(redirectPath);
    yield put(authManagerRegisterSucceeded());
  } catch(err) {
    yield put(authManagerRegisterFailed());
  }
}



/*
User
*/
export function* authUserLoginSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/user/auth/login`,
      {userInfo: {username: action.username, password: action.password}},
      {withCredentials: true}
    );
    const { username, avatar } = response.data;
    yield put(authDisplay(username, avatar));
    yield put(authUserLoginSucceeded());
  } catch(err) {
    yield put(authUserLoginFailed());
  }
}

export function* authUserLogoutSaga() {
  try {
    const loggedOut = yield axios.post(
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
      );  // change to .delete()?
    if (loggedOut) yield put(authUserLogoutSucceeded());
  } catch(err) {
    yield put(authUserLogoutFailed());
  }
}

export function* authUserRegisterSaga(action) {
  try {
    const response = yield axios.post(
      `${endpoint}/user/auth/register`,
      {userInfo: {username: action.username, password: action.password}},
      {withCredentials: true}
    );
    //history.push(redirectPath);
    yield put(authUserRegisterSucceeded());
  } catch(err) {
    yield put(authUserRegisterFailed());
  }
}
