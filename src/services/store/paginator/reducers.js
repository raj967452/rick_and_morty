import { PAGINATOR_DATA } from '../../constants';
const initialState = {
    count: 0,
    pages: 0,
    next:'',
    prev:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PAGINATOR_DATA:
            return {
                ...state,
                paginatorInfo: action.paginatorInfo
            }

        default: return state
    }
}