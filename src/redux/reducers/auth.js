import { user } from '../../api/api';
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

    default: {
      return state
    }
  }
};


// Here are actions:

// Here are thunks:

export default authReducer;
