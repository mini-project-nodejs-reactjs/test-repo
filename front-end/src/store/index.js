import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store