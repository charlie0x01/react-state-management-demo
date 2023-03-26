// this is a global store for our app
const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/icecreamSlice");

const logger = reduxLogger.createLogger();

// let's configure a store
// store takes reducers that we returned from out slice
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// now export the store
module.exports = store;
