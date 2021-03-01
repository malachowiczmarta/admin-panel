const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEDED = "users/FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";

// const RESET_USERS = "users/USERS_RESET";
// const FETCH_USER_SUCCEDED = "users/FETCH_USER_SUCCEDED";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchUsersSucceded = (data) => ({
  type: FETCH_USERS_SUCCEDED,
  payload: data,
});
// const fetchUserSucceded = (data) => ({
//   type: FETCH_USER_SUCCEDED,
//   payload: data,
// });

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data")
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
        dispatch(fetchUsersSucceded(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

// export const addUser = () => {
//   return function (dispatch) {
//     dispatch(fetchRequested());
//     fetch("https://randomuser.me/api/?results=1")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchUserSucceded(data.results));
//       })
//       .catch((error) => {
//         dispatch(fetchFailed());
//       });
//   };
// };

// export const reset = () => ({ type: RESET_USERS });

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };
    // case FETCH_USER_SUCCEDED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     users: state.users.concat(action.payload),
    //   };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // case RESET_USERS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     users: [],
    //   };
    default:
      return state;
  }
};

export default reducer;
