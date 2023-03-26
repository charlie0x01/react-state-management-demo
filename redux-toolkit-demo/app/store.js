// this is a global store for our app
const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");
// exampel with extra reducer for icecream
// const iceCreamReducer = require("../features/icecream/with_extra_reducers");

const logger = reduxLogger.createLogger();

// let's configure a store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// now export the store
module.exports = store;
