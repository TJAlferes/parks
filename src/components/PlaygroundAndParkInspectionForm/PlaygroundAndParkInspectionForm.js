import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import './playgroundAndParkInspectionForm.css';

const PlaygroundAndParkInspectionForm = props => {
  const [ notes, setNotes ] = useState([
    {row: 1, noteNumber: "", input: ""},
    {row: 2, input: ""},
    {row: 3, input: ""},
    {row: 4, input: ""},
    {row: 5, input: ""},
    {row: 6, input: ""},
    {row: 7, input: ""},
    {row: 8, input: ""},
    {row: 9, input: ""},
    {row: 10, input: ""},
    {row: 11, input: ""},
    {row: 12, input: ""},
    {row: 13, input: ""},
    {row: 14, input: ""},
    {row: 15, input: ""},
    {row: 16, input: ""},
    {row: 17, input: ""},
    {row: 18, input: ""},
    {row: 19, input: ""},
    {row: 20, input: ""}
  ]);

  // which way to go? remember you'll likely move into redux anyway
  
  const [ noteRow1, setNoteRow1 ] = useState({noteNumber: "", comment: ""});
  const [ noteRow2, setNoteRow2 ] = useState({noteNumber: "", comment: ""});
  const [ noteRow3, setNoteRow3 ] = useState({noteNumber: "", comment: ""});

  const handleNotesSectionChange = (setter, e) => {
    if (e.target.name === 'noteNumber') {
      [setter]({noteNumber: e.target.value});
    } else if (e.target.name === 'comment') {
      [setter]({comment: e.target.value});
    }
  };

  const renderRow = (description = '') => (
    <Fragment>
      <div className="cell"><div className="content"><input className="radio" type="radio" /></div></div>
      <div className="cell"><div className="content"><input className="radio" type="radio" /></div></div>
      <div className="cell"><div className="content"><input className="radio" type="radio" /></div></div>
      <div className="cell"><div className="content"><span className="description">{description}</span></div></div>
      <div className="cell"><div className="content"><input className="note-number" type="input" /></div></div>
    </Fragment>
  );

  const renderNotesSection = (
    <div className="notes-section">
      <div className="notes-section__head-group">
        <span className="notes-section__head">Note#</span>
        <span className="notes-section__head">Comments/Repairs/Vandalism</span>
      </div>

      <div className="notes-section__cell-group">
        {notes.map(note => (
          <Fragment>
            <div className="cell">
              <div className="content">
                <input
                  className="notes-section__cell-group__note-number"
                  type="input"
                  value={note.noteNumber}
                  onChange={e => handleNotesSectionNotesNumberChange(e)}
                />
              </div>
            </div>
            <div className="cell"><div className="content"><input className="notes-section__cell-group__input" type="input" value={note.input} /></div></div>
          </Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="playground-and-park-inspection-form">

      <h1>
        {props.cityName} PARK DISTRICT
        <br />
        PLAYGROUND AND PARK INSPECTION FORM
      </h1>

      <div className="top-input-group">
        <div className="pair"><label htmlFor="park">Park:</label><input name="park" type="text" /></div>
        <div className="pair"><label htmlFor="date">Date:</label><input name="date" type="text" /></div>
        <div className="pair"><label htmlFor="inspectedBy">Inspected By:</label><input name="inspectedBy" type="text" /></div>
      </div>

      <div className="grid-list">
        <div className="head-group">
          <span className="head head-type-1">OK</span>
          <span className="head head-type-1">FIX</span>
          <span className="head head-type-1">N/A</span>
          <span className="head head-type-1">DESCRIPTION</span>
          <span className="head head-type-2">See note # under comments</span>
        </div>

        <div className="cell-group-header">PLAYGROUND SURFACE AREA</div>
        <div className="cell-group">
          {renderRow('Footings exposed, cracked, or loose in ground?')}
          {renderRow('Adequate amount of safety surface? Low spots?')}
          {renderRow('Trip hazards, tree roots or rocks in play area?')}
          {renderRow('Broken glass or liter in play area?')}
        </div>

        <div className="cell-group-header">PLAY STRUCTURES / CLIMBERS</div>
        <div className="cell-group">
          {renderRow('Broken/bent support posts?')}
          {renderRow('Missing plugs or caps?')}
          {renderRow('Broken or loose clamps?')}
          {renderRow('Peeling or chipped paint?')}
          {renderRow('Broken, loose, or missing rails/rungs/steps?')}
          {renderRow('Vinyl coated decks and steps in good condition?')}
          {renderRow('Loose, missing, worn, rusted or protruding hardware?')}
        </div>

        <div className="cell-group-header">SWINGS</div>
        <div className="cell-group">
          {renderRow('Broken, twisted, worn, or rusted chains?')}
          {renderRow('Worn, rusted, or broken swing hangers?')}
          {renderRow('Open or worn "S" hooks?')}
          {renderRow('Missing, worn, or cracked swing seats?')}
          {renderRow('Swing frame damaged?')}
          {renderRow('Swing chain wrapped around top rail?')}
          {renderRow('Loose, missing, or protruding bolts?')}
          {renderRow('Proper grease in tire swing assembly?')}
          {renderRow('Tire swing in good condition?')}
        </div>

        <div className="cell-group-header">SLIDE</div>
        <div className="cell-group">
          {renderRow('Slide bedways have any imperfections?')}
          {renderRow('Handrails loose or missing?')}
          {renderRow('Slide flush with entry platform?')}
          {renderRow('Safety rails/sitdown canopy present and in good condition?')}
          {renderRow('Worn, loose, rusted, or protruding bolts?')}
        </div>

        <div className="cell-group-header">WHIRLS</div>
        <div className="cell-group">
          {renderRow('Excessive play in whirl?')}
          {renderRow('Deck sections & center plate secure?')}
          {renderRow('Handrails secure?')}
          {renderRow('Underside of deck edge sharp?')}
          {renderRow('Loose, missing, rusted, or worn fastners?')}
          {renderRow('Needs painting?')}
        </div>

        <div className="cell-group-header">SPRING TOYS</div>
        <div className="cell-group">
          {renderRow('Coil or "C" spring loose or broken?')}
          {renderRow('Loose, missing, rusted, or protruding bolts?')}
          {renderRow('Rough or sharp edges?')}
          {renderRow('Missing or broken handholds/footrests?')}
          {renderRow('Back Hoe Digger')}
        </div>
      </div>

      <div className="grid-list">
        <div className="head-group">
          <span className="head head-type-1">OK</span>
          <span className="head head-type-1">FIX</span>
          <span className="head head-type-1">N/A</span>
          <span className="head head-type-1">DESCRIPTION Miscellaneous Items</span>
          <span className="head head-type-2">See note # under comments</span>
        </div>
        <hr className="black-hr" />
        <div className="cell-group">
          {renderRow("Bleachers/Player's Benches")}
          {renderRow('Baseball/Softball backstops and fencing')}
          {renderRow('Basketball board, rim & nets')}
          {renderRow('Basketball court surface')}
        </div>
      </div>

      {renderNotesSection}

      <div className="bottom-input-group">
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