import React, { useState } from "react";
import { connect } from "react-redux";
import { setPopup } from "../../store/reducers/ui";

import Button from "../button/Button";
import FormField from "./FormField";

const initialFormState = {
  name: "",
  userName: "",
  city: "",
  email: "",
};

const Form = (props) => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    props.setPopup();
  };

  const handleCancel = () => {
    console.log("cancel");
    props.setPopup();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="input-name"
        name="name"
        placeholder="User Name"
        type="text"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        id="input-userName"
        name="userName"
        placeholder="Username"
        type="text"
        value={formValues.userName}
        onChange={handleInputChange}
      />

      <FormField
        id="input-city"
        name="city"
        placeholder="City"
        type="text"
        value={formValues.city}
        onChange={handleInputChange}
      />

      <FormField
        id="input-email"
        name="email"
        placeholder="Email"
        type="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <Button variant="cancel" label="Cancel" onClick={handleCancel} type="button"></Button>
      <Button variant="submit" label="Submit" />
    </form>


  );
};

const mapStateToProps = (state) => {
  return {
    showPopup: state.ui.showPopup,
  };
};

const mapDispatchToProps = {
  setPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
