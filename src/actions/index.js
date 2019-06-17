export const searchSuccess = (tracks) => {
	return {
		type: 'SEARCH_SUCCESS',
		tracks
	}
}

export const showTracks = (tracks) => {
  return {
    type: 'SHOW_TRACKS',
    tracks
  }
}