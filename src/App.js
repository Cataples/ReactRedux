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

const store = createStore(counter);

console.log(store.getState());

const BasicExample = () => <p>this is redux learning</p>;
export default BasicExample;
