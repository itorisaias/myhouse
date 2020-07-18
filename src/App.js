import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routers from "./routers";
import store, { persistor } from "./redux";

import './styles/reset.scss'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
}

export default App;
