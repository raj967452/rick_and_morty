import { combineReducers } from 'redux';
import characterReducer from './characters/reducers';
import filtersReducer from './filters/reducers';
import sortReducer from './sort/reducers';

export default combineReducers({
  characters: characterReducer,  
  filters: filtersReducer,
  sort: sortReducer
});