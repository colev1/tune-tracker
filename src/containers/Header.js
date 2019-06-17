import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return(
      <div>
        Tune Tracker
      </div>
    )
  }
}

export default connect()(Header);