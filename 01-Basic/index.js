import { createStore } from "redux";

const store = createStore(reducer);

function reducer(state = { amount: 1 }, action) {
  return state;
}

console.log(store.getState());
