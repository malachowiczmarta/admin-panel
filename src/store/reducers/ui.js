// const ALERT = "ui/FAV_ALERT";
// const ALERT_TYPE = "ui/FAV_ALERT_TYPE";
const SHOW_POPUP = "ui/SHOW_POPUP";

const INITIAL_STATE = {
//   showAlert: false,
//   alertType: "",
  showPopup: false,
};

// export function alert() {
//   return {
//     type: ALERT,
//   };
// }

// export function setAlertType(type) {
//   return {
//     type: ALERT_TYPE,
//     payload: type,
//   };
// }

export function setPopup() {
  return {
    type: SHOW_POPUP,
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case ALERT:
    //   return { ...state, showAlert: !state.showAlert };
    // case ALERT_TYPE:
    //   return { ...state, alertType: action.payload };
    case SHOW_POPUP:
      return { ...state, showPopup: !state.showPopup };
    default:
      return state;
  }
}

export default reducer;