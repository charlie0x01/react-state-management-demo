const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initState = {
  loading: false,
  data: [],
  error: "",
};

// generates pending, fulfilled and rejected actions automatically
const faetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resposne) => resposne.data.map((user) => user.name));
});

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  extraReducers: (builder) => {
    builder.addCase(faetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(faetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(faetchUsers.rejected, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = action.error.messsage;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = faetchUsers;
