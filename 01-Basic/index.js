import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Constants
const INIT = "init";
const ADD_ITEM = "add";
const REMOVE_ITEM = "remove";
const ADD_ITEM_BY_AMT = "addByAmount";
// Store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// Reducer
function reducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case INIT:
      return { amount: action.payload };
      break;
    case ADD_ITEM:
      return { amount: state.amount + 1 };
      break;

    case REMOVE_ITEM:
      return { amount: state.amount - 1 };
      break;

    case ADD_ITEM_BY_AMT:
      return { amount: state.amount + action.payload };
      break;

    default:
      return state;
  }
}
// Global Store
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Change Global State

// Action Creaters

function init(value) {
  return { type: INIT, payload: value };
}
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
  store.dispatch(init(5000));
}, 2000);
