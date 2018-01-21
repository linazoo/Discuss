import { FETCH_VIEW, REMOVE_ACTIVE_VIEW } from '../actions/index';
export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_VIEW:
			return Object.assign({}, state, {
				view: action.payload.data[0].data.children[0].data,
				replies: action.payload.data[1].data.children
			})
		case REMOVE_ACTIVE_VIEW:
			return {}
	}
	return state;

}