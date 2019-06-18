import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Header.scss'

class Header extends Component {
  render() {
    return(
      <h1>
        Tune Tracker
      </h1>
    )
  }
}

export default connect()(Header);