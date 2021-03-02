const SHOW_POPUP = "ui/SHOW_POPUP";

const INITIAL_STATE = {
  showPopup: false,
};

export function setPopup() {
  return {
    type: SHOW_POPUP,
  };
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return { ...state, showPopup: !state.showPopup };
    default:
      return state;
  }
}

export default reducer;