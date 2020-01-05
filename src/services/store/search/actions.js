import { SEARCH_CHARACTERS } from '../../constants';


export const searchCharacters = searchQuery => ({
    type: SEARCH_CHARACTERS,
    payload: searchQuery
});


export const fetchCharacter = (searchQ, callback) => dispatch => {
    // fetch search data
}