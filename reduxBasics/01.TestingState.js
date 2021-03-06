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

expect(counter(0, { type: "INCREMENT" })).toEqual(1);

expect(counter(1, { type: "INCREMENT" })).toEqual(2);

expect(counter(2, { type: "DECREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);

expect(counter(1, { type: "SOMETHING_ELSE" })).toEqual(1);

console.log("Tests passed");

const BasicExample = () => <p>HEy</p>;
export default BasicExample;
