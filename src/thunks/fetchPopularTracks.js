import { showTracks } from '../actions';
import cleanTracks from '../helpers/cleanTracks'

export const fetchPopularTracks = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      const tracks = cleanTracks(result)
      dispatch(showTracks(tracks))
    } catch (err) {
      console.log(err)
    }
  }
}