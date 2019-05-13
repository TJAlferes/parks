import React from 'react';
import { withRouter } from 'react-router-dom';

import MobileHeader from './components/Header/mobile/MobileHeader';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import RoutesList from './routing/Routes';
import './app.css';

const App = props => {
  // Decide visual layout style:
  // 1. Determine if the user is currently at an authentication page
  let location = props.location;
  let isAccessing = location.pathname &&
  (
    location.pathname.match(/^\/staff\/register/) ||
    location.pathname.match(/^\/staff\/login/) ||
    location.pathname.match(/^\/user\/register/) ||
    location.pathname.match(/^\/user\/login/)
  );
  let layout = null;
  if (isAccessing) {
    // 2a. If they are, then render authentication pages layout
    layout = <div><RoutesList /></div>;
  } else {
    // 2b. Otherwise, render the normal layout
    //<div id="app" {...props}>
    layout = (
      <div id="app">
        <div>
          <div className="mobile_display">
            <MobileHeader />
          </div>
          <div className="desktop_display">
            <Header />
          </div>
        </div>
        <Main location={location}>
          <RoutesList />
        </Main>
        <Footer />
      </div>
    );
  }
  return layout;
}

export default withRouter(App);