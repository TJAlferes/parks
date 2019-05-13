import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  playgroundAndParkInspectionFormLoad,
  playgroundAndParkInspectionFormLoadSucceeded,
  playgroundAndParkInspectionFormLoadFailed,
  playgroundAndParkInspectionFormSave,
  playgroundAndParkInspectionFormSaveSucceeded,
  playgroundAndParkInspectionFormSaveFailed
} from '../actions/index';

/*
playgroundAndParkInspectionForm -- authenticated load/save to/from MongoDB
*/

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://CHANGE-ME-SOMETHING-AT.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';

// TO DO: get up for managers too

export function* playgroundAndParkInspectionFormLoadSaga() {
  try {
    yield put(authCheckState());  // yield call(authCheckStateSaga()); ?
    axios.post(`${endpoint}/user/auth`, {});
    if (user) {
      yield put(playgroundAndParkInspectionFormLoad());
      axios.post(`${endpoint}/user/forms`, {});
      yield put(playgroundAndParkInspectionFormLoadSucceeded());
    }
  } catch (error) {
    yield put(playgroundAndParkInspectionFormLoadFailed(error));
  }
};

export function* playgroundAndParkInspectionFormSaveSaga() {
  try {
    yield put(authCheckState());
    const user = yield call(axios.post, `${endpoint}/user/auth`, {});
    if (user) {
      yield put(playgroundAndParkInspectionFormSave());
      yield call(axios.post, `${endpoint}/user/forms`, {});
      yield put(playgroundAndParkInspectionFormSaveSucceeded());
    }
  } catch (error) {
    yield put(playgroundAndParkInspectionFormSaveFailed(error));
  }
};