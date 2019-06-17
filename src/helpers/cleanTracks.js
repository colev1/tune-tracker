const cleanTracks = (tracks) => {
  return tracks.loved.map(track => ({
    id: track.idTrack,
    name: track.strTrack,
    album: track.strAlbum,
    artist: track.strAlbum,
    image: track.strTrackThumb
  }))
}

export default cleanTracks;