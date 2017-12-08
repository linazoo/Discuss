import { combineReducers } from 'redux';
import ViewsReducer from '../reducers/reducer_views';

const rootReducer = combineReducers({
  views: ViewsReducer
});

export default rootReducer;
