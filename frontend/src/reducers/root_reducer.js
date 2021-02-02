import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from "./errors_reducer";
import trips from './trip_reducer'
import items from './item_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  trips,
  items
});

export default RootReducer;