import React from 'react';
import './Track.scss'

const Track = ({track}) => {
  console.log(track)
  return (
    <div className='track'>
      <p> {track.strTrack} </p>
      <p> {track.strArtist}  </p>
      <p> {track.strAlbum} </p>
    </div>
  )
}

export default Track;
