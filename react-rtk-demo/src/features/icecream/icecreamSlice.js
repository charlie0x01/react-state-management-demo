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
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
