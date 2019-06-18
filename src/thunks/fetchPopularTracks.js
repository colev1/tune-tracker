import { showTracks, isLoading } from '../actions';
import cleanTracks from '../helpers/cleanTracks'

export const fetchPopularTracks = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      const tracks = cleanTracks(result)
      dispatch(showTracks(tracks))
    } catch (err) {
      console.log(err)
    }
  }
}