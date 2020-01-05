
import { UPDATE_FILTERS } from '../../constants';

const initialState = {
    items: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FILTERS: return {
            ...state,
            items: action.payload
        }
        default: return state
    }
}
