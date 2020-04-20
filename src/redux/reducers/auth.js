import { authAPI } from '../../api/api';
import { appName } from '../../config';
import { Record } from 'immutable';

const ReducerRecord = Record({
  user: {},
  error: null,
  loading: false
})

export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;
export const SIGN_OUT = `${appName}/${moduleName}/SIGN_OUT`;
export const SIGN_OUT_ERROR = `${appName}/${moduleName}/SIGN_OUT_ERROR`;

const authReducer = (state = new ReducerRecord(), action) => {
  const { type, payload } = action;

  switch(type) {
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        loading: true
      }
    };
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: payload.user,
        error: null
      }
    }
    case SIGN_UP_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
      }
    };
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        loading: true
      }
    };
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: payload.user
      }
    };
    case SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    };
    case SIGN_OUT: {
      return new ReducerRecord()
    };

    default: {
      return state
    }
  }
};


// Here are actions:

// Here are thunks:
export const signUp = (email, password) => {

  return (dispatch) => {
    dispatch({
      type: SIGN_UP_REQUEST
    });

    authAPI.createUserWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: SIGN_UP_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SIGN_UP_ERROR,
        payload: error
      }))
  };
};

export const signIn = (email, password) => {
  
  return (dispatch) => {
    dispatch({
      type: SIGN_IN_REQUEST
    });

    authAPI.signInWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {user}
      }))
      .catch(error => dispatch({
        type: SIGN_IN_ERROR,
        payload: error
      }))
  }
}

export const signOut = () => {
  return dispatch => {
    dispatch({type: SIGN_OUT});
    authAPI.signOut();
  };
}

export default authReducer;
