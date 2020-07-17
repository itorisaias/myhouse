import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_NOT_VERIFIED,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  RESET_SUCCESS,
  RESET_ERROR,
  BEGIN_API_CALL,
  API_CALL_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  authMsg: "",
  apiCallsInProgress: 0
};

export const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
    return { ...state, authMsg: "" };
  } else if (
    action.type === SIGNUP_SUCCESS ||
    action.type === SIGNUP_ERROR ||
    action.type === SIGNIN_ERROR ||
    action.type === EMAIL_NOT_VERIFIED ||
    action.type === SIGNOUT_ERROR ||
    action.type === RESET_SUCCESS ||
    action.type === RESET_ERROR
  ) {
    return { ...state, authMsg: action.payload };
  } else {
    return state;
  }
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export const apiStatusReducer = (state = INITIAL_STATE, action) => {
  if (action.type === BEGIN_API_CALL) {
    return { ...state, apiCallsInProgress: 1 };
  } else if (action.type === API_CALL_ERROR) {
    return { ...state, apiCallsInProgress: 0 };
  } else if (actionTypeEndsInSuccess(action.type)) {
    return { ...state, apiCallsInProgress: 0 };
  } else {
    return state;
  }
}

export default combineReducers({
  firebaseReducer,
  authReducer,
  apiStatusReducer
});
