import { combineReducers } from 'redux';
import ViewsReducer from '../reducers/reducer_views';
import ActiveViewReducer from '../reducers/reducer_view';

const rootReducer = combineReducers({
  views: ViewsReducer,
  activeView: ActiveViewReducer
});

export default rootReducer;
