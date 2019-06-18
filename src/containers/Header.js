import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Header.scss'

class Header extends Component {
  render() {
    return(
      <h1>
        top 50 tracks of all time!! 
      </h1>
    )
  }
}

export default connect()(Header);