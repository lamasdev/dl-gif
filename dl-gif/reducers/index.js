import { combineReducers } from 'redux';
import gifsReducer from './gifs_reducer';

const rootReducer = combineReducers({
  gifs: gifsReducer,
});

export default rootReducer;
