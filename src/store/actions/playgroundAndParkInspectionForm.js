import * as actionTypes from './actionTypes';

/*
PlaygroundAndParkInspectionForm -- core functionality
*/

export const playgroundAndParkInspectionFormHandleInputChange = () => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_HANDLE_INPUT_CHANGE,
  section,
  row,
  inputName,
  inputValue
});



/*
PlaygroundAndParkInspectionForm -- save and load the form to and from MongoDB
*/

export const playgroundAndParkInspectionFormLoad = () => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_LOAD
});

export const playgroundAndParkInspectionFormLoadSucceeded = () => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_LOAD_SUCCEEDED
});

export const playgroundAndParkInspectionFormLoadFailed = error => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_LOAD_FAILED,
  error
});



export const playgroundAndParkInspectionFormSave = () => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_SAVE
});

export const playgroundAndParkInspectionFormSaveSucceeded = () => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_SAVE_SUCCEEDED
});

export const playgroundAndParkInspectionFormSaveFailed = error => ({
  type: actionTypes.PLAYGROUND_AND_PARK_INSPECTION_FORM_SAVE_FAILED,
  error
});
