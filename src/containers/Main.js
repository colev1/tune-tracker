import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPopularTracks} from '../thunks/fetchPopularTracks';
import PropTypes from 'prop-types';
import Track from '../components/Track'


class Main extends Component {
  async componentDidMount() {
    const url = `http://theaudiodb.com/api/v1/json/1/mostloved.php?format=track`    
    await this.props.fetchPopularTracks(url);
  }

  render() {
    const tracks = this.props.tracks.map(track => {
      // return (<div key={track.idTrack}> {track.strTrack} </div>)
      return <Track track={track} />
    })
    return(
      <div className='tracks-container'>
        {tracks}
      </div>
    )
  }
}

Main.propTypes = {
  tracks: PropTypes.array,
  fetchPopularTracks: PropTypes.func
}

const mapStateToProps = (state) => ({
  tracks: state.tracks
})

const mapDispatchToProps = (dispatch) => ({
  fetchPopularTracks: (url) => dispatch(fetchPopularTracks(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(Main);