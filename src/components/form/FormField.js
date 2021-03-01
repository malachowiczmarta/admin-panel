import React from "react";

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
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default FormField;
