import { FETCH_CHARACTER } from './actions';

const initialState = {
    chatacters: []
};


export default function (state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case FETCH_CHARACTER:
            return {
                ...state,
                chatacters: action.payload
            }
        default: return state
    }
}