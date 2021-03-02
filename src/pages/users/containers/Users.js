import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../../store/reducers/users";
import { setPopup } from "../../../store/reducers/ui";
import UsersTable from "../components/UsersTable";
import Popup from "../../../ui/popup/Popup";
import Form from "../../../components/form/Form";
import { Box, Flex, Button, Heading } from "@chakra-ui/react";

const Users = (props) => {
  const fetchUsers = props.fetchUsers;
  const users = props.users;
  const [editedId, setEditedId] = useState("");

  useEffect(() => {
    if (users && !users.length) {
      fetchUsers();
    }
  }, [users, fetchUsers]);

  const openEditPopup = (id) => {
    setEditedId(id);
    props.setPopup();
  };

  const openAddUserPopup = () => {
    props.setPopup();
  };

  return (
    <Box maxW="960px" mx="auto" my="50px">
      <Flex w="full" align="center" justify="space-between" my="20px">
        <Heading as="h1" size="lg">
          User List
        </Heading>
        <Button colorScheme="green" onClick={openAddUserPopup}>
          Add new user
        </Button>
      </Flex>
      <Popup>
        <Form editId={editedId} />
      </Popup>
      {props.isError && <p>an error has occurred</p>}
      {props.isLoading ? (
        <p>loading...</p>
      ) : (
        <UsersTable
          editUser={openEditPopup}
        />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
    showPopup: state.ui.showPopup,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  setPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
