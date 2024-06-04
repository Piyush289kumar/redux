import { createStore } from "redux";
// Store
const store = createStore(reducer);
// Reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "add") {
    return { state: state.amount + 1 };
  }

  return state;
}
// Global Store
console.log(store.getState());

// Change Global State
store.dispatch({ type: "add" });

console.log(store.getState());
console.log(store.getState());