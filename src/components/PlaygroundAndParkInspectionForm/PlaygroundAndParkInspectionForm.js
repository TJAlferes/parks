import React from 'react';
import { connect } from 'react-redux';

import './playgroundAndParkInspectionForm.css';

const PlaygroundAndParkInspectionForm = props => {
  return (
    <div className="playground-and-park-inspection-form">

      <h1>
        {props.cityName} PARK DISTRICT
        <br />
        PLAYGROUND AND PARK INSPECTION FORM
      </h1>

      <div>
        <div className="pair"><label htmlFor="park">Park:</label><input name="park" type="text" /></div>
        <div className="pair"><label htmlFor="date">Date:</label><input name="date" type="text" /></div>
        <div className="pair"><label htmlFor="inspectedBy">Inspected By:</label><input name="inspectedBy" type="text" /></div>
      </div>

      <div className="gridlist">
        <div>
          <span>OK</span><span>FIX</span><span>N/A</span><span>DESCRIPTION</span><span>See note # under comments</span>
        </div>
      </div>

      <div>
        <div className="pair-supervisor"><label htmlFor="park">Reviewed by Supervisor:</label><input name="reviewedBySupervisor" type="text" /></div>
        <div className="pair-supervisor"><label htmlFor="supervisorDate">Date:</label><input name="supervisorDate" type="text" /></div>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  cityName: state.accountConfig.cityName
});

export default connect(mapStateToProps)(PlaygroundAndParkInspectionForm);