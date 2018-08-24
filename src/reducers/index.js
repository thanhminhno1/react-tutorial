import {combineReducers} from 'redux';
import itemReducer from './item-reducer';

const allReducers = combineReducers({
  items: itemReducer
});

export default allReducers;
