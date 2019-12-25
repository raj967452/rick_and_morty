import { SEARCH_CHARACTERS } from './actions'; 

const initialState = {
  searchData: ''
};


export default function(state = initialState, action) {
    switch(action.type){
        case SEARCH_CHARACTERS: return {
            ...state,
            searchData: action.payload
        }
        default: return state
    }
}