import React from "react";
import { createStore } from "redux";
import expect from "expect";

const counter = (state = 0, action) => {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//  create createStore (so we don't import it)
const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

store.dispatch({ type: "INCREMENT" });

const render = () => {
  document.body.innerText = store.getState();
  console.log(store.getState());
};

store.subscribe(render);

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
  console.log("clicked");
});

const BasicExample = () => <p>Redux learning</p>;
export default BasicExample;
