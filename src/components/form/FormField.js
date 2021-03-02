import React from "react";
import {
  FormLabel,
  Input,
  Box,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  placeholder,
  type
}) => {

  return (
    <Box my="20px">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </Box>
  );
};

export default FormField;
