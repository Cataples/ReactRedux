// getstate
// store
// dispatch
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

//  create store
const store = createStore(counter);

// gets store state
console.log(store.getState());

//  dispatch actions (definite mai sus)
store.dispatch({ type: "INCREMENT" });

//  subscribe face o actiune la fiecare dispatch

// store.subscribe(() => {
//   document.body.innerText = store.getState();
//   console.log(store.getState());
// });

//  poate fi scris si asa
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
