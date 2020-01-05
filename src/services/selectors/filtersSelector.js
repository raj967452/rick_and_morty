import { createSelector } from 'reselect';
import orderByFilter from '../pipes/orderByFilter';

const listToFilter = state => state.characterSuccess;
const sortForFilter = state => state.sortArgsForFilter;

const getFilteredList = (fetchChatactersSuccess, sortArgsForFilter) => {
    return orderByFilter(fetchChatactersSuccess, sortArgsForFilter)
}

export const filterSelector = createSelector(
    listToFilter,
    sortForFilter,
    getFilteredList
)