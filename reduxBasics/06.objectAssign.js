import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import expect from "expect";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodo();
console.log("tests passed");

const BasicExample = () => <p>Redux learning</p>;

export default BasicExample;
