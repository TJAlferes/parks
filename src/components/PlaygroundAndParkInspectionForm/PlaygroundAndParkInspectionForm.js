import React from 'react';

import './playgroundAndParkInspectionForm.css';

const PlaygroundAndParkInspectionForm = props => {
  return (
    <div className="playground-and-park-inspection-form">
      <h1>
        {props.cityName} PARK DISTRICT
        PLAYGROUND AND PARK INSPECTION FORM
      </h1>
      <div>
        <div><label for="park">Park:</label><input name="park" type="text" /></div>
        <div><label for="date">Date:</label><input name="date" type="text" /></div>
        <div><label for="inspectedBy">Inspected By:</label><input name="inspectedBy" type="text" /></div>
      </div>
      <div>

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cityName: state.accountConfig.cityName
});

export default connect(mapStateToProps)(PlaygroundAndParkInspectionForm);