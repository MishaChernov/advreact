import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signIn from './signIn';
import authReducer from './auth';

const reducers = combineReducers({
  signIn,
  authReducer,
  form: formReducer
});

export default reducers;