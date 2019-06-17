import {showTracks} from '../actions';



export const fetchPopularTracks = (url) => {
  const url = `theaudiodb.com/api/v1/json/1/mostloved.php?format=track`;
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      const tracks = result.data;
      dispatch(showTracks(tracks))
    } catch (err) {
      console.log(err)
    }
  }
}