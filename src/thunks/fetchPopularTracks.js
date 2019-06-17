import { showTracks } from '../actions';

export const fetchPopularTracks = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      const tracks = result.loved;
      dispatch(showTracks(tracks))
    } catch (err) {
      console.log(err)
    }
  }
}