import axios from './apiCallHelper';

import { fetchChatactersSuccess, fetchChatactersPending, fetchChatactersError } from '../store/characters/actions';
import { updateSort, sortChatactersError} from '../store/sort/actions';

export const getCharacters = () => {
    return dispatch => {
        dispatch(fetchChatactersPending());
        axios.get('/character')
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                let { results } = res.data;
                dispatch(fetchChatactersSuccess(results));
                return results;
            })
            .catch(err => {
                dispatch(fetchChatactersError(err));
            })
    }
}

export const getSortedCharacters = (characterData, sortType) => {
    return dispatch => {
        try {
            dispatch(updateSort(characterData, sortType));
        } catch (error) {
            dispatch(sortChatactersError("error in sorting"));
        }
    }
}

/*export default {
    getCharacters: () => {*/
/*return dispatch => {
    dispatch(fetchChatactersPending());
    axios.get('/character')
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(fetchChatactersSuccess(res.data));
        return res.data;
    })
    .catch( err => {
        dispatch(fetchChatactersError(err));
    })
}*/
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