import * as actionTypes from '../actions/actionTypes';
//import update from 'immutability-helper';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// TO DO ASAP: IMPLEMENT AS KIND OF "FINITE STATE MACHINE"

// flatten this (?)
const initialState = {
  isLoading: false,
  isSaving: false
};

const loadForm = (state, action) => {
  //
  return {...state, ...{payload: action.payload}};
};

const saveForm = (state, action) => {
  //
  return {...state, ...{payload: action.payload}};
};

// remember Nir Kofman's actions patterns
const playgroundAndParkInspectionFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_LOAD: return loadForm(state, action);
    case actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_SAVE: return saveForm(state, action);
  }
  return state;
};

export default playgroundAndParkInspectionFormReducer;