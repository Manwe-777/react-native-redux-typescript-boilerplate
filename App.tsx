import React from "react";
import { Provider } from "react-redux";
import Main from "./src/Main";
import store from "./src/redux/store";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
