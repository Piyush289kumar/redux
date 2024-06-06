import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Constants
const ADD_ITEM = "add";
const REMOVE_ITEM = "remove";
const ADD_ITEM_BY_AMT = "addByAmount";
// Store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// Reducer
function reducer(state = { amount: 0 }, action) {
  if (action.type === ADD_ITEM) {
    return { amount: state.amount + 1 };
  }

  if (action.type === REMOVE_ITEM) {
    return { amount: state.amount - 1 };
  }

  if (action.type === ADD_ITEM_BY_AMT) {
    return { amount: state.amount + action.payload };
  }

  return state;
}
// Global Store
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Change Global State

// Action Creaters

function add() {
  return { type: ADD_ITEM };
}
function remove() {
  return { type: REMOVE_ITEM };
}

function addByAmount(val = 2) {
  return { type: ADD_ITEM_BY_AMT, payload: val };
}

setInterval(() => {
  store.dispatch(addByAmount(10));
}, 2000);
