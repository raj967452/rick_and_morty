import { UPDATE_SORT } from './actions'; 

const initialState = {
  type: ''
};


export default function(state = initialState, action) {
    switch(action.type){
        case UPDATE_SORT: 
        return {
            ...state,
            type: action.payload.type
        }
        default: return state
    }
}
