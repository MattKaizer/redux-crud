import { SHOW_ALERT, HIDE_ALERT } from '../types';

// EVERY REDUCER HAVE HIS OWN STAGE
const initialState = {
    alerta: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return { 
                ...state,
                alerta: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}