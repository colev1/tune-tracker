import React from 'react';
import { connect } from 'react-redux'
import Header from '../containers/Header';
import Main from '../containers/TrackContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default connect()(App);