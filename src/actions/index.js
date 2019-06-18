export const showTracks = (tracks) => ({
  type: 'SHOW_TRACKS',
  tracks
})

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}