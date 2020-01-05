
import { UPDATE_FILTERS } from '../../constants';

export const updateFilters = filters => ({
  type: UPDATE_FILTERS,
  payload: filters
});