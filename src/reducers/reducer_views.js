import { FETCH_VIEWS, EMPTY_VIEWS } from '../actions/index';
export default function (state = [], action) {
	switch (action.type) {
		case FETCH_VIEWS:
      return action.payload.data.data.children;
    case EMPTY_VIEWS:
      return action.payload;
	}
	console.log('action received', action);
	return state;

}