import * as api from "../../api";

export const GET_PROPERTIES = "GET_PROPERTIES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SAVE_PROPERTY = "SAVE_PROPERTY";

export function fetchProperties(search) {
  return async (dispatch) => {
    return await api.filterProperties(search).then((snapshot) => {
      dispatch({ type: GET_PROPERTIES, value: snapshot });
    });
  };
}

export function doAuthentication(history) {
  return async (dispatch) => {
    api.login((user) => {
      if (user) {
        console.log("xxx_user_loggedIN", user);

        dispatch({ type: LOGIN, user });
        history.push("/admin");
      }
    });
  };
}

export function doLogout() {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}

export function saveProperty(property) {
  return async (dispatch) => {
    api
      .saveProperty(property)
      .then(() => dispatch({ type: SAVE_PROPERTY, property }));
  };
}
