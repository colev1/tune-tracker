export const tracksReducer = (state=[], action) => {
	switch(action.type) {
  case "SHOW_TRACKS":
    return action.tracks
	default: 
		return state
	}
}