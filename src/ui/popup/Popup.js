import React from "react";
import { connect } from "react-redux";

function Popup({ children, ...props }) {
  return (
    <>
      {props.showPopup ? (
        <div>
          <div>{children}</div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    showPopup: state.ui.showPopup,
  };
};

export default connect(mapStateToProps)(Popup);
