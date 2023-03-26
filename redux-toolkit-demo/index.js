// import the store
const store = require("./app/store");
// import cakeActions
const { cakeAction } = require("./features/cake/cakeSlice");
const { iceCreamAction } = require("./features/icecream/icecreamSlice");

// subscribe to the store
const unsub = store.subscribe(() => {});

// dispatch actions
// order some cakes
store.dispatch(cakeAction.ordered());
store.dispatch(iceCreamAction.ordered(2));
store.dispatch(cakeAction.ordered());
store.dispatch(iceCreamAction.ordered(2));
store.dispatch(cakeAction.ordered());
store.dispatch(iceCreamAction.ordered(2));
store.dispatch(cakeAction.ordered());

// restock cakes
store.dispatch(cakeAction.restocked(2));
store.dispatch(iceCreamAction.restocked(4));

// unsub to the store
unsub();
