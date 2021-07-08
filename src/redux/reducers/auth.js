import axios from "axios";
import { user } from "../../api/api";
import { appName } from "../../config";
import { Record } from "immutable";

const ReducerRecord = Record({
  user: {},
  errors: null,
  loading: false,
});

export const moduleName = "auth";

export const SET_USER = `${appName}/${moduleName}/SET_USER`;
export const LOADING_UI = `${appName}/${moduleName}/LOADING_UI`;
export const ERRORS = `${appName}/${moduleName}/ERRORS`;
export const CLEAR_ERRORS = `${appName}/${moduleName}/ERRORS`;

const authReducer = (state = new ReducerRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: payload,
      };
    case ERRORS:
      return {
        ...state,
        errors: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

// Here are actions:
export const loginUser = (user) => (dispatch) => {
  dispatch({ type: LOADING_UI, payload: true });

  axios
    .post("/login", user)
    .then((response) => {
      dispatch({ type: LOADING_UI, payload: false });
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });

      localStorage.setItem("FBIdToken", "Bearer " + response.data.token);
      // this.props.history.push("/");
    })
    .catch((err) => {
      console.log(err);
      const abs = {...err.res.data};
      
      dispatch({ type: ERRORS, payload: abs });
      dispatch({ type: LOADING_UI, payload: false });
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((response) => {
      console.log(response);
      dispatch({
        type: SET_USER,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default authReducer;
