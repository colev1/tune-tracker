import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>
          top 50 tracks of all time:
        </h1>
        <p> source: theaudiodb.com </p>
      </div>
    )
  }
}

export default Header;