import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import searchTermReducer from './searchTermReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  searchterm: searchTermReducer
});

export default rootReducer;
