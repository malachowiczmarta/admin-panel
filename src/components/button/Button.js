import React from "react";

const Button = ({label, onClick, variant, type}) => {
  return <button onClick={onClick} type={type}>{label}</button>;
};

export default Button;
