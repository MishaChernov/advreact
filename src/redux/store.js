import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
window.store = store;

export default store;