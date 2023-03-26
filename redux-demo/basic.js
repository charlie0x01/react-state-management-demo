const redux = require("redux");

// createStore
const createStore = redux.createStore;

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
const store = createStore(cakeReducer);
console.log("init state : ", store.getState());

// subscriber callback function that triggers when state change
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(orderCake(1));
store.dispatch(orderCake(1));
store.dispatch(orderCake(1));

// unsubscribe
unsubscribe();
