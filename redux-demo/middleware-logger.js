const redux = require("redux");
const reduxLogger = require("redux-logger");

// createStore
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware; // middleware is execute between dispatching an action and reaching the reducer
const logger = reduxLogger.createLogger();

// init state
const initState = {
  numOfCakes: 10,
};

// action contants
const ORDER_CAKE = "ORDER_CAKE";

// action generator
const orderCake = (quantity) => {
  return {
    type: ORDER_CAKE,
    payload: quantity,
  };
};

// reducer
function cakeReducer(state = initState, action) {
  switch (action.type) {
    case ORDER_CAKE:
      return { numOfCakes: state.numOfCakes - action.payload };
    default:
      return state;
  }
}

// store
const store = createStore(cakeReducer, applyMiddleware(logger));

// subscriber callback function that triggers when state change
const unsubscribe = store.subscribe(() => {});

// dispatch actions
store.dispatch(orderCake(1));
store.dispatch(orderCake(1));
store.dispatch(orderCake(1));

// unsubscribe
unsubscribe();
