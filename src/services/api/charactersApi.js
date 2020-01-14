import axios from './apiCallHelper';

import { fetchChatactersSuccess, fetchChatactersPending, fetchChatactersError } from '../store/characters/actions';
import { sortArgsForFilter, sortChatactersError} from '../store/sort/actions';
import { paginatorInfoData } from '../store/paginator/actions';

export const getCharacters = (url) => {
    return dispatch => {
        dispatch(fetchChatactersPending());
        axios.get(url)
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                let { results, info } = res.data;
                dispatch(fetchChatactersSuccess(results));
                dispatch(paginatorInfoData(info));
                return results;
            })
            .catch(err => {
                dispatch(fetchChatactersError(err));
            })
    }
}

export const getSortedCharacters = (sortType) => {
    return dispatch => {
        try {
            dispatch(sortArgsForFilter(sortType));
        } catch (error) {
            dispatch(sortChatactersError("error in sorting"));
        }
    }
}

/*
/*const res = axios.get('/character');
let { results } = res.data;

if (!!filters && filters.length > 0) {
    results = results.filter(p => filters.find(filterType => p.gender === filterType));
}
if (!!sortBy) {
    results = results.sort(sortFunction[sortBy]);
}
if (!!callback) {
    callback();
}

return results;   */


//console.log('Could not fetch any characters. Try again later.');

/* }
}*/


/*const sortFunction = {
    assending: (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    },
    descending: (a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
    }
};*/