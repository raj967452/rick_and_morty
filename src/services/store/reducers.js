import { combineReducers } from 'redux';
import characterSuccess from './characters/reducers';
import paginatorData from './paginator/reducers';
import filtersSuccess from './filters/reducers';

import { sortArgsForFilter } from './sort/reducers';


export default combineReducers({
  characterSuccess,
  paginatorData,
  filtersSuccess,
  sortArgsForFilter
});