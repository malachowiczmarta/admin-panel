import React from "react";
import { connect } from "react-redux";

import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import User from "./User";

const UsersTable = ({ deleteUser, editUser, ...props }) => {
  const { users } = props;

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>UserName</Th>
          <Th>City</Th>
          <Th>Email</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <User
            key={`user-${user.id}`}
            data={user}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        ))}
      </Tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(UsersTable);
