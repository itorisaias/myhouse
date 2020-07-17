import firebase from "../../api";
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
} from "./types";

export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          user.sendEmailVerification();
        });
      })
      .then(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.",
            });
          } else {
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Something went wrong, we couldn't create your account. Please try again.",
            });
          }
        });
      })
      .catch(() => {
        dispatch({ type: API_CALL_ERROR });
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Something went wrong, we couldn't create your account. Please try again.",
        });
      });
  } catch (err) {
    dispatch({ type: API_CALL_ERROR });
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again.",
    });
  }
};

export const signin = (email, password, callback) => async (dispatch) => {
  try {
    dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          console.log("IF", data.user.emailVerified);
          dispatch({ type: SIGNIN_SUCCESS });
          callback();
        } else {
          console.log("ELSE", data.user.emailVerified);
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "You haven't verified your e-mail address.",
          });
        }
      })
      .catch(() => {
        dispatch({ type: API_CALL_ERROR });
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Invalid login credentials",
        });
      });
  } catch (err) {
    dispatch({ type: API_CALL_ERROR });
    dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => async (dispatch) => {
  try {
    dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: API_CALL_ERROR });
        dispatch({
          type: SIGNOUT_ERROR,
          payload: "Error, we were not able to log you out. Please try again.",
        });
      });
  } catch (err) {
    dispatch({ type: API_CALL_ERROR });
    dispatch({
      type: SIGNOUT_ERROR,
      payload: "Error, we were not able to log you out. Please try again.",
    });
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: BEGIN_API_CALL });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: RESET_SUCCESS,
          payload:
            "Check your inbox. We've sent you a secured reset link by e-mail.",
        })
      )
      .catch(() => {
        dispatch({ type: API_CALL_ERROR });
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.",
        });
      });
  } catch (err) {
    dispatch({ type: API_CALL_ERROR });
    dispatch({ type: RESET_ERROR, payload: err });
  }
};
