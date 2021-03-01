import React from "react";

const Button = ({label, onClick, variant}) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
