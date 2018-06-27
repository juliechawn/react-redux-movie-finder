import { combineReducers } from 'redux';
import searchReducer from './containers/MovieSearch/reducer';
import detailReducer from './containers/MovieDetail/reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    details: detailReducer
});

export default rootReducer;