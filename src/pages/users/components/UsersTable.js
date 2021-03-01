import React from "react";
import { connect } from "react-redux";

import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import User from "./User";

const UsersTable = (props) => {
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
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
              <User data={user} />
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
