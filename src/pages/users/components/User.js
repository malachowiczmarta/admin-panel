import React from "react";

import { Tr, Td } from "@chakra-ui/react";
import Button from "../../../components/button/Button";

const User = ({data, deleteUser, editUser}) => {
  return (
    <Tr>
      <Td>{data.id}</Td>
      <Td>{data.name}</Td>
      <Td>{data.username}</Td>
      <Td>{data.address.city}</Td>
      <Td>{data.email}</Td>
      <Td><Button label="edit" variant="edit" onClick={() => editUser(data.id)}/></Td>
      <Td><Button label="delete" variant="delete" onClick={() => deleteUser(data.id)}/></Td>
    </Tr>
  );
};

export default User;
