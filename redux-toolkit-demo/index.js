// import the store
const store = require("./app/store");
// import cakeActions
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/icecreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

// subscribe to the store
const unsub = store.subscribe(() => {});

// dispatch actions
// order some cakes
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered(2));
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered(2));
// store.dispatch(cakeActions.ordered());
// store.dispatch(iceCreamActions.ordered(2));
// store.dispatch(cakeActions.ordered());

// // restock cakes
// store.dispatch(cakeActions.restocked(2));
// store.dispatch(iceCreamActions.restocked(4));

// fetch users
store.dispatch(fetchUsers());

// unsub to the store
// unsub();
