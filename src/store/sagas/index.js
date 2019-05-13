import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authCheckStateSaga,
  authManagerRegisterSaga,
  authManagerLoginSaga,
  authManagerLogoutSaga,
  authUserRegisterSaga,
  authUserLoginSaga,
  authUserLogoutSaga
} from './auth';
import {
  playgroundAndParkInspectionFormLoadSaga,
  playgroundAndParkInspectionFormSaveSaga
} from './playgroundAndParkInspectionForm';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),

    takeEvery(actionTypes.AUTH_MANAGER_REGISTER, authManagerRegisterSaga),
    takeEvery(actionTypes.AUTH_MANAGER_LOGIN, authManagerLoginSaga),
    takeEvery(actionTypes.AUTH_MANAGER_LOGOUT, authManagerLogoutSaga),

    takeEvery(actionTypes.AUTH_USER_REGISTER, authUserRegisterSaga),
    takeEvery(actionTypes.AUTH_USER_LOGIN, authUserLoginSaga),
    takeEvery(actionTypes.AUTH_USER_LOGOUT, authUserLogoutSaga),
  ]);
}

export function* watchPlaygroundAndParkInspectionForm() {
  yield all([
    takeEvery(actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_LOAD, playgroundAndParkInspectionFormLoadSaga),
    takeEvery(actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_SAVE, playgroundAndParkInspectionFormSaveSaga)
  ]);
}