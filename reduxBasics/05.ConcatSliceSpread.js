import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import expect from "expect";

const addCounter = list => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  removeCounter(listBefore);

  expect(testRemoveCounter(listBefore, 1)).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  incrementCounter(listBefore);

  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
testIncrementCounter();

console.log("Tests passed");

const BasicExample = () => <p>Redux learning</p>;

export default BasicExample;
