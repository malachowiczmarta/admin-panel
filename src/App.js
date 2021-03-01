import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { ChakraProvider } from "@chakra-ui/react";
import rootReducer from "./rootReducer";

import "./App.css";
import Users from "./pages/users/containers/Users";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer),
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  store = createStore(
    persistedReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
  );

let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <Users />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
