import React from "react";

import { Tr, Td, Button } from "@chakra-ui/react";
import DeleteButton from "../../../components/deleteButton/DeleteButton";

const User = ({data, deleteUser, editUser, openPopup}) => {
  return (
    <Tr>
      <Td>{data.id}</Td>
      <Td>{data.name}</Td>
      <Td>{data.username}</Td>
      <Td>{data.address.city}</Td>
      <Td>{data.email}</Td>
      <Td><Button colorScheme="blue" onClick={() => editUser(data.id)}>edit</Button></Td>
      <Td><DeleteButton id={data.id} /></Td>
    </Tr>
  );
};

export default User;
