import firebase from "./firebase";

const { auth, googleProvider, database } = firebase();

export const login = (dispatch) => {
  const user = auth.currentUser;
  console.log(">", user);

  if (!user) {
    auth.signInWithPopup(googleProvider);
    auth.onAuthStateChanged(dispatch);
  }
};

export const logout = () => {
  auth.signOut();
};

export const saveUser = ({ name, surname, email }) => {
  const { uid } = auth.currentUser;
  const payload = {
    uid,
    name,
    surname,
    email,
  };

  const userKey = database.ref().child("users").push().key;

  let updates = {
    [`/users/${userKey}`]: payload,
  };

  database.ref().update(updates);
};

export const saveProperty = (property) => {};

export const filterProperties = (filter) => {};
