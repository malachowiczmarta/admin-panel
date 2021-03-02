import React from "react";
import {
  FormLabel,
  Input,
  Box,
  FormControl,
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
  type,
  required=true
}) => {

  return (
    <FormControl isRequired={required}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </FormControl>
  );
};

export default FormField;
