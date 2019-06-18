import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import Search from '../containers/Search';
import Header from '../containers/Header';
import Main from '../containers/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
    </div>
  );
}


export default connect()(App);