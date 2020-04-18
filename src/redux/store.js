import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, logger);

const store = createStore(reducers, enhancer);
window.store = store;

export default store;