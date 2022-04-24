import ReactDOM from "react-dom";
import React, { useEffect } from "react";

import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { incremented } from "./store/reducers";

function App() {
  const counter = useSelector((state: { value: number }) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>value: {counter.value}</h1>
      <button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        increment
      </button>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// yarn add redux react-redux
// yarn add -D @types/react-redux
