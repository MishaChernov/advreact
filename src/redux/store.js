import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, enhancer);
window.store = store;

export default store;