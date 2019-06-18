import { combineReducers } from 'redux';
import { tracksReducer, isLoading } from './tracksReducer';


const rootReducer = combineReducers({
  tracks: tracksReducer,
  isLoading: isLoading
});

export default rootReducer;