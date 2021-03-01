import React from "react";
import {
  FormLabel,
  Input,
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
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></Input>
    </>
  );
};

export default FormField;
