// 1. we need createSlice from @redux/toolkit
import { createSlice } from "@reduxjs/toolkit";

// 2. init state for cakeSlice
const initState = {
  numOfCake: 10,
};

// 3. now we need to create slice for cake
// createSlice takes object as argument with these properties
// I. name of the
// II. initial State
// III. reducers
// further, reducers is an object of actions (functions) that we perform on the state

const cakeSlice = createSlice({
  name: "cake",
  initialState: initState,
  reducers: {
    ordered: (state) => {
      state.numOfCake -= 1;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

// createSlice automatically create actions and action generators for the given reducer functions

// export the slice and actions
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
