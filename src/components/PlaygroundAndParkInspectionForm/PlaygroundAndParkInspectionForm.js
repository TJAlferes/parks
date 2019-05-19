import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './playgroundAndParkInspectionForm.css';
import { playgroundAndParkInspectionFormHandleInputChange } from '../../store/actions/index';

const PlaygroundAndParkInspectionForm = props => {
  /*
  const handleNotesSectionChange = (row, e) => {
    if (e.target.name === 'noteNumber') {
      setNotes(prevState => ({
        ...prevState, [row]: {
          ...prevState[[row]], noteNumber: e.target.value
        }
      }));
    } else if (e.target.name === 'comment') {
      setNotes(prevState => ({
        ...prevState, [row]: {
          ...prevState[[row]], comment: e.target.value
        }
      }));
    }
  };
  */

  const renderRow = (description = '') => (
    <Fragment>
      <div className="cell">
        <div className="content">
          <select className="mark" onChange={e => handleMarkChange(e)}>
            <option value=""></option>
            <option value="okay">V</option>
            <option value="remedied">X</option>
            <option value="workRequestWritten">O</option>
          </select>
        </div>
      </div>
      <div className="cell">
        <div className="content">
          <select className="mark" onChange={e => handleMarkChange(e)}>
            <option value=""></option>
            <option value="okay">V</option>
            <option value="remedied">X</option>
            <option value="workRequestWritten">O</option>
          </select>
        </div>
      </div>
      <div className="cell">
        <div className="content">
          <select className="mark" onChange={e => handleMarkChange(e)}>
            <option value=""></option>
            <option value="okay">V</option>
            <option value="remedied">X</option>
            <option value="workRequestWritten">O</option>
          </select>
        </div>
      </div>
      <div className="cell"><div className="content"><span className="description">{description}</span></div></div>
      <div className="cell"><div className="content"><input className="note-number" type="input" /></div></div>
    </Fragment>
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
          {renderRow('Tennis nets')}
          {renderRow('Tennis court surface/fencing')}
          {renderRow('Soccer goals/nets')}
          {renderRow('Park-shelters/Gazebos')}
          {renderRow('Park gates')}
          {renderRow('Picnic tables (seats & tops)')}
          {renderRow('Park benches')}
          {renderRow('Trash containers')}
          {renderRow('Drinking fountains')}
          {renderRow('Grills')}
          {renderRow('Park signs')}
          {renderRow('Fencing/guardrail')}
          {renderRow('Bike racks')}
          {renderRow('Retaining wall')}
          {renderRow('Light pole')}
          {renderRow('Sidewalks')}
          {renderRow('Parking bumpers / dumpster enclosures')}
          {renderRow('Any tree branch below 7 feet?')}
          {renderRow('Area clear of glass & litter?')}
          {renderRow('Any vandalism/graffiti?')}
        </div>
      </div>

      <div className="notes-section">
        <div className="notes-section__head-group">
          <span className="notes-section__head">Note#</span>
          <span className="notes-section__head">Comments/Repairs/Vandalism</span>
        </div>
        <hr className="black-hr" />

        <div className="notes-section__cell-group">
          {/* do you need Object.assign({}, ...Object.keys etc.) here? */}
          {console.log(Object.keys(notes))}
          {Object.keys(notes).map((note, i) => (
            <Fragment>
              <div className="cell">
                <div className="content">
                  <input
                    className="notes-section__cell-group__note-number"
                    type="input"
                    value={note.noteNumber}
                    onChange={e => handleNotesSectionChange(i + 1, e)}
                  />
                </div>
              </div>
              <div className="cell">
                <div className="content">
                  <input
                    className="notes-section__cell-group__comment"
                    type="input"
                    value={note.comment}
                    onChange={e => handleNotesSectionChange(i + 1, e)}
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="bottom-input-group">
        <div className="pair-supervisor"><label htmlFor="park">Reviewed by Supervisor:</label><input name="reviewedBySupervisor" type="text" /></div>
        <div className="pair-supervisor"><label htmlFor="supervisorDate">Date:</label><input name="supervisorDate" type="text" /></div>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  cityName: state.accountConfig.cityName,
  park: state.playgroundAndParkInspectionForm.park,
  inspectorDate: state.playgroundAndParkInspectionForm.inspectorDate,
  inspector: state.playgroundAndParkInspectionForm.inspector,
  supervisor: state.playgroundAndParkInspectionForm.supervisor,
  supervisorDate: state.playgroundAndParkInspectionForm.supervisorDate,
  surface: state.playgroundAndParkInspectionForm.surface,
  structures: state.playgroundAndParkInspectionForm.structures,
  swings: state.playgroundAndParkInspectionForm.swings,
  slides: state.playgroundAndParkInspectionForm.slides,
  whirls: state.playgroundAndParkInspectionForm.whirls,
  springs: state.playgroundAndParkInspectionForm.springs,
  misc: state.playgroundAndParkInspectionForm.misc,
  notes: state.playgroundAndParkInspectionForm.notes
});

const mapDispatchToProps = dispatch => ({
  playgroundAndParkInspectionFormHandleInputChange: (section, row, inputName, inputValue) => dispatch(playgroundAndParkInspectionFormHandleInputChange(section, row, inputName, inputValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundAndParkInspectionForm);