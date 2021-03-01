import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";

import "./App.css";
import Users from "./pages/users/containers/Users";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <Users />
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
