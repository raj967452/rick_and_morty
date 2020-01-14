import {FETCH_CHARACTER_PENDING, FETCH_CHARACTER, FETCH_CHARACTER_ERROR} from '../../constants';


export const fetchChatactersPending = () => ({
    type: FETCH_CHARACTER_PENDING
})

export const fetchChatactersSuccess = (data) => ({
    type: FETCH_CHARACTER,
    data
})

export const fetchChatactersError = (error) => ({
    type: FETCH_CHARACTER_ERROR,
    error
})

/*export const fetchCharacter = (filters, sortBy, callback) => async dispatch => {
    try {
        const res = await axios.get('/character');
        let { results } = res.data;
        console.log(filters);
        if (!!filters && filters.length > 0) {
            results = results.filter(p => filters.find(filterType => p.gender === filterType));
        }
        if (!!sortBy) {
            results = results.sort(sortFunction[sortBy]);
        }
        if (!!callback) {
            callback();
        }
        return dispatch({
            type: FETCH_CHARACTER,
            payload: results
        });
    }
    catch (err) {
        console.log('Could not fetch any characters. Try again later.');
    }
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