import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Search from '../containers/Search';
import Header from '../containers/Header';
import Main from '../containers/Main';



// import { simpleAction } from './actions/simpleAction';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}


export default connect()(App);