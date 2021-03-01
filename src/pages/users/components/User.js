import React from "react";

import { Tr, Td } from "@chakra-ui/react";

const User = ({data}) => {
  return (
    <Tr>
      <Td>{data.id}</Td>
      <Td>{data.name}</Td>
      <Td>{data.username}</Td>
      <Td>{data.address.city}</Td>
      <Td>{data.email}</Td>
    </Tr>
  );
};

export default User;
