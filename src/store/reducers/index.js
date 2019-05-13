import { combineReducers } from 'redux';

import authReducer from './auth';
//import themeReducer from './theme';



/*
import all reducers,
combine them into a single "root" reducer,
and export it (to be used in src/index.js)
*/

const rootReducer = combineReducers({
  auth: authReducer,
  //theme: themeReducer
});

export default rootReducer;