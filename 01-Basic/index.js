import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// Store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// Reducer
function reducer(state = { amount: 0 }, action) {
  if (action.type === "add") {
    // state.amount = state.amount + 1;
    return { amount: state.amount + 1 };
  }

  return state;
}
// Global Store
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Change Global State
setInterval(() => {
  store.dispatch({ type: "add" });
}, 2000);
