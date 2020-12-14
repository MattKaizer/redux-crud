import { SHOW_ALERT, HIDE_ALERT } from '../types';

// EVERY REDUCER HAVE HIS OWN STAGE
const initialState = {
    alerta: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}