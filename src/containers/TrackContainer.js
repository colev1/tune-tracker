import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularTracks } from '../thunks/fetchPopularTracks';
import PropTypes from 'prop-types';
import Track from '../components/Track';


class TrackContainer extends Component {

  async componentDidMount() {
    const url = `http://theaudiodb.com/api/v1/json/1/mostloved.php?format=track`
    await this.props.fetchPopularTracks(url);
  }

  render() {
    const tracks = this.props.tracks.map(track => {
      return <Track track={track} key={track.id} />
    })

    if (this.props.isLoading) {
      return (
        <div className="loading-container">
          loading tracks...
        </div>
      )
    } else {
      return (
        <div>
          <div className='tracks-container'>
            {tracks}
          </div>
        </div>
      )
    }
  }
}

TrackContainer.propTypes = {
  tracks: PropTypes.array,
  fetchPopularTracks: PropTypes.func
}

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  fetchPopularTracks: (url) => dispatch(fetchPopularTracks(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(TrackContainer);