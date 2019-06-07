import { combineReducers } from 'redux';

import search from './reducers/search';
import player from './reducers/player';
import lyrics from './reducers/lyrics';

const rootReducer = combineReducers({
  search,
  player,
  lyrics
});

export default rootReducer;