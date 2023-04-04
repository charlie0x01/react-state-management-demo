// this is a global store for our app
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// exampel with extra reducer for icecream
// import iceCreamReducer from "../features/icecream/with_extra_reducers";


// let's configure a store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// now export the store
export default store;
