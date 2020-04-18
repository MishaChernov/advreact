import { combineReducers } from 'redux';

const initialLoginState = {
  isFetching: false,
  isError: false,
  login: null,
  password: null
}

const login = (state = initialLoginState, action) => {
  switch(action.type) {
    case 'SET_IS_ERROR': {
      return {
        ...state,
        isError: action.payload
      }
    }
    case 'SET_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case 'SET_LOGIN': {
      return {
        ...state,
        login: action.payload
      }
    }
    case 'SET_PASSWORD': {
      return {
        ...state,
        password: action.payload
      }
    }
    default: {
      return state
    }
  }
};


// Here are actions:
export const setLogin = payload => ({type: 'SET_LOGIN', payload});
export const setPassword = payload => ({type: 'SET_PASSWORD', payload})
export const setIsFetching = payload => ({type: 'SET_IS_FETCHING', payload});
export const setIsError = payload => ({type: 'SET_IS_ERROR', payload});

// Here are thunks:
export const setLoginThunk = login => dispatch => {
  dispatch(setLogin(login));
}

const reducers = combineReducers({
  login
});

export default reducers;