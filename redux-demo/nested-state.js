// in this example i'm going to make use of a library called immer
// this can help us mutate the nested state

const redux = require("redux");
const produce = require("immer").produce; // this will help us change the nested state in one go

// init state (nested state)
const initState = {
  name: "Abdullah Tanveer",
  address: {
    street: "1234 test",
    phone: "12345678890",
  },
};

// action contants
const UPDATE_STREET = "UPDATE_STREET";

// action generator
const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

function tradionalReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
}

function immerReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
}

const store = redux.createStore(immerReducer);
console.log("init state : ", store.getState());

// subscribe
const unsub = store.subscribe(() => {
  console.log("updated state : ", store.getState()); // prompt state when ever it changes
});

// dispatch actions
store.dispatch(updateStreet(" updated street 1100"));

// unsub
unsub();
