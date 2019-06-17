import React from 'react';
import './Track.scss'

const Track = ({track}) => {
  const {name, artist, album, id, image} = track;
  return (
    <div className='track' key={id}>
      <div className="description">
        <p> {name} </p>
        <p> {artist}  </p>
        <p> {album} </p>
      </div>
      <img src={image} />
    </div>
  )
}

export default Track;
