import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './home.css';

const Home = props => (
  <div className="home">
    <h1>{props.cityName} PARK DISTRICT</h1>
    <Link to="/inspection-forms/playground-and-park">Playground and Park Inspection Form</Link>
  </div>
);

const mapStateToProps = state => ({
  cityName: state.accountConfig.cityName
});

export default connect(mapStateToProps)(Home);