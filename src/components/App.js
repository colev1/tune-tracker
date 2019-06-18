import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './TrackContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default connect()(App);