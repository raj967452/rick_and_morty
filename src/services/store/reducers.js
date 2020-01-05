import { combineReducers } from 'redux';
import characterSuccess from './characters/reducers';
import filtersSuccess from './filters/reducers';
import { sortArgsForFilter } from './sort/reducers';

export default combineReducers({
  characterSuccess,
  filtersSuccess,
  sortArgsForFilter
});