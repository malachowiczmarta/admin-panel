import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../store/reducers/users";

import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function DeleteButton({id, ...props}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleOpenAlert = () => {
    setIsOpen(!isOpen);
  }

  const deleteUser = () => {
    props.deleteUser(id);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button colorScheme="red" onClick={handleOpenAlert}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteUser} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = {
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
