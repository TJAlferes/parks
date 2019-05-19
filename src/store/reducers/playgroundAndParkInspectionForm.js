import * as actionTypes from '../actions/actionTypes';
//import update from 'immutability-helper';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// TO DO ASAP: IMPLEMENT AS KIND OF "FINITE STATE MACHINE"

// flatten this (?)
const initialState = {
  isLoading: false,
  isSaving: false,
  park: "",
  inspectorDate: "",
  inspector: "",
  supervisor: "",
  supervisorDate: "",
  surface: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  structures: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    6: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    7: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  swings: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    6: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    7: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    8: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    9: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  slides: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  whirls: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    6: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  springs: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  misc: {
    1: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    2: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    3: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    4: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    5: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    6: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    7: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    8: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    9: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    10: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    11: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    12: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    13: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    14: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    15: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    16: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    17: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    18: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    19: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    20: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    21: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    22: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    23: {okay: "", fix: "", nap: "", description: "", noteNum: ""},
    24: {okay: "", fix: "", nap: "", description: "", noteNum: ""}
  },
  notes: {
    1: {noteNumber: "", comment: ""},
    2: {noteNumber: "", comment: ""},
    3: {noteNumber: "", comment: ""},
    4: {noteNumber: "", comment: ""},
    5: {noteNumber: "", comment: ""},
    6: {noteNumber: "", comment: ""},
    7: {noteNumber: "", comment: ""},
    8: {noteNumber: "", comment: ""},
    9: {noteNumber: "", comment: ""},
    10: {noteNumber: "", comment: ""},
    11: {noteNumber: "", comment: ""},
    12: {noteNumber: "", comment: ""},
    13: {noteNumber: "", comment: ""},
    14: {noteNumber: "", comment: ""},
    15: {noteNumber: "", comment: ""},
    16: {noteNumber: "", comment: ""},
    17: {noteNumber: "", comment: ""},
    18: {noteNumber: "", comment: ""},
    19: {noteNumber: "", comment: ""},
    20: {noteNumber: "", comment: ""}
  }
};

const handleInputChange = (state, action) => {

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