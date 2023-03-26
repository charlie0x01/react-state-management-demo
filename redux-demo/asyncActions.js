// async actions that comes handy when working with api calls
const redux = require("redux");
const produce = require("immer").produce;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// init state
const initState = {
  loading: false,
  data: [],
  error: "",
};

// action contants
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// action generators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUserFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USERS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
      });
    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload;
      });
    default:
      return state;
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/userssdfa")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("init state : ", store.getState());

const unsub = store.subscribe(() =>
  console.log("updated state : ", store.getState())
);

store.dispatch(fetchUsers());