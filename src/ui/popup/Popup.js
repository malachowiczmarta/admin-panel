import React from "react";
import { connect } from "react-redux";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Button from "../../components/button/Button";

function Popup({ children, ...props }) {
  return (
    <Modal isOpen={props.showPopup}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>{children}</ModalBody>
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
