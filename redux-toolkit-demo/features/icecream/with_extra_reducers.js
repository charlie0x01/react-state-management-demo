const { cakeActions } = require("../cake/cakeSlice");
const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams -= 1;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;
