import axios from '../apiCallHelper';

export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';

export const searchCharacters = searchQuery => ({
    type: SEARCH_CHARACTERS,
    payload: searchQuery
});


export const fetchCharacter = (searchQ, callback) => dispatch => {
    // fetch search data
}