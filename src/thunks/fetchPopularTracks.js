import { showTracks } from '../actions';



export const fetchPopularTracks = (url) => {
  console.log('url',url)
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      console.log(response.ok)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      console.log('result',result)
      const tracks = result.loved;
      dispatch(showTracks(tracks))
    } catch (err) {
      console.log(err)
    }
  }
}