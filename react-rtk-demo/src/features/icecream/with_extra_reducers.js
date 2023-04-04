import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initState = {
  numOfIceCreams: 8,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState: initState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams -= 1;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
