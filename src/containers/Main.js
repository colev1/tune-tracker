import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPopularTracks} from '../thunks/fetchPopularTracks';
import PropTypes from 'prop-types';


class Main extends Component {
  async componentDidMount() {
    await this.props.fetchPopularTracks();
  }

  render() {
    return(
      <div>
        Main
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchPopularTracks: () => dispatch(fetchPopularTracks)
})


export default connect(null, mapDispatchToProps)(Main);