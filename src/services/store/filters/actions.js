
import { UPDATE_FILTERS, FETCH_CHARACTER_PENDING, FETCH_CHARACTER, FETCH_CHARACTER_ERROR } from '../../constants';

export const updateFilters = filters => ({
  type: UPDATE_FILTERS,
  payload: filters
});


