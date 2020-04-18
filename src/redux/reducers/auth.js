import firebase from 'firebase';
import { appName } from '../../config';
import { Record } from 'immutable';

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false
})

export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

const authReducer = (state = ReducerRecord, action) => {
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

    default: {
      return state
    }
  }
};


// Here are actions:

// Here are thunks:
export const signUp = (email, password) => {
  console.clear();
  return (dispatch) => {
    dispatch({
      type: SIGN_UP_REQUEST
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
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

export default authReducer;
