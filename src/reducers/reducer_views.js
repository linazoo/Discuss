import { FETCH_VIEWS } from '../actions/index';
export default function(state = null, action) {
    switch (action.type) {
    case FETCH_VIEWS:
        return action.payload.data.data.children;    
    }
    console.log('action received', action);
    return state;
    
}