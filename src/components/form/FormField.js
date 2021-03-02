import React from "react";
import {
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

const FormField = ({
  onChange,
  value,
  label,
  name,
  id,
  placeholder,
  type,
  required=true,
}) => {

  return (
    <FormControl isRequired={required} mb="15px">
      <FormLabel htmlFor={id}>{label}:</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
      <FormErrorMessage/>
    </FormControl>
  );
};

export default FormField;
