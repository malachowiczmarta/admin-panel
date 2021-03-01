const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEED = "users/FETCH_USERS_SUCCEED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";

const DELETE_USER = "users/DELETE_USER";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchUsersSucceed = (data) => ({
  type: FETCH_USERS_SUCCEED,
  payload: data,
});

const fetchDeleteSucceed = (id) => ({
    type: DELETE_USER,
    payload: id
});

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchUsersSucceed(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export const deleteUser = (id) => {
    return function (dispatch) {
      dispatch(fetchRequested());
      fetch(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`, {
        method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchDeleteSucceed(id));
        })
        .catch((error) => {
          dispatch(fetchFailed());
        });
    };
  };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USERS_SUCCEED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case DELETE_USER:
        return {
          ...state,
          isLoading: false,
          isError: false,
          users: state.users.filter(user => user.id !== action.payload)
        };
    default:
      return state;
  }
}

export default reducer;
