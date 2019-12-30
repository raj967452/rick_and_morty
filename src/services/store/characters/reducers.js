import { FETCH_CHARACTER, FETCH_CHARACTER_PENDING, FETCH_CHARACTER_ERROR } from './actions';

const initialState = {
    chatacters: [],
    pending: false,
    error: null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHARACTER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CHARACTER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_CHARACTER:
            return {
                ...state,
                pending: false,
                chatacters: action.chatacters
            }

        default: return state
    }
}