import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Search from '../containers/Search';

// import { simpleAction } from './actions/simpleAction';


function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}


export default connect()(App);