const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCK = "ICE_CREAM_RESTOCK";

// An action have two parts
// 1. action object that hold action type and other properties which totatly depends on you
// 2. action create, basically a function that returns an action object

function orderCake(quantity) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

function restockCake(quantity) {
  return {
    type: CAKE_RESTOCK,
    payload: quantity,
  };
}

function orderIceCream(quantity) {
  return {
    type: ICE_CREAM_ORDERED,
    payload: quantity,
  };
}

function restockIceCream(quantity) {
  return {
    type: ICE_CREAM_RESTOCK,
    payload: quantity,
  };
}

// Reducer handles the actions and update the state accordingly
// Reducer is a function that takes two arguments first is initial state and the second is action
// Reducer take init state and action, update the given state according to given action and return the updated state

const initCake = {
  numOfCakes: 10,
};

// ice cream state
const initIceCream = {
  numOfIceCream: 10,
};

function reducerCake(state = initCake, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCK:
      return {
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
}

function reducerIceCream(state = initIceCream, action) {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICE_CREAM_RESTOCK:
      return {
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
}

// combining reducers to manage multiple states using one store
const reducers = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

// redux reponsibilities
// 1. hold the init state
// 2. allow access to state using store.getState()
// 3. allow state to be updated via dispatch(action)
// 4. register listners via subscribe(listner)
// 5. handles unregistering of listners via the fuction returned by subscribe(listner)

// 1
const store = createStore(reducers);
console.log("init state : ", store.getState());

// 4
const unsubscribe = store.subscribe(() => {
  console.log("Update State ", store.getState());
});

// 3
// bind action creator to bind multiple actions togather
const actions = bindActionCreators(
  {
    orderCake,
    orderIceCream,
    restockCake,
    restockIceCream,
  },
  store.dispatch
);

actions.orderCake(2);
actions.restockCake(3);

actions.restockIceCream(5);
actions.orderIceCream(4);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// 5
unsubscribe();
