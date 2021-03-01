import React from "react";

import { Tr, Td } from "@chakra-ui/react";
import Button from "./button/Button";

const User = ({data, deleteUser}) => {
  return (
    <Tr>
      <Td>{data.id}</Td>
      <Td>{data.name}</Td>
      <Td>{data.username}</Td>
      <Td>{data.address.city}</Td>
      <Td>{data.email}</Td>
      <Td><Button label="delete" variant="delete" onClick={() => deleteUser(data.id)}/></Td>
    </Tr>
  );
};

export default User;
