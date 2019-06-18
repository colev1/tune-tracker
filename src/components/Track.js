import React from 'react';
import './Track.scss'
import disc from '../disc.png'

const Track = ({track}) => {
  let { name, artist, album, id, image } = track;
  if(!image) {
    image = disc;
  }
  return (
    <div className='track' key={id}>
      <div className="description">
        <p> Track: {name} </p>
        <p> Artist: {artist}  </p>
        <p> Album: {album} </p>
      </div>
        <img src={image} alt="album"/>
    </div>
  )
}

export default Track;
