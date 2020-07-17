import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import config from "./config";

export default () => {
  const app = firebase.initializeApp(config);

  return {
    database: app.database(),
    auth: app.auth(),
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
};
