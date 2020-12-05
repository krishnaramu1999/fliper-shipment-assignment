import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import APIReducer from './Action/reducer';

const apiInfo = Cookie.getJSON('APIInfo') || null;

const initialState = {
  data: { apiInfo },
};
const reducer = combineReducers({
  api: APIReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;