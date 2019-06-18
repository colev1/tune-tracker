export const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_TRACKS':
      return action.tracks
    default:
      return state
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}