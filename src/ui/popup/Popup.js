import React from "react";
import { connect } from "react-redux";

import {
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

function Popup({ children, ...props }) {
  return (
    <Modal isOpen={props.showPopup}>
      <ModalOverlay />
      <ModalContent>
        {children}
      </ModalContent>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    showPopup: state.ui.showPopup,
  };
};

export default connect(mapStateToProps)(Popup);
