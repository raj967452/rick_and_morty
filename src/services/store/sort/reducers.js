import { SORT_CHARACTER } from '../../constants';

const initialState = {
    sortArg: 'asc'
};

export const sortArgsForFilter = (state = initialState, action) => {

    switch (action.type) {
        case SORT_CHARACTER:
            return action.sortArg;

        default: return state
    }
}

/*export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SORT:
            return {
                ...state,
                type: action.payload
            }
        default: return state
    }
}*/
